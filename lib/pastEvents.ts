import { mockPastEvents } from "@/lib/mockPastEvents";

// Mirrors GET /past-events in pulse-api (src/services/past-events/past-events-schemas.ts)
export interface PastEventPhoto {
  id: string;                   // uuid
  url: string;                  // absolute http(s) Supabase public URL
  altText: string;              // non-empty
  caption: string | null;
}

export interface PastEventProject {
  id: string;                   // uuid
  projectName: string;          // non-empty
  competitionType: string;      // free text, no fixed set
  teamName: string;             // non-empty
  projectUrl: string | null;    // http(s) when set
  repositoryUrl: string | null; // http(s) when set, not necessarily GitHub
}

export interface PastEvent {
  id: string;                   // uuid
  title: string;
  description: string | null;
  startTime: string;            // ISO 8601, `Z` or a numeric offset
  endTime: string;              // ISO 8601, `Z` or a numeric offset
  imageUrl: string | null;      // photos[0].url, null when there are no photos
  imageAlt: string | null;      // photos[0].altText, null when there are no photos
  photos: PastEventPhoto[];
  projects: PastEventProject[];
}

export async function getPastEvents(): Promise<PastEvent[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  // No backend configured yet, so serve mock data
  if (!baseUrl) return mockPastEvents;

  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/past-events`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.error(`GET /past-events failed with status ${res.status}`);
      return [];
    }
    // The API already sorts events, photos and projects and always sends both arrays
    return await res.json();
  } catch (e) {
    console.error("GET /past-events failed:", e);
    return [];
  }
}
