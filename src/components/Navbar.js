import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi'
import styles from './Navbar.module.css';

const Navbar = () => {
  const loc = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
      <nav className={styles.container}>
        <Link to="/">
          <img className={styles.mainLogo} src={require("../assets/2026/Icon_transparent.png")} alt="Pulse 2025 Logo" />
        </Link>
        <div className={styles.linkContainer}>
          <h3><Link className={`${styles.link} ${loc === "/" ? styles.active : ''}`} to="/">HOME</Link></h3>
          <h3><Link className={`${styles.link} ${loc === "/events" ? styles.active : ''}`} to="/events">EVENTS</Link></h3>
          <h3><Link className={`${styles.link} ${loc === "/our-team" ? styles.active : ''}`} to="/our-team">OUR TEAM</Link></h3>
          <h3><Link className={`${styles.link} ${loc === "/sponsors" ? styles.active : ''}`} to="/sponsors">SPONSORS</Link></h3>
          <h3><Link className={`${styles.link} ${loc === "/about" ? styles.active : ''}`} to="/about">CORPORATE INFO</Link></h3>
          <h3><Link className={`${styles.link} ${loc === "/contact-us" ? styles.active : ''}`} to="/contact-us">CONTACT US</Link></h3>
        </div>

        {!isOpen && <FiMenu className={styles.menu} onClick={handleOpen} size={40} />}
        {isOpen &&
          <div className={`${styles.sidebar} ${isOpen ? styles.slideIn : ''}`}>
            <AiOutlineClose onClick={handleClose} size={30} className={styles.iconBtn} />
            <h3><Link onClick={handleClose} className={`${styles.link} ${loc === "/" ? styles.active : ''}`} to="/">HOME</Link></h3>
            <h3><Link onClick={handleClose} className={`${styles.link} ${loc === "/sponsors" ? styles.active : ''}`} to="/sponsors">SPONSORS</Link></h3>
            <h3><Link onClick={handleClose} className={`${styles.link} ${loc === "/events" ? styles.active : ''}`} to="/events">EVENTS</Link></h3>
            <h3><Link onClick={handleClose} className={`${styles.link} ${loc === "/our-team" ? styles.active : ''}`} to="/our-team">OUR TEAM</Link></h3>
            <h3><Link onClick={handleClose} className={`${styles.link} ${loc === "/about" ? styles.active : ''}`} to="/about">CORPORATE INFO</Link></h3>
            <h3><Link onClick={handleClose} className={`${styles.link} ${loc === "/contact-us" ? styles.active : ''}`} to="/contact-us">CONTACT US</Link></h3>
          </div>}

      </nav>
  )
}

export default Navbar