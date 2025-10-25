import { motion } from "framer-motion";
import EventCard from "./EventCard";
import styles from "./Events.module.css";

// Your event data
const data = [
  {
    day: "Monday, February 10",
    events: [
      {
        title: "Opening Ceremony + Swag Pickup",
        start: "05:00 PM",
        end: "05:30 PM",
        description: "Join us for the opening ceremony and pick up your swag bag!",
        location: "ECEB 3002"
      },
      {
        title: "Lightning Talk",
        start: "05:30 PM",
        end: "06:00 PM",
        description: "Enjoy some lightning talks from our sponsors! A great way to learn about the companies that make this event possible.",
        location: "ECEB 3002"
      },
      {
        title: "Lightning Talks",
        start: "06:00 PM",
        end: "07:00 PM",
        description: "Enjoy some lightning talks from our sponsors! A great way to learn about the companies that make this event possible.",
        location: "ECEB 3002"
      },
      {
        title: "Dinner",
        start: "07:00 PM",
        end: "08:00 PM",
        location: "ECEB 3002",
        description: "Subway sandwiches will be provided for dinner. Enjoy some delicious food and network with other participants!"
      },
    ]
  },
  {
    day: "Tuesday, February 11",
    events: [
      {
        title: "Coffee Chat",
        start: "10:00 AM",
        end: "11:00 AM",
        description: "Join us for a coffee chat with our sponsors! A great way to network and learn about the companies that make this event possible.",
        location: "ECEB 1000/Atrium"
      },
      {
        title: "Snack",
        start: "05:30 PM",
        end: "06:00 PM",
        description: "Grab a snack to recharge! A great way to network and learn about the companies that make this event possible.",
        location: "ECEB 1013"
      },
      {
        title: "Tech Talk",
        start: "06:00 PM",
        end: "07:00 PM",
        description: "Join us for a tech talk from one of our sponsors! A great way to learn about the companies that make this event possible.",
        location: "ECEB 1013"
      },
      {
        title: "Dinner - Jimmy Johns",
        start: "07:00 PM",
        end: "08:00 PM",
        description: "Enjoy some delicious food from Jimmy Johns! Wind down and relax with some great food.",
        location: "ECEB 1013"
      }
    ]
  },
  {
    day: "Wednesday, February 12",
    events: [
      {
        title: "Keynote",
        start: "05:00 PM",
        end: "06:00 PM",
        description: "Join us for a keynote speaker! Gain some insight from a professional in the tech industry.",
        location: "Grainger Auditorium"
      },
      {
        title: "Dinner - Signature Grill",
        start: "06:00 PM",
        end: "06:45 PM",
        description: "Enjoy some delicious food from Signature Grill! Wind down and relax with some great food.",
        location: "ECEB 3002"
      },
      {
        title: "Design Competition with Late Night Snack",
        start: "07:00 PM",
        end: "09:00 PM",
        description: "Work with your team to design a project and present it to the judges! Winners will receive a prize.",
        location: "ECEB 3002"
      },
      {
        title: "Late Night Snack (for participants)",
        start: "08:30 PM",
        end: "09:00 PM",
        description: "Tired from the design competition? Grab a snack to recharge!",
        location: "ECEB 3002"
      },
    ]
  },
  {
    day: "Thursday, February 13",
    events: [
      {
        title: "Lunch & Lightning Talks - Panera",
        start: "12:00 PM",
        end: "01:30 PM",
        description: "Grab some lunch and enjoy some lightning talks from our sponsors! A great way to learn about the companies that make this event possible.",
        location: "ECEB 3002"
      },
      {
        title: "Women in Academia Panel",
        start: "01:30 PM",
        end: "02:30 PM",
        description: "Women in academia will share their experiences and advice for students interested in pursuing a career in academia.",
        location: "ECEB 3002"
      },
      {
        title: "Keynote with Dinner",
        start: "05:00 PM",
        end: "07:00 PM",
        description: "Join us for a keynote speaker! Gain some insight from a professional in the tech industry.",
        location: "ECEB 3002"
      }
    ]
  },
  {
    day: "Friday, February 14",
    events: [
      {
        title: "Opportunities Fair",
        start: "01:00 PM",
        end: "03:00 PM",
        description: "Meet with RSOs, companies, and other organizations to learn about opportunities available to you!",
        location: "ECEB 1000/Atrium"
      },
      {
        title: "Software Competition with Dinner",
        start: "04:00 PM",
        end: "06:00 PM",
        description: "Put your coding skills to the test in our software competition! Winners will receive a prize.",
        location: "Grainger Auditorium"
      },
      {
        title: "Soldering Workshop - HKN",
        start: "07:00 PM",
        end: "09:00 PM",
        description: "Learn how to solder with HKN! A great skill to have for any engineer.",
        location: "ECEB 1001"
      },
    ]
  },

  {
    day: "Saturday, February 15",
    events: [
      {
        title: "Hardware Competition",
        start: "10:00 AM",
        end: "07:00 PM",
        description: "Want to build something cool? Join our hardware competition! Winners will receive a prize.",
        location: "ECEB 3002"
      },
      {
        title: "Breakfast (for participants)",
        start: "10:00 AM",
        end: "1:00 AM",
        description: "Start strong with some breakfast to fuel your day!",
        location: "ECEB 3002"
      },
      {
        title: "Dinner - Dominoes (for participants)",
        start: "05:00 PM",
        end: "06:00 PM",
        description: "Finish strong with some dinner to recharge! Winners of the hardware competition will be announced.",
        location: "ECEB 3002"
      },
    ]
  },
  {
    day: "Sunday, February 16",
    events: [
      {
        title: "High School Day",
        start: "09:00 AM",
        end: "02:00 PM",
        description: "High school students are invited to join us for a day of tech talks, workshops, and more!",
        location: "ECEB"
      },
      {
        title: "Meet and Greet (Snacks Provided)",
        start: "09:00 AM",
        end: "09:30 AM",
        description: "Meet other high school students and get ready for a day of fun!",
        location: "ECEB 3002"
      },
      {
        title: "ECEB Tour",
        start: "09:30 AM",
        end: "10:00 PM",
        description: "Tour the ECE building and learn about the different labs and resources available to students.",
        location: "ECEB 3002"
      },
      {
        title: "Coding Workshop 1",
        start: "10:00 AM",
        end: "11:00 AM",
        description: "Learn the basics of coding with our coding workshop! No experience necessary.",
        location: "ECEB 3022"
      },
      {
        title: "Coding Workshop 2",
        start: "11:00 AM",
        end: "12:00 PM",
        description: "Continue learning coding with our coding workshop! No experience necessary.",
        location: "ECEB 3022"
      },
      {
        title: "Speaker Panel",
        start: "12:00 PM",
        end: "01:00 PM",
        description: "Join us for a panel of speakers who will share their experiences and advice for high school students interested in pursuing a career in tech.",
        location: "ECEB 3002"
      },
      {
        title: "Competitions and Prizes",
        start: "01:00 PM",
        end: "02:00 PM",
        description: "Participate in coding and hardware competitions and win some cool prizes!",
        location: "ECEB 3002"
      }
    ]
  }
];

function Events() {
  return (
    <div className={styles.container}>
      <h1>Event Schedule</h1>
      <div className={styles.row}>
        {data.map((event, index) => (
          <div key={index} className={styles.datebox}>
            <motion.h2
              className={styles.day}
              style={{ position: "sticky", top: 80, zIndex: 1, paddingTop: 10, paddingBottom: 10 }}
              initial={{ opacity: 0, x:-50 }}
              whileInView={{ opacity: 1, x:0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {event.day}
            </motion.h2>
            <div className={styles.cardbox}>
              {event.events.map((item, idx) => (
                <EventCard
                  key={`${item.title}-${idx}`}
                  title={item.title}
                  start={item.start}
                  end={item.end}
                  location={item.location}
                  description = {item.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
