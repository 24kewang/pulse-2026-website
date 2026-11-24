import Image from "next/image";
import Link from "next/link";
import { getSponsors } from "@/lib/sponsorData";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

export default async function Sponsors() {
  const sponsors = await getSponsors();

  return (
    <main className={styles.container}>
      <h1>Our Sponsors</h1>
      {sponsors.length > 0 ? (
        <div className={styles.sponsorGrid}>
          {sponsors.map((sponsor) => (
            <article key={sponsor.id} className={styles.placeholder}>
              {sponsor.logoUrl && (
                <Image src={sponsor.logoUrl} alt={sponsor.name} width={200} height={200}
                  className={styles.sponsorLogo} unoptimized />
              )}
              <h2>{sponsor.name}</h2>
              {sponsor.description && <p className={styles.description}>{sponsor.description}</p>}
              {sponsor.websiteUrl && /^https?:\/\//i.test(sponsor.websiteUrl) && (
                <a href={sponsor.websiteUrl} className={styles.contactLink}
                  target="_blank" rel="noopener noreferrer">
                  Visit {sponsor.name}
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <section className={styles.placeholder} aria-labelledby="coming-soon">
          <p className={styles.eyebrow}>Supporting the next wave of innovation</p>
          <h2 id="coming-soon">Coming Soon</h2>
          <p className={styles.description}>
            Meet the partners helping bring Pulse to life. Check back for our
            sponsor announcements!
          </p>
          <Link href="/contact-us" className={styles.contactLink}>
            Interested in sponsoring Pulse? Contact us
          </Link>
        </section>
      )}
    </main>
  );
}
