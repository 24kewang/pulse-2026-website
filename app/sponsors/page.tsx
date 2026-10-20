import Link from 'next/link';
import styles from './page.module.css';

// Keep this page static until the sponsor API and current sponsors are confirmed.
// See lib/sponsorData.ts for the future fetch and rendering example.
export default function Sponsors() {
  return (
    <main className={styles.container}>
      <h1>Our Sponsors</h1>
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
    </main>
  );
}
