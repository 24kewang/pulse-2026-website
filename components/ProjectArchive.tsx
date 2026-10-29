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

  if (!events.some((e) => e.projects.length > 0)) return null;

  const projects = events
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
      <EventFilterChips events={events} selectedId={selectedId} onSelect={setSelectedId} />

      {projects.length === 0 ? (
        <p className={styles.empty}>No projects for this event yet.</p>
      ) : (
        <div className={styles.grid}>
          {projects.map(({ project, eventTitle }) => (
            <ProjectCard key={project.id} project={project} eventTitle={eventTitle} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectArchive;
