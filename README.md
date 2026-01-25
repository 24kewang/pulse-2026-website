This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## React vs Next.js
Lighthouse 36 -> 81 mobile
Lighthouse 42 -> 100 desktop
Initial load time reduced by 96%
Reduced JS bundle size by 93% (11.6MB -> 828KB)
Database integration = Postgres + Supabase
ORM = Prisma 
Use fetch to connect to API client
Instead of cPanel can deploy for free on Vercel to illinois domain

todo...
supabase: users table and events table (static info?) | low level security can make db calls on frontend (auto generates an api?)
api: qr code logic (qr code at event, user scans in app, for check-in) (for certain events you can have user check-in)
bigger events have staff qr code check-in, staff uses app and scans user, user generates a qr code for account and then staff scans them in for that event
diff endpoints for staff checkin and user checkin
verifying qr code decoding and encoding is all in backend api

look into mobile app
