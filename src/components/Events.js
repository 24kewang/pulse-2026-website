import { motion } from "framer-motion";
import { useState } from "react";
import EventCard from "./EventCard";
import styles from "./Events.module.css";

// Your event data
const data = [
  {
    "day": "Monday, February 16",
    "shortDay": "Mon",
    // "events": [
    //   {
    //     "title": "Opening Ceremony(Free T-shirts)",
    //     "start": "3:00pm",
    //     "end": "3:45pm",
    //     "description": "More details soon",
    //     "location": ""
    //   },
    //   {
    //     "title": "TI/AMD event",
    //     "start": "4:30pm",
    //     "end": "6:45pm",
    //     "description": "More details soon",
    //     "location": ""
    //   }
    // ]
    "events": [
      {
        "title": "Opening Ceremony(Free T-shirts)",
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
      // {
      //   "title": "Ti or amd event",
      //   "start": "4:15pm",
      //   "end": "7:00pm",
      //   "description": "More details soon",
      //   "location": ""
      // }
    ]
  },
  {
    "day": "Wednesday, February 18",
    "shortDay": "Wed",
    "events": [
      // {
      //   "title": "astera",
      //   "start": "7:30am",
      //   "end": "6:30pm",
      //   "description": "More details soon",
      //   "location": ""
      // }
    ]
  },
  {
    "day": "Thursday, February 19",
    "shortDay": "Thu",
    "events": [
      // {
      //   "title": "amd",
      //   "start": "2:00pm",
      //   "end": "4:30pm",
      //   "description": "More details soon",
      //   "location": ""
      // },
      // {
      //   "title": "astera",
      //   "start": "6:00pm",
      //   "end": "8:30pm",
      //   "description": "More details soon",
      //   "location": ""
      // }
    ]
  },
  {
    "day": "Friday, February 20",
    "shortDay": "Fri",
    "events": [
      {
        "title": "Software Competition - Algorithmic",
        "start": "3:00pm",
        "end": "6:00pm",
        "description": "More details soon",
        "location": "Tentatively ECEB 3002"
      },
      {
        "title": "Dinner Break",
        "start": "6:00pm",
        "end": "6:30pm",
        "description": "More details soon",
        "location": ""
      },
      {
        "title": "Design Competition",
        "start": "6:30pm",
        "end": "9:30pm",
        "description": "More details soon",
        "location": "Tentatively ECEB 3002"
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
        "location": "Tentatively ECEB 3002"
      }
    ]
  },
  {
    "day": "Sunday, February 22",
    "shortDay": "Sun",
    "events": [
      {
        "title": "Software Competition - Main",
        "start": "10:00am",
        "end": "8:00pm",
        "description": "More details soon",
        "location": "Tentatively ECEB 3002"
      }
    ]
  }
];

function Events() {
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

export default Events;
