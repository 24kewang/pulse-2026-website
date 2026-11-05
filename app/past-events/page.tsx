import type { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";
import ProjectArchive from "@/components/ProjectArchive";
import { getPastEvents } from "@/lib/pastEvents";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Past Events | Pulse 2027",
};

export default async function PastEvents() {
  const events = await getPastEvents();
  // The API returns every completed event, and many may have no photos or projects
  const hasContent = events.some((e) => e.photos.length > 0 || e.projects.length > 0);

  return (
    <div className={styles.container}>
      <h1>Past Events</h1>
      <p className={styles.intro}>
        A look back at previous years of Pulse: photos from the week and the projects teams built in our competitions.
      </p>

      {!hasContent ? (
        <p className={styles.emptyMessage}>Past events are coming soon!</p>
      ) : (
        <>
          <PhotoGallery events={events} />
          <ProjectArchive events={events} />
        </>
      )}
    </div>
  );
}
