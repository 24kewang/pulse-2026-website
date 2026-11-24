import { getApiData } from "./api";

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

function isTeamMember(value: unknown): value is TeamMember {
  if (!value || typeof value !== "object") return false;
  const member = value as Record<string, unknown>;
  return typeof member.id === "string" && typeof member.name === "string"
    && typeof member.position === "string" && typeof member.committee === "string"
    && typeof member.year === "string" && /^\d{4}(?:-\d{2,4})?$/.test(member.year)
    && typeof member.displayOrder === "number" && Number.isFinite(member.displayOrder)
    && (member.imageUrl == null || typeof member.imageUrl === "string");
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const members = await getApiData("team/");
    if (!members.every(isTeamMember)) throw new Error("Unexpected team response");
    const year = members.map((member) => member.year)
      .sort((a, b) => Number.parseInt(a, 10) - Number.parseInt(b, 10)).at(-1);
    return members.filter((member) => member.year === year)
      .map((member) => ({ ...member, imageUrl: member.imageUrl ?? null }));
  } catch (error) {
    console.warn("Unable to load team:", error instanceof Error ? error.message : error);
    return [];
  }
}
