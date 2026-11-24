import type { EventInfo } from "./eventData";
import { getApiData } from "./api";

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

export async function getEventSchedule(): Promise<ScheduleDay[]> {
  try {
    const events = await getApiData("events/");
    if (!events.every(isApiEvent)) {
      throw new Error("Unexpected events response");
    }
    const days = toEventSchedule(events);
    const year = days.map((day) => day.date.slice(0, 4)).sort().at(-1);
    return days.filter((day) => day.date.slice(0, 4) === year);
  } catch (error) {
    console.warn("Unable to load events:", error instanceof Error ? error.message : error);
    return [];
  }
}
