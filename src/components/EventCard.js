import { motion } from "framer-motion";
import styles from "./EventCard.module.css";

const EventCard = ({ title, start, end, location, description }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className={styles.cardtime}>
        <p className={styles.time}>{start}</p>
        <p className={styles.end}>{end}</p>
      </div>
      <div className={styles.cardcontent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {location && (
          <div className={styles.cardlocation}>
            <img
              className={styles.logo}
              src={require("../assets/2026/location.png")}
              alt="Location Icon"
            />
            <p className={styles.location}>{location}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;