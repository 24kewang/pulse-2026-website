import type { PastEvent } from "@/lib/pastEvents";

// Placeholder data used until NEXT_PUBLIC_API_URL points at the backend.
// Includes null fields on purpose so the page's fallbacks get exercised.
export const mockPastEvents: PastEvent[] = [
  {
    id: "5b0f3c1e-2d4a-4f6b-9a8c-1e2f3a4b5c01",
    title: "Pulse 2025",
    description: null,
    startTime: "2025-02-17T15:00:00-06:00",
    endTime: "2025-02-23T20:00:00-06:00",
    imageUrl: null,
    imageAlt: null,
    photos: [
      {
        id: "8a1d2e3f-4b5c-4d6e-8f70-1a2b3c4d5e01",
        url: "/assets/2026/team/DSCF2791.jpeg",
        altText: "Pulse 2025 staff posing together",
        caption: "The 2025 staff after closing ceremony",
      },
      {
        id: "8a1d2e3f-4b5c-4d6e-8f70-1a2b3c4d5e02",
        url: "/assets/2026/banner.png",
        altText: null,
        caption: null,
      },
    ],
    projects: [
      {
        id: "c3d4e5f6-0718-4a29-b3c4-d5e6f7a8b901",
        projectName: "Smart Plant Monitor",
        competitionType: "Hardware",
        teamName: "Team Sprout",
        projectUrl: null,
        repositoryUrl: "https://github.com/example/smart-plant-monitor",
      },
      {
        id: "c3d4e5f6-0718-4a29-b3c4-d5e6f7a8b902",
        projectName: "CampusPath",
        competitionType: "Software",
        teamName: null,
        projectUrl: "https://example.com/campuspath",
        repositoryUrl: "https://github.com/example/campuspath",
      },
    ],
  },
  {
    id: "5b0f3c1e-2d4a-4f6b-9a8c-1e2f3a4b5c02",
    title: "Pulse 2026",
    description: "Our fourteenth year: AMD, Astera Labs, and TI joined us for talks, roundtables, and four competitions.",
    startTime: "2026-02-16T15:00:00-06:00",
    endTime: "2026-02-22T20:00:00-06:00",
    imageUrl: "/assets/2026/banner.png",
    imageAlt: "Pulse 2026 banner",
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
      {
        id: "8a1d2e3f-4b5c-4d6e-8f70-1a2b3c4d5e06",
        url: "/assets/2026/full_logo_26.png",
        altText: "Pulse 2026 logo",
        caption: null,
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
        repositoryUrl: "https://github.com/example/studybuddy",
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
];
