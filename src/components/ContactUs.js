import Footer from "./Footer";
import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { SiLinktree } from 'react-icons/si'
import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <div className={styles.container}>
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
          <a className={styles.iconBtn} href="https://www.linkedin.com/company/pulseuiuc/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a className={styles.iconBtn} href="https://linktr.ee/pulse_uiuc" target="_blank" rel="noreferrer">
            <SiLinktree />
          </a>
        </div>
      </div>
      <Footer className={styles.footer} />
    </div>
  )
}

export default ContactUs;