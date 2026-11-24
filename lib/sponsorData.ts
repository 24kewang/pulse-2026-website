import { getApiData } from "./api";

// Expected sponsor response: the backend must expose a sponsorship year.
// The current deployment has no /sponsors/ route, so the page stays Coming Soon.
export interface Sponsor {
  id: string;
  name: string;
  year: number | string;
  logoUrl: string | null;
  websiteUrl: string | null;
  description: string | null;
}

function isSponsor(value: unknown): value is Sponsor {
  if (!value || typeof value !== "object") return false;
  const sponsor = value as Record<string, unknown>;
  return typeof sponsor.id === "string" && typeof sponsor.name === "string"
    && (typeof sponsor.year === "number" || typeof sponsor.year === "string")
    && (sponsor.logoUrl == null || typeof sponsor.logoUrl === "string")
    && (sponsor.websiteUrl == null || typeof sponsor.websiteUrl === "string")
    && (sponsor.description == null || typeof sponsor.description === "string");
}

export async function getSponsors(): Promise<Sponsor[]> {
  try {
    const sponsors = await getApiData("sponsors/?year=2027");
    if (!sponsors.every(isSponsor)) throw new Error("Unexpected sponsors response");
    return sponsors.filter((sponsor) => Number(sponsor.year) === 2027);
  } catch (error) {
    console.warn("Unable to load sponsors:", error instanceof Error ? error.message : error);
    return [];
  }
}
