export async function getApiData(path: string): Promise<unknown[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) throw new Error("NEXT_PUBLIC_API_URL is not configured");

  const response = await fetch(`${baseUrl.replace(/\/+$/, "")}/${path}`, {
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) throw new Error(`${path} returned ${response.status}`);

  const data: unknown = await response.json();
  if (!Array.isArray(data)) throw new Error(`Unexpected ${path} response`);
  return data;
}
