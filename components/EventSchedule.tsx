'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import type { ScheduleDay } from "@/lib/events";
import EventCard from "@/components/EventCard";
import styles from "@/app/events/page.module.css";


export default function EventSchedule({ data, isPlaceholder }: {
  data: ScheduleDay[];
  isPlaceholder: boolean;
}) {
  const [selectedDate, setSelectedDate] = useState(() =>
    new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago" }).format(new Date())
  );
  const selectedEvent = data.find((day) => day.date === selectedDate) ?? data[0];
  const years = [...new Set(data.map((day) => day.date.slice(0, 4)))];
  const heading = `${years.length === 1 ? years[0] + " " : ""}Event Schedule`;

  if (!selectedEvent) {
    return (
      <div className={styles.container}>
        <h1>{heading}</h1>
        <p className={styles.emptyMessage}>More events coming soon!</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>{heading}</h1>
      {isPlaceholder && (
        <p className={styles.scheduleNotice}>
          Showing the 2026 schedule as a preview. Updated events are coming soon.
        </p>
      )}
      
      {/* Date Navigation Tabs - Desktop */}
      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          {data.map((event) => (
            <motion.button
              key={event.date}
              className={`${styles.navTab} ${selectedEvent.date === event.date ? styles.active : ""}`}
              onClick={() => setSelectedDate(event.date)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.navTabText}>{event.shortDay}</span>
              <span className={styles.navTabDate}>{event.day.split(", ")[1]}</span>
              
              {/* Animated Underline */}
              {selectedEvent.date === event.date && (
                <motion.div
                  className={styles.underline}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Date Navigation Dropdown - Mobile */}
      <div className={styles.dropdownContainer}>
        <select
          className={styles.dateDropdown}
          aria-label="Select event date"
          value={selectedEvent.date}
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          {data.map((event) => (
            <option key={event.date} value={event.date}>
              {event.day}
            </option>
          ))}
        </select>
      </div>

      {/* Events for Selected Day */}
      <div className={styles.contentWrapper}>
        <motion.h2
          className={styles.selectedDay}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {selectedEvent.day}
        </motion.h2>
        
        <motion.div
          className={styles.cardbox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {selectedEvent.events && selectedEvent.events.length > 0 ? (
            selectedEvent.events.map((item) => (
              <EventCard
                key={item.id}
                title={item.title}
                start={item.start}
                end={item.end}
                location={item.location}
                description={item.description}
              />
            ))
          ) : (
            <motion.p
              className={styles.emptyMessage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              More events coming soon!
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
