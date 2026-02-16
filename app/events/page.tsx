'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import EventCard from "@/components/EventCard";
import styles from "./page.module.css";

// Your event data
const data = [
  {
    day: "Monday, February 16",
    shortDay: "Mon",
    events: [
      {
        title: "Opening Ceremony (Free T-shirts)",
        start: "3:00pm",
        end: "3:45pm",
        description: "Kick off the week with our Opening Ceremony! Learn what’s ahead, meet the team, and make sure to grab a free T-shirt!",
        location: "ECEB 2017"
      }
    ]
  },
  {
    day: "Tuesday, February 17",
    shortDay: "Tue",
    events: [
      {
        title: "AMD Industry Speaker Event",
        start: "5:00pm",
        end: "6:00pm",
        description: "Hear from an AMD engineer as they share their insights on technical challenges, industry trends, and career opportunities in tech. The presenter will be Dr. Franklin Bodine, who holds a Ph.D. in Electrical and Computer Engineering from UIUC. He’ll be speaking about his career journey and sharing insights on his path from UIUC to AMD.",
        location: "ECEB 3002"
      },
      {
        title: "AMD Networking Dinner + Student Q&A",
        start: "6:00pm",
        end: "7:00pm",
        description: "Grab dinner with AMD professionals while asking questions about careers, internships, and life in the tech industry",
        location: "ECEB 3002"
      }
    ]
  },
  {
    day: "Wednesday, February 18",
    shortDay: "Wed",
    events: [
      {
        title: "Astera Labs Lightning Talk",
        start: "10:00am",
        end: "11:00am",
        description: "Inside Astera Labs' Hardware Engineering and Board Development Lifecycle\nIn this session, Andrew Kuznetsov will introduce Astera Labs and highlight the critical role its data‑centric connectivity solutions play in enabling modern AI and cloud computing infrastructure. He will provide an inside look at the board development lifecycle within Astera Labs’ Hardware Engineering organization, detailing how cross‑functional teams bring complex hardware products from concept to production. Andrew will also explain how his work as a Platform Software and Diagnostics Engineer contributes to validating and enabling these next‑generation systems.\nAndrew Kuznetsov is a 2024 college grad from the University of California, Santa Cruz, currently working at Astera Labs as a Platform Software and Diagnostics Engineer.",
        location: "ECEB 3081"
      },
      {
        title: "Astera Labs Workshop",
        start: "12:00pm",
        end: "2:00pm",
        description: "Join Astera Labs for an immersive workshop experience, designed exclusively for students interested in cutting‑edge hardware, silicon, and connectivity technologies that power the world’s most advanced AI.\nThis 90‑minute session begins with a 30‑minute company overview, where our recruiting leader will introduce the company’s mission, products, and the real‑world challenges they solve across AI infrastructure, high‑speed connectivity, and next‑generation data center systems. Students will gain insight into Astera’s technology stack, team culture, and early‑career opportunities.\nFollowing the overview, students will participate in 20 minutes of rotating engineering roundtables. In this small-group format, attendees will move through three interactive AMA‑style “fireside chat” tables, each hosted by a different engineering discipline:\n - Hardware Engineering Table – PCB design, board bring‑up, system validation\n - ASIC Engineering Table – digital logic design, verification, chip architecture\n - Analog/Mixed‑Signal Engineering Table – signal integrity, SerDes, modeling, and high‑speed\nThis is a unique opportunity to speak directly with engineers who build the technologies behind modern AI clusters. Ask questions, get advice, and explore what a career in system, ASIC, or analog engineering looks like inside one of the fastest‑growing companies in the semiconductor industry. Open to students of all majors and experience levels - come curious!",
        location: "ECEB 3002"
      },
      {
        title: "AMD Roundtable Discussion",
        start: "3:00pm",
        end: "5:00pm",
        description: "Join us for an engaging evening designed to connect top engineering students with AMD technical professionals through a dynamic and interactive format.\n\nWhat to Expect:\nStudents will rotate through small-group technical roundtables, meeting with three AMD engineers. Each speed‑round conversation will last up to 10 minutes, giving students the chance to ask questions about engineering roles, technologies, career paths, and life at AMD.",
        location: "ECEB 2017"
      },
      {
        title: "Astera Labs Networking Dinner",
        start: "6:00pm",
        end: "7:00pm",
        description: "Private Event",
        location: "Invite-Only"
      }
    ]
  },
  {
    day: "Thursday, February 19",
    shortDay: "Thu",
    events: [
      {
        title: "Women in Tech Panel",
        start: "10:00am",
        end: "12:00pm",
        description: "Industry professionals from AMD, TI, and Astera Labs discuss their journeys, challenges, and advice for building a career in tech. Open to all!",
        location: "ECEB 1013"
      },
      {
        title: "TI Career Path Alum Talk",
        start: "4:00pm",
        end: "5:00pm",
        description: "Get to hear about a TI alum about their career journey and what to expect during the transition from school to industry.",
        location: "ECEB 1015"
      },
      {
        title: "Women in Tech–Themed Event (AMD)",
        start: "7:00pm",
        end: "8:00pm",
        description: "Join AMD and Women in Tech for an exciting discussion!",
        location: "ECEB 2017"
      }
    ]
  },
  {
    day: "Friday, February 20",
    shortDay: "Fri",
    events: [
      {
        title: "Software Algorithmic Competition",
        start: "3:30pm",
        end: "5:30pm",
        description: "Solve fast-paced coding problems that challenge your programming and software design skills. Over $200 in prizes!",
        location: "ECEB 3017"
      },
      {
        title: "Design Competition",
        start: "6:00pm",
        end: "9:00pm",
        description: "Tackle an open-ended engineering challenge that warrants creativity, innovation, and thoughtful design. Over $100 in prizes!",
        location: "ECEB 3017"
      }
    ]
  },
  {
    day: "Saturday, February 21",
    shortDay: "Sat",
    events: [
      {
        title: "Hardware Competition",
        start: "10:00am",
        end: "8:00pm",
        description: "Design and build a hardware solution in a fast-paced and hands-on team challenge! Over $700 in prizes!",
        location: "ECEB 3017"
      }
    ]
  },
  {
    day: "Sunday, February 22",
    shortDay: "Sun",
    events: [
      {
        title: "Software Competition",
        start: "10:00am",
        end: "8:00pm",
        description: "Put your coding skills to the test in a software hackathon to close out the week. Over $700 in prizes!",
        location: "ECEB 3017"
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
