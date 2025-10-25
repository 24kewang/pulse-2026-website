import styles from "./EventCard.module.css";

const EventCard = ({ title, start, end, location, description }) => {
    return (
      <div className={styles.card}>
        <div className={styles.cardtime}>
          <p className={styles.time}>{start}</p>
          <p className={styles.end}>{end}</p>
        </div>
        <div className={styles.cardcontent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.cardlocation}>   
            <img className={styles.logo}  src={require("../assets/2025/location.png")} alt="Pulse 2024 Logo Full" />
            <p className={styles.location}>{location}</p>
            </div>
        </div>
      </div>
    )
  }

export default EventCard