import GroupPics from "@/components/GroupPics";
import styles from "./page.module.css";

const teamMembers = {
  directors: [
    {
      name: "Prahit Yaugand",
      img: "/assets/2026/team/prahit.jpeg",
      title: "Co-Director"
    },
    {
      name: "Angela Qian",
      img: "/assets/2026/team/angela.jpeg",
      title: "Co-Director"
    }
  ],
  treasurer: [
    {
      name: "Paige Nothelfer",
      img: "/assets/2026/team/paige.jpeg",
      title: "Treasurer"
    }
  ],
  logistics: [
    {
      name: "Alexander Lau",
      img: "/assets/2026/team/alexander.jpeg",
      title: "Logistics"
    },
    {
      name: "Ryan Varghese",
      img: "/assets/2026/team/ryan.jpeg",
      title: "Logistics"
    }
  ],
  socialMedia: [
    {
      name: "Adrian Lee",
      img: "/assets/2026/team/adrian.jpeg",
      title: "Social Media"
    },
    {
      name: "Racheal Liu",
      img: "/assets/2026/team/racheal.jpeg",
      title: "Social Media"
    }
  ],
  marketing: [
    {
      name: "Upasana Halder",
      img: "/assets/2026/team/upasana.jpeg",
      title: "Marketing"
    }
  ],
  corporate: [
    {
      name: "Sumayyah Ismail",
      img: "/assets/2026/team/sumayyah.jpeg",
      title: "Corporate"
    }
  ],
  competitions: [
    {
      name: "Dhruv Vohra",
      img: "/assets/2026/team/dhruv.jpeg",
      title: "Competitions"
    }
  ],
  technical: [
    {
      name: "Kevin Wang",
      img: "/assets/2026/team/kevin.jpeg",
      title: "Technical"
    }
  ]
}

export default function OurTeam() {
  return (
    <div className={styles.container}>
      <h1>Our Team</h1>
      
      <section className={styles.teamSection}>
        <h2>Directors</h2>
        <GroupPics data={teamMembers.directors} />
      </section>

      <section className={styles.teamSection}>
        <h2>Treasurer</h2>
        <GroupPics data={teamMembers.treasurer} />
      </section>

      <section className={styles.teamSection}>
        <h2>Logistics</h2>
        <GroupPics data={teamMembers.logistics} />
      </section>

      <section className={styles.teamSection}>
        <h2>Social Media</h2>
        <GroupPics data={teamMembers.socialMedia} />
      </section>

      <section className={styles.teamSection}>
        <h2>Marketing</h2>
        <GroupPics data={teamMembers.marketing} />
      </section>

      <section className={styles.teamSection}>
        <h2>Corporate</h2>
        <GroupPics data={teamMembers.corporate} />
      </section>

      <section className={styles.teamSection}>
        <h2>Competitions</h2>
        <GroupPics data={teamMembers.competitions} />
      </section>

      <section className={styles.teamSection}>
        <h2>Technical</h2>
        <GroupPics data={teamMembers.technical} />
      </section>
    </div>
  )
}
