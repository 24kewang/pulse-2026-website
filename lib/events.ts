import { eventData, type EventInfo } from "./eventData";

export interface ApiEvent {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  startTime: string;
  endTime: string | null;
}

export interface ScheduleDay {
  date: string;
  day: string;
  shortDay: string;
  events: (Omit<EventInfo, "food"> & { id: string })[];
}

const timeZone = "America/Chicago";
const dateFormat = new Intl.DateTimeFormat("en-CA", { timeZone });
const dayFormat = new Intl.DateTimeFormat("en-US", {
  timeZone, weekday: "long", month: "long", day: "numeric",
});
const shortDayFormat = new Intl.DateTimeFormat("en-US", { timeZone, weekday: "short" });
const timeFormat = new Intl.DateTimeFormat("en-US", {
  timeZone, hour: "numeric", minute: "2-digit", hour12: true,
});

function formatTime(value: string): string {
  return timeFormat.format(new Date(value)).replace(/\s/g, "").toLowerCase();
}

export function toEventSchedule(events: ApiEvent[]): ScheduleDay[] {
  const days = new Map<string, ScheduleDay>();
  const sorted = [...events].sort((a, b) => Date.parse(a.startTime) - Date.parse(b.startTime));

  for (const event of sorted) {
    const start = new Date(event.startTime);
    const date = dateFormat.format(start);
    if (!days.has(date)) {
      days.set(date, {
        date, day: dayFormat.format(start), shortDay: shortDayFormat.format(start), events: [],
      });
    }
    days.get(date)!.events.push({
      id: event.id,
      title: event.title,
      start: formatTime(event.startTime),
      end: event.endTime ? formatTime(event.endTime) : "",
      description: event.description ?? "",
      location: event.location ?? "",
    });
  }

  return [...days.values()];
}

function isApiEvent(value: unknown): value is ApiEvent {
  if (!value || typeof value !== "object") return false;
  const event = value as Record<string, unknown>;
  return typeof event.id === "string" && typeof event.title === "string"
    && (event.description === null || typeof event.description === "string")
    && (event.location === null || typeof event.location === "string")
    && typeof event.startTime === "string" && Number.isFinite(Date.parse(event.startTime))
    && (event.endTime === null || (typeof event.endTime === "string" && Number.isFinite(Date.parse(event.endTime))));
}

export async function getEventSchedule(): Promise<{ days: ScheduleDay[]; isPlaceholder: boolean }> {
  const baseUrl = process.env.API_BASE_URL || "https://pulse-api-liart.vercel.app";
  try {
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/events/`, {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) throw new Error(`Events request returned ${response.status}`);

    const events: unknown = await response.json();
    if (!Array.isArray(events) || !events.every(isApiEvent)) {
      throw new Error("Unexpected events response");
    }
    return { days: toEventSchedule(events), isPlaceholder: false };
  } catch (error) {
    console.warn("Using the placeholder event schedule:", error instanceof Error ? error.message : error);
    return {
      isPlaceholder: true,
      // Existing February 16–22, 2026 schedule, retained only as a preview.
      days: eventData.map((day, dayIndex) => ({
        ...day,
        date: `2026-02-${16 + dayIndex}`,
        events: day.events.map((event, index) => ({
          ...event, id: `placeholder-${dayIndex}-${index}`,
        })),
      })),
    };
  }
}
