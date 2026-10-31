import Image from "next/image";
import type { TeamMember } from "@/lib/team";
import styles from "./GroupPics.module.css"

interface GroupPicsProps {
  data: TeamMember[];
}

function GroupPics({ data }: GroupPicsProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {data.map(({ id, name, imageUrl, position }) => (
          <div key={id} className={styles.picContainer}>
            <div className={styles.frame}>
              <Image src={imageUrl || "/assets/team-placeholder.svg"} alt={name} width={220} height={220} />
            </div>
            <div className={styles.caption}>
              <span className={styles.name}>{name}</span>
              <span className={styles.title}>{position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupPics
