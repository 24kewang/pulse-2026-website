// Proposed UI fields only; confirm the API contract before integration.
export interface Sponsor {
  id: string;
  name: string;
}

/*
Future server-side API template (intentionally inactive).
No endpoint is known yet. Do not enable this until the team confirms the URL,
response shape, authentication, and caching requirements. This example assumes
a JSON array of sponsors with string IDs and names; adapt it to the real API.

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
      typeof sponsor.id === 'string' &&
      sponsor.id.trim().length > 0 &&
      typeof sponsor.name === 'string' &&
      sponsor.name.trim().length > 0
  )) {
    throw new Error('Unexpected sponsor response');
  }
  return data;
}

Once integration is ready, export getSponsors, make the Sponsors server component
async, and import getSponsors and the Sponsor type. Pass the confirmed endpoint.
Retain the current placeholder when the response is empty or unavailable:

let sponsors: Sponsor[] = [];
try {
  sponsors = await getSponsors(confirmedEndpoint);
} catch {
  // Keep the placeholder visible if the request or validation fails.
}

// Render this only when sponsors.length > 0; otherwise render the placeholder.
<ul aria-label="Our sponsors">
  {sponsors.map((sponsor) => (
    <li key={sponsor.id}>{sponsor.name}</li>
  ))}
</ul>

Add logos, descriptions, or links only when their API fields are confirmed.
*/
