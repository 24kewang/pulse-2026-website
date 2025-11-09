import styles from "./GroupPics.module.css"

function GroupPics({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {data.map(({ name, img, title }) => (
          <div key={name} className={styles.picContainer}>
            <div className={styles.frame}>
              <img src={img} alt={name} loading="lazy" />
            </div>
            <div className={styles.caption}>
              <span className={styles.name}>{name}</span>
              <span className={styles.title}>{title}</span>  
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupPics