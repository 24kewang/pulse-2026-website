'use client'

import { motion } from "framer-motion";
import type { PastEvent } from "@/lib/pastEvents";
import styles from "./EventFilterChips.module.css";

interface EventFilterChipsProps {
  events: Pick<PastEvent, "id" | "title" | "startTime">[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const chipLabel = ({ title, startTime }: Pick<PastEvent, "title" | "startTime">) => {
  const year = new Date(startTime).getFullYear();
  return Number.isNaN(year) || title.includes(String(year)) ? title : `${title} ${year}`;
};

const EventFilterChips = ({ events, selectedId, onSelect }: EventFilterChipsProps) => {
  const chips = [{ id: "all", label: "All" }, ...events.map((e) => ({ id: e.id, label: chipLabel(e) }))];

  return (
    <div className={styles.chipRow} role="group" aria-label="Filter by event">
      {chips.map(({ id, label }) => (
        <motion.button
          key={id}
          type="button"
          className={`${styles.chip} ${selectedId === id ? styles.active : ""}`}
          aria-pressed={selectedId === id}
          onClick={() => onSelect(id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {label}
        </motion.button>
      ))}
    </div>
  );
};

export default EventFilterChips;
