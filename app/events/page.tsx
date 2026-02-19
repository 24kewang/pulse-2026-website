'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import { eventData as data } from "@/lib/eventData";
import EventCard from "@/components/EventCard";
import styles from "./page.module.css";


export default function Events() {
  const [selectedIndex, setSelectedIndex] = useState(() => {
    try {
      const today = new Date();
      const formattedDate = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
      const idx = data.findIndex((d) => d.day && d.day.includes(formattedDate));
      console.error(formattedDate);
      return idx !== -1 ? idx : 0;
    } catch (e) {
      return 0;
    }
  });

  const selectedEvent = data[selectedIndex];

  return (
    <div className={styles.container}>
      <h1>Event Schedule</h1>
      
      {/* Date Navigation Tabs - Desktop */}
      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          {data.map((event, index) => (
            <motion.button
              key={index}
              className={`${styles.navTab} ${selectedIndex === index ? styles.active : ""}`}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.navTabText}>{event.shortDay}</span>
              <span className={styles.navTabDate}>{event.day.split(", ")[1]}</span>
              
              {/* Animated Underline */}
              {selectedIndex === index && (
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
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(parseInt(e.target.value))}
        >
          {data.map((event, index) => (
            <option key={index} value={index}>
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
            selectedEvent.events.map((item, idx) => (
              <EventCard
                key={`${item.title}-${idx}`}
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
