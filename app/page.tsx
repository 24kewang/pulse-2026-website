import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.colContainer}>
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
          href="https://docs.google.com/forms/d/e/1FAIpQLSfIoXwBuUUWegPMS4CGAqj2qh5_p-D1U8FhLlwMYkFD4kCV0Q/viewform?usp=sharing&ouid=109431193062771291886"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.registerLink}
        >
          <button className={styles.btn}>
            Register
          </button>
        </a>
      </div>
    </div>
  )
}
