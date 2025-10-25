import styles from "./GroupPics.module.css"

function GroupPics({ data }) {
  const members = data;

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {members.map(({ name, img, title }) => (
          <div key={name} className={styles.picContainer}>
            <div className={styles.frame}>
              <img src={img} alt={name} />
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