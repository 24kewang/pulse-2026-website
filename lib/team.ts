export interface TeamMember {
  id: string;
  name: string;
  position: string;
  committee: string;
  year: string;
  imageUrl: string | null;
  linkedinUrl: string | null;
  email: string | null;
  displayOrder: number;
}

// Existing roster in the API response shape; placeholder photos use local assets.
const placeholderMembers: TeamMember[] = [
  {
    id: "00000000-0000-4000-8000-000000000001",
    name: "Prahit Yaugand",
    position: "Co-Director",
    committee: "Directors",
    imageUrl: "/assets/2026/team/prahit.jpeg",
  },
  {
    id: "00000000-0000-4000-8000-000000000002",
    name: "Angela Qian",
    position: "Co-Director",
    committee: "Directors",
    imageUrl: "/assets/2026/team/angela.jpeg",
  },
  {
    id: "00000000-0000-4000-8000-000000000003",
    name: "Paige Nothelfer",
    position: "Treasurer",
    committee: "Treasurer",
    imageUrl: "/assets/2026/team/paige.jpeg",
  },
  {
    id: "00000000-0000-4000-8000-000000000004",
    name: "Alexander Lau",
    position: "Logistics",
    committee: "Logistics",
    imageUrl: "/assets/2026/team/alexander.jpeg",
  },
  {
    id: "00000000-0000-4000-8000-000000000005",
    name: "Ryan Varghese",
    position: "Logistics",
    committee: "Logistics",
    imageUrl: "/assets/2026/team/ryan.jpeg",
  },
  {
    id: "00000000-0000-4000-8000-000000000006",
    name: "Adrian Lee",
    position: "Social Media",
    committee: "Social Media",
    imageUrl: "/assets/2026/team/adrian.jpeg",
  },
  {
    id: "00000000-0000-4000-8000-000000000007",
    name: "Racheal Liu",
    position: "Social Media",
    committee: "Social Media",
    imageUrl: "/assets/2026/team/racheal.jpeg",
  },
  {
    id: "00000000-0000-4000-8000-000000000008",
    name: "Upasana Halder",
    position: "Marketing",
    committee: "Marketing",
    imageUrl: "/assets/2026/team/upasana.jpeg",
  },
  {
    id: "00000000-0000-4000-8000-000000000009",
    name: "Sumayyah Ismail",
    position: "Corporate",
    committee: "Corporate",
    imageUrl: "/assets/2026/team/sumayyah.jpeg",
  },
  {
    id: "00000000-0000-4000-8000-000000000010",
    name: "Giovanni Ortega",
    position: "Corporate",
    committee: "Corporate",
    imageUrl: "/assets/2026/team/gio.png",
  },
  {
    id: "00000000-0000-4000-8000-000000000011",
    name: "Dhruv Vohra",
    position: "Competitions",
    committee: "Competitions",
    imageUrl: "/assets/2026/team/dhruv.jpeg",
  },
  {
    id: "00000000-0000-4000-8000-000000000012",
    name: "Kevin Wang",
    position: "Technical",
    committee: "Technical",
    imageUrl: "/assets/2026/team/kevin.jpeg",
  },
].map((member, index) => ({
  ...member,
  year: "2025-26",
  linkedinUrl: null,
  email: null,
  displayOrder: index + 1,
}));

export async function getTeamMembers(year: string): Promise<TeamMember[]> {
  // Replace this placeholder source with GET /team/?year=... when the API is ready.
  return placeholderMembers.filter((member) => member.year === year);
}
