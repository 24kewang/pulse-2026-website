import GroupPics from "./GroupPics";
import styles from "./OurTeam.module.css";

const members =
{
  members: [
    {
      name: "Ben Blade",
      img: require("../assets/2025/team/ben.jpeg"),
      title: "Co-Director"
    },
    {
      name: "Akshat Singh",
      img: require("../assets/2025/team/akshat.jpeg"),
      title: "Co-Director",
    },
    {
      name: "Cameron Marchese",
      img: require("../assets/2025/team/cameron.jpeg"),
      title: "Treasurer"
    },
    {
      name: "Jack Gauer",
      img: require("../assets/2025/team/jack.jpeg"),
      title: "Logistics Director"
    },
    {
      name: "Justin Chen",
      img: require("../assets/2025/team/justin.jpeg"),
      title: "Logistics Director"
    },
    {
      name: "Avaneesh Kumar",
      img: require("../assets/2025/team/avaneesh.jpeg"),
      title: "Technical Director"
    },
    {
      name: "Aryan Gosaliya",
      img: require("../assets/2025/team/aryan.png"),
      title: "Technical Director"
    },
    {
      name: "Konark Dhingreja",
      img: require("../assets/2025/team/konark.png"),
      title: "Corporate Director"
    },
    {
      name: "Stephanie Eze",
      img: require("../assets/2025/team/stephanie.jpeg"),
      title: "Corporate Director"
    },
    {
      name: "Mithesh Ballae Ganesh",
      img: require("../assets/2025/team/mithesh.png"),
      title: "Competitions Director"
    },
    {
      name: "Ananya Krishnan",
      img: require("../assets/2025/team/ananya.jpeg"),
      title: "Competitions Director"
    },
    {
      name: "Riya Karkhanis",
      img: require("../assets/2025/team/riya.jpeg"),
      title: "Social Media and Marketing Director"
    },
  ]
}

function OurTeam() {
  return (
    <div className={styles.container}>
      <h1>Our Team</h1>
      <div className={styles.row}>
        <GroupPics data={members.members}/>
      </div>
      {/* <Footer className={styles.footer} /> */}
    </div>
  )
}

export default OurTeam