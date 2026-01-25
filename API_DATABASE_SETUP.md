# API & Database Integration Guide for Pulse 2026

## Recommended Tech Stack

### 1. **API Client** (Connecting to External API)
- **Native `fetch`** (Recommended) - Built into Next.js, works great with Server Components
- **Alternative**: `axios` if you need interceptors, better error handling

### 2. **Database** (Choose One)
- **PostgreSQL + Supabase** (Recommended) - Free tier, great Next.js integration, PostgreSQL reliability
- **PostgreSQL + Vercel Postgres** - If deploying on Vercel, seamless integration
- **PlanetScale** - MySQL-based, serverless, great for Next.js
- **MongoDB Atlas** - If you prefer NoSQL (less common for this use case)

### 3. **ORM/Query Builder**
- **Prisma** (Recommended) - Most popular, excellent TypeScript support, great DX
- **Drizzle ORM** - Lighter, faster, newer alternative
- **Raw SQL** - If you want maximum control (not recommended for beginners)

### 4. **Environment Variables**
- Use `.env.local` for local development
- Use Vercel environment variables for production

---

## Recommended Setup: PostgreSQL + Prisma + Supabase

### Why This Stack?
- ✅ **PostgreSQL**: Industry standard, reliable, great for relational data (events, team members, sponsors)
- ✅ **Supabase**: Free tier, built-in auth (if needed later), great Next.js docs
- ✅ **Prisma**: Type-safe queries, auto-generated types, excellent developer experience
- ✅ **Native fetch**: No extra dependencies, works perfectly with Next.js Server Components

---

## Step-by-Step Setup

### Step 1: Install Dependencies

```bash
cd pulse-2026-nextjs
npm install prisma @prisma/client
npm install -D prisma
```

### Step 2: Set Up Supabase (or Your Database)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Get your connection string from Settings > Database
4. Copy the connection string (format: `postgresql://...`)

### Step 3: Configure Environment Variables

Create `.env.local` in your project root:

```env
# Database
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"

# External API (if needed)
EXTERNAL_API_URL="https://api.example.com"
EXTERNAL_API_KEY="your-api-key-here"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

**Important**: Add `.env.local` to `.gitignore` (should already be there)

### Step 4: Initialize Prisma

```bash
npx prisma init
```

This creates:
- `prisma/schema.prisma` - Your database schema
- `.env` - Environment variables (use `.env.local` instead)

### Step 5: Define Your Database Schema

Edit `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Team Members
model TeamMember {
  id        String   @id @default(cuid())
  name      String
  title     String
  imageUrl  String
  role      String   // "director", "treasurer", "logistics", etc.
  year      Int      @default(2026)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Events
model Event {
  id          String   @id @default(cuid())
  day         String
  shortDay    String
  title       String
  startTime   String
  endTime     String
  description String?
  location    String?
  year        Int      @default(2026)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// Sponsors
model Sponsor {
  id        String   @id @default(cuid())
  name      String
  imageUrl  String
  tier      String?  // "platinum", "gold", "silver", etc.
  year      Int      @default(2026)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Images (for moving images to database)
model Image {
  id        String   @id @default(cuid())
  url       String
  alt       String?
  category  String?  // "team", "sponsor", "banner", etc.
  year      Int      @default(2026)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Step 6: Create and Run Migrations

```bash
# Create migration
npx prisma migrate dev --name init

# Generate Prisma Client (run after schema changes)
npx prisma generate
```

### Step 7: Create Prisma Client Singleton

Create `lib/prisma.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

This prevents multiple Prisma instances in development (Next.js hot reload issue).

### Step 8: Create API Client for External API

Create `lib/api-client.ts`:

```typescript
const API_BASE_URL = process.env.EXTERNAL_API_URL || 'https://api.example.com'
const API_KEY = process.env.EXTERNAL_API_KEY

export async function fetchFromExternalAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(API_KEY && { 'Authorization': `Bearer ${API_KEY}` }),
      ...options?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`)
  }

  return response.json()
}
```

### Step 9: Create Data Fetching Functions

Create `lib/data/events.ts`:

```typescript
import { prisma } from '@/lib/prisma'

export async function getEvents(year: number = 2026) {
  return await prisma.event.findMany({
    where: { year },
    orderBy: { day: 'asc' },
  })
}

export async function getEventById(id: string) {
  return await prisma.event.findUnique({
    where: { id },
  })
}
```

Create `lib/data/team.ts`:

```typescript
import { prisma } from '@/lib/prisma'

export async function getTeamMembers(year: number = 2026) {
  return await prisma.teamMember.findMany({
    where: { year },
    orderBy: { role: 'asc' },
  })
}

export async function getTeamMembersByRole(role: string, year: number = 2026) {
  return await prisma.teamMember.findMany({
    where: { role, year },
  })
}
```

Create `lib/data/sponsors.ts`:

```typescript
import { prisma } from '@/lib/prisma'

export async function getSponsors(year: number = 2026) {
  return await prisma.sponsor.findMany({
    where: { year },
    orderBy: { tier: 'asc' },
  })
}
```

### Step 10: Use in Server Components

Update `app/events/page.tsx`:

```typescript
import { getEvents } from '@/lib/data/events'
import EventCard from '@/components/EventCard'
import styles from './page.module.css'

export default async function EventsPage() {
  const events = await getEvents(2026)
  
  // Group events by day (transform database data to your component format)
  const groupedEvents = groupEventsByDay(events)
  
  return (
    <div className={styles.container}>
      {/* Your existing UI */}
    </div>
  )
}
```

### Step 11: Create Next.js API Routes (If Needed)

Create `app/api/events/route.ts`:

```typescript
import { NextResponse } from 'next/server'
import { getEvents } from '@/lib/data/events'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const year = parseInt(searchParams.get('year') || '2026')
    
    const events = await getEvents(year)
    return NextResponse.json(events)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}
```

---

## Alternative: If Using External API Only (No Database)

If you're only connecting to an external API (no database needed):

### Simple API Client Setup

Create `lib/api.ts`:

```typescript
const API_URL = process.env.EXTERNAL_API_URL || 'https://api.example.com'

export async function fetchEvents() {
  const response = await fetch(`${API_URL}/events`, {
    headers: {
      'Authorization': `Bearer ${process.env.EXTERNAL_API_KEY}`,
    },
    next: { revalidate: 60 } // Cache for 60 seconds
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch events')
  }
  
  return response.json()
}
```

Use in Server Component:

```typescript
import { fetchEvents } from '@/lib/api'

export default async function EventsPage() {
  const events = await fetchEvents()
  
  return (
    <div>
      {/* Render events */}
    </div>
  )
}
```

---

## Best Practices

### 1. **Use Server Components by Default**
- Fetch data in Server Components (no `'use client'`)
- Only use Client Components for interactivity

### 2. **Error Handling**
```typescript
export default async function EventsPage() {
  try {
    const events = await getEvents()
    return <EventsList events={events} />
  } catch (error) {
    return <Error message="Failed to load events" />
  }
}
```

### 3. **Caching**
- Use `fetch` with `next: { revalidate: 60 }` for time-based revalidation
- Use `cache()` from React for request deduplication

### 4. **Type Safety**
- Generate Prisma types: `npx prisma generate`
- Use TypeScript interfaces for API responses

### 5. **Environment Variables**
- Never commit `.env.local`
- Use `NEXT_PUBLIC_` prefix only for client-side variables

---

## Migration Strategy

### Phase 1: Set Up Infrastructure
1. Install Prisma
2. Set up database (Supabase)
3. Create schema
4. Run migrations

### Phase 2: Migrate Data
1. Create seed script to populate database
2. Move hardcoded data to database
3. Update components to fetch from database

### Phase 3: Integrate External API
1. Set up API client
2. Create API routes if needed
3. Connect to external endpoints

### Phase 4: Move Images to Database/CDN
1. Upload images to Supabase Storage or Cloudinary
2. Store URLs in database
3. Update image references

---

## Quick Start Commands

```bash
# Install Prisma
npm install prisma @prisma/client
npm install -D prisma

# Initialize Prisma
npx prisma init

# After editing schema.prisma:
npx prisma migrate dev --name init
npx prisma generate

# View database in Prisma Studio
npx prisma studio

# Seed database (create prisma/seed.ts first)
npx prisma db seed
```

---

## Resources

- [Prisma Docs](https://www.prisma.io/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
