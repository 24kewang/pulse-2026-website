import GroupPics from "@/components/GroupPics";
import { getTeamMembers } from "@/lib/team";
import styles from "./page.module.css";

const committees = [
  "Directors", "Treasurer", "Logistics", "Social Media",
  "Marketing", "Corporate", "Competitions", "Technical",
];

export default async function OurTeam() {
  const year = "2025-26";
  const members = await getTeamMembers(year);
  const sections = [...new Set([...committees, ...members.map((member) => member.committee)])];

  return (
    <div className={styles.container}>
      <h1>{year} Team</h1>
      {members.length === 0 && <p>Team information coming soon.</p>}
      {sections.map((committee) => {
        const team = members
          .filter((member) => member.committee === committee)
          .sort((a, b) => a.displayOrder - b.displayOrder);
        if (team.length === 0) return null;

        return (
          <section key={committee} className={styles.teamSection}>
            <h2>{committee}</h2>
            <GroupPics data={team} />
          </section>
        );
      })}
    </div>
  )
}
