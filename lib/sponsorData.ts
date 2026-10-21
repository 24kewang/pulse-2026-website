// Matches the previous sponsor cards; confirm the API contract before integration.
export interface Sponsor {
  id: number;
  title: string;
  description: string;
}

/*
Future server-side API template (intentionally inactive).
No endpoint is known yet. Do not enable this until the team confirms the URL,
response shape, authentication, and caching requirements. This example assumes
a JSON array matching last year's numeric IDs, titles, and descriptions; adapt
it to the real API. Historical data and the reusable card JSX are commented in
app/sponsors/page.tsx, with their original styles in page.module.css.

async function getSponsors(endpoint: string): Promise<Sponsor[]> {
  const response = await fetch(endpoint, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Unable to retrieve sponsors');
  }

  const data: unknown = await response.json();
  if (!Array.isArray(data) || !data.every(
    (sponsor): sponsor is Sponsor =>
      sponsor !== null &&
      typeof sponsor === 'object' &&
      typeof sponsor.id === 'number' &&
      Number.isFinite(sponsor.id) &&
      typeof sponsor.title === 'string' &&
      sponsor.title.trim().length > 0 &&
      typeof sponsor.description === 'string'
  )) {
    throw new Error('Unexpected sponsor response');
  }
  return data;
}

Once integration is ready, export getSponsors, make the Sponsors server component
async, and import getSponsors and the Sponsor type. Extract the preserved
SponsorCards into a client component and enable its commented card CSS.
Pass the confirmed endpoint. Retain the current placeholder when the response
is empty or unavailable; do not fall back to last year's example data:

let sponsors: Sponsor[] = [];
try {
  sponsors = await getSponsors(confirmedEndpoint);
} catch {
  // Keep the placeholder visible if the request or validation fails.
}

// Render this only when sponsors.length > 0; otherwise render the placeholder.
<SponsorCards sponsors={sponsors} />

Replace the historical positional logo paths with confirmed current logo
sources before enabling cards. Add links only when their fields are confirmed.
*/
