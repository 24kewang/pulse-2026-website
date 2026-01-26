import Image from "next/image";
import styles from "./GroupPics.module.css"

interface TeamMember {
  name: string;
  img: string;
  title: string;
}

interface GroupPicsProps {
  data: TeamMember[];
}

function GroupPics({ data }: GroupPicsProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {data.map(({ name, img, title }) => (
          <div key={name} className={styles.picContainer}>
            <div className={styles.frame}>
              <Image src={img} alt={name} width={220} height={220} />
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
