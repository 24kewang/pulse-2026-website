import Image from 'next/image';
import EventMarquee from '@/components/EventMarquee';
import EventPreview from '@/components/EventPreview';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.colContainer}>
      <div className={styles.marqueeWrapper}>
        <EventMarquee />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.mainContent}>
        <Image 
          className={styles.logo}
          src="/assets/2026/full_logo_26.png" 
          alt="Pulse 2026 Logo Full"
          width={800}
          height={400}
          priority
        />
        <div className={styles.welcomeText}>
          Welcome to the fifteenth annual technology conference to celebrate the latest developments in the ECE and CS departments at the University of Illinois Urbana-Champaign!
        </div>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSexR_Z2q5Rq63uXmDL_Os3jSIR1C9Gwl810iVjCG_uiZFmunw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.registerLink}
        >
          <button className={styles.btn}>
            Join our team!
          </button>
        </a>
        <EventPreview />
      </div>
    </div>
  )
}
