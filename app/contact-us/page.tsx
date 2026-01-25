import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { SiLinktree } from 'react-icons/si'
import styles from "./page.module.css";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          Feel free to contact us with any questions about the conference or sponsorship!
        </div>
        <div className={styles.icons}>
          <a className={styles.iconBtn} href="mailto:pulse.illinois@gmail.com">
            <MdEmail />
          </a>
          <a className={styles.iconBtn} href="https://www.facebook.com/ECEPulse" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a className={styles.iconBtn} href="https://www.instagram.com/pulse.illinois/" target="_blank" rel="noreferrer">
            <GrInstagram />
          </a>
          <a className={styles.iconBtn} href="https://www.linkedin.com/company/pulse-uiuc/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a className={styles.iconBtn} href="https://linktr.ee/pulse2025" target="_blank" rel="noreferrer">
            <SiLinktree />
          </a>
        </div>
      </div>
    </div>
  )
}
