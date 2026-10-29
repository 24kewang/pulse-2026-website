import { mockPastEvents } from "@/lib/mockPastEvents";

// Nullability marked "assumed" is unconfirmed; tighten once the backend PR lands
export interface PastEventPhoto {
  id: string;
  url: string;
  altText: string | null;       // assumed
  caption: string | null;       // assumed
}

export interface PastEventProject {
  id: string;
  projectName: string;
  competitionType: string;
  teamName: string | null;      // assumed
  projectUrl: string | null;    // assumed
  repositoryUrl: string | null; // assumed
}

export interface PastEvent {
  id: string;
  title: string;
  description: string | null;
  startTime: string;
  endTime: string;
  imageUrl: string | null;
  imageAlt: string | null;
  photos: PastEventPhoto[];
  projects: PastEventProject[];
}

const normalize = (events: PastEvent[]): PastEvent[] =>
  events
    .map((event) => ({
      ...event,
      photos: event.photos ?? [],
      projects: event.projects ?? [],
    }))
    .sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime());

export async function getPastEvents(): Promise<PastEvent[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  // No backend configured yet, so serve mock data
  if (!baseUrl) return normalize(mockPastEvents);

  try {
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/past-events`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.error(`GET /past-events failed with status ${res.status}`);
      return [];
    }
    return normalize(await res.json());
  } catch (e) {
    console.error("GET /past-events failed:", e);
    return [];
  }
}
