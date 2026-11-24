import EventSchedule from "@/components/EventSchedule";
import { getEventSchedule } from "@/lib/events";

export const dynamic = "force-dynamic";

export default async function Events() {
  const days = await getEventSchedule();
  return <EventSchedule data={days} />;
}
