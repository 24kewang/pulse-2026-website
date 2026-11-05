import type { PastEvent } from "@/lib/pastEvents";

// Placeholder data used until NEXT_PUBLIC_API_URL points at the backend.
// Matches the GET /past-events contract: newest first, imageUrl/imageAlt taken from
// the first photo, and only states the API can return (sparse events are normal).
// Photo URLs are local paths so mock mode needs no Supabase access.
export const mockPastEvents: PastEvent[] = [
  // Photos only
  {
    id: "5b0f3c1e-2d4a-4f6b-9a8c-1e2f3a4b5c03",
    title: "Midnight Pancakes",
    description: "Late-night pancakes during Pulse 2026.",
    startTime: "2026-02-18T23:00:00Z",
    endTime: "2026-02-19T02:00:00Z",
    imageUrl: "/assets/2026/team/DSCF2791.jpeg",
    imageAlt: "Staff serving pancakes",
    photos: [
      {
        id: "8a1d2e3f-4b5c-4d6e-8f70-1a2b3c4d5e06",
        url: "/assets/2026/team/DSCF2791.jpeg",
        altText: "Staff serving pancakes",
        caption: "Flipping pancakes at midnight",
      },
    ],
    projects: [],
  },
  // Photos and projects
  {
    id: "5b0f3c1e-2d4a-4f6b-9a8c-1e2f3a4b5c04",
    title: "Pulse 2026",
    description: "Our fourteenth year: AMD, Astera Labs, and TI joined us for talks, roundtables, and four competitions.",
    startTime: "2026-02-16T15:00:00-06:00",
    endTime: "2026-02-22T20:00:00-06:00",
    imageUrl: "/assets/2026/team/DSCF2787.jpeg",
    imageAlt: "Pulse 2026 staff group photo",
    photos: [
      {
        id: "8a1d2e3f-4b5c-4d6e-8f70-1a2b3c4d5e03",
        url: "/assets/2026/team/DSCF2787.jpeg",
        altText: "Pulse 2026 staff group photo",
        caption: "2025-26 Pulse staff",
      },
      {
        id: "8a1d2e3f-4b5c-4d6e-8f70-1a2b3c4d5e04",
        url: "/assets/2026/team/DSCF2791.jpeg",
        altText: "Pulse 2026 team in ECEB",
        caption: null,
      },
      {
        id: "8a1d2e3f-4b5c-4d6e-8f70-1a2b3c4d5e05",
        url: "/assets/2026/banner.png",
        altText: "Pulse 2026 banner",
        caption: "This year's banner",
      },
    ],
    projects: [
      {
        id: "c3d4e5f6-0718-4a29-b3c4-d5e6f7a8b903",
        projectName: "FPGA Rhythm Game",
        competitionType: "Hardware",
        teamName: "Team Voltage",
        projectUrl: "https://example.com/rhythm",
        repositoryUrl: null,
      },
      {
        id: "c3d4e5f6-0718-4a29-b3c4-d5e6f7a8b904",
        projectName: "StudyBuddy",
        competitionType: "Software",
        teamName: "Null Pointers",
        projectUrl: "https://example.com/studybuddy",
        repositoryUrl: "https://gitlab.com/example/studybuddy",
      },
      {
        id: "c3d4e5f6-0718-4a29-b3c4-d5e6f7a8b905",
        projectName: "Accessible Door Opener",
        competitionType: "Design",
        teamName: "Open Sesame",
        projectUrl: null,
        repositoryUrl: null,
      },
    ],
  },
  // Projects only: no description and no photos, so no cover image
  {
    id: "5b0f3c1e-2d4a-4f6b-9a8c-1e2f3a4b5c02",
    title: "Hardware Hackathon 2025",
    description: null,
    startTime: "2025-10-11T14:00:00Z",
    endTime: "2025-10-12T14:00:00Z",
    imageUrl: null,
    imageAlt: null,
    photos: [],
    projects: [
      {
        id: "c3d4e5f6-0718-4a29-b3c4-d5e6f7a8b906",
        projectName: "Smart Plant Monitor",
        competitionType: "Hardware",
        teamName: "Team Sprout",
        projectUrl: null,
        repositoryUrl: "https://github.com/example/smart-plant-monitor",
      },
      {
        id: "c3d4e5f6-0718-4a29-b3c4-d5e6f7a8b907",
        projectName: "CampusPath",
        competitionType: "Software",
        teamName: "Wayfinders",
        projectUrl: "https://example.com/campuspath",
        repositoryUrl: "https://github.com/example/campuspath",
      },
    ],
  },
  // Neither photos nor projects
  {
    id: "5b0f3c1e-2d4a-4f6b-9a8c-1e2f3a4b5c01",
    title: "Opening Ceremony",
    description: "Kickoff for Pulse 2025.",
    startTime: "2025-02-17T21:00:00Z",
    endTime: "2025-02-17T23:00:00Z",
    imageUrl: null,
    imageAlt: null,
    photos: [],
    projects: [],
  },
];
