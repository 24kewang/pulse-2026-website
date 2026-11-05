'use client'

import { useState } from "react";
import EventFilterChips from "@/components/EventFilterChips";
import ProjectCard from "@/components/ProjectCard";
import type { PastEvent } from "@/lib/pastEvents";
import styles from "./ProjectArchive.module.css";

interface ProjectArchiveProps {
  events: PastEvent[];
}

const ProjectArchive = ({ events }: ProjectArchiveProps) => {
  const [selectedId, setSelectedId] = useState("all");

  // Only events with projects get a chip, so a chip never leads to an empty grid
  const projectEvents = events.filter((e) => e.projects.length > 0);
  if (projectEvents.length === 0) return null;

  const projects = projectEvents
    .filter((event) => selectedId === "all" || event.id === selectedId)
    .flatMap((event) => event.projects.map((project) => ({ project, eventTitle: event.title })));

  return (
    <section className={styles.section}>
      <div className={styles.headingRow}>
        <h2 className={styles.heading}>Project Archive</h2>
        <span className={styles.count}>
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </span>
      </div>
      <EventFilterChips events={projectEvents} selectedId={selectedId} onSelect={setSelectedId} />

      <div className={styles.grid}>
        {projects.map(({ project, eventTitle }) => (
          <ProjectCard key={project.id} project={project} eventTitle={eventTitle} />
        ))}
      </div>
    </section>
  );
};

export default ProjectArchive;
