'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import EventCard from "@/components/EventCard";
import styles from "./page.module.css";

// Your event data
const data = [
  {
    "day": "Monday, February 16",
    "shortDay": "Mon",
    "events": [
      {
        "title": "Opening Ceremony (Free T-shirts)",
        "start": "3:00pm",
        "end": "3:45pm",
        "description": "More details soon",
        "location": ""
      }
    ]
  },
  {
    "day": "Tuesday, February 17",
    "shortDay": "Tue",
    "events": [
      {
        "title": "AMD Industry Speaker Event",
        "start": "5:00pm",
        "end": "6:00pm",
        "description": "More details soon",
        "location": "ECEB 3002"
      },
      {
        "title": "AMD Networking Dinner + Student Q&A",
        "start": "6:00pm",
        "end": "7:00pm",
        "description": "More details soon",
        "location": "ECEB 3002"
      }
    ]
  },
  {
    "day": "Wednesday, February 18",
    "shortDay": "Wed",
    "events": [
      {
        "title": "Astera Labs Lightning Talk",
        "start": "10:00am",
        "end": "11:00am",
        "description": "More details soon",
        "location": "ECEB 3081"
      },
      {
        "title": "Astera Labs Workshop",
        "start": "12:00pm",
        "end": "2:00pm",
        "description": "More details soon",
        "location": "ECEB 3002"
      },
      {
        "title": "AMD Coffee Chats",
        "start": "3:00pm",
        "end": "5:00pm",
        "description": "More details soon",
        "location": "ECEB 2017"
      },
      {
        "title": "Astera Labs Networking Dinner",
        "start": "6:00pm",
        "end": "7:00pm",
        "description": "More details soon",
        "location": "ECEB 2015"
      }
    ]
  },
  {
    "day": "Thursday, February 19",
    "shortDay": "Thu",
    "events": [
      {
        "title": "Women in Tech Panel",
        "start": "10:00am",
        "end": "12:00pm",
        "description": "More details soon",
        "location": "ECEB 1013"
      },
      {
        "title": "TI Career Path Alum Talk",
        "start": "4:00pm",
        "end": "5:00pm",
        "description": "More details soon",
        "location": "ECEB 1015"
      },
      {
        "title": "Women in Tech–Themed Event (AMD)",
        "start": "7:00pm",
        "end": "8:00pm",
        "description": "More details soon",
        "location": "ECEB 2017"
      }
    ]
  },
  {
    "day": "Friday, February 20",
    "shortDay": "Fri",
    "events": [
      {
        "title": "Software Algorithmic Competition",
        "start": "3:30pm",
        "end": "5:30pm",
        "description": "More details soon",
        "location": "ECEB 3017"
      },
      {
        "title": "Design Competition",
        "start": "6:00pm",
        "end": "9:00pm",
        "description": "More details soon",
        "location": "ECEB 3017"
      }
    ]
  },
  {
    "day": "Saturday, February 21",
    "shortDay": "Sat",
    "events": [
      {
        "title": "Hardware Competition",
        "start": "10:00am",
        "end": "8:00pm",
        "description": "More details soon",
        "location": "ECEB 3017"
      }
    ]
  },
  {
    "day": "Sunday, February 22",
    "shortDay": "Sun",
    "events": [
      {
        "title": "Software Competition",
        "start": "10:00am",
        "end": "8:00pm",
        "description": "More details soon",
        "location": "ECEB 3017"
      }
    ]
  }
];

export default function Events() {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
