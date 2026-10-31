'use client'

import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import type { PastEventProject } from "@/lib/pastEvents";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: PastEventProject;
  eventTitle: string;
}

const ProjectCard = ({ project, eventTitle }: ProjectCardProps) => {
  const { projectName, competitionType, teamName, projectUrl, repositoryUrl } = project;

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className={styles.tag}>
        {competitionType} <span aria-hidden="true">·</span> {eventTitle}
      </p>

      <h3 className={styles.title}>
        {projectUrl ? (
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={styles.titleLink}>
            {projectName}
            <FiArrowUpRight className={styles.titleArrow} aria-hidden="true" />
          </a>
        ) : (
          projectName
        )}
      </h3>

      {teamName && <p className={styles.team}>by {teamName}</p>}

      {(repositoryUrl || projectUrl) && (
        <div className={styles.links}>
          {repositoryUrl && (
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FiGithub aria-hidden="true" /> Code
            </a>
          )}
          {projectUrl && (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FiExternalLink aria-hidden="true" /> Live
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
};

export default ProjectCard;
