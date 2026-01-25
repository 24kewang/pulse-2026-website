'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <nav className={styles.container}>
  <Link href="/">
        <Image 
          className={styles.mainLogo} 
          src="/assets/2026/Icon_transparent.png" 
          alt="Pulse 2026 Logo"
          width={80}
          height={80}
        />
      </Link>
      <div className={styles.linkContainer}>
        <h3><Link className={`${styles.link} ${pathname === "/" ? styles.active : ''}`} href="/">HOME</Link></h3>
        <h3><Link className={`${styles.link} ${pathname === "/events" ? styles.active : ''}`} href="/events">EVENTS</Link></h3>
        <h3><Link className={`${styles.link} ${pathname === "/our-team" ? styles.active : ''}`} href="/our-team">OUR TEAM</Link></h3>
        <h3><Link className={`${styles.link} ${pathname === "/sponsors" ? styles.active : ''}`} href="/sponsors">SPONSORS</Link></h3>
        <h3><Link className={`${styles.link} ${pathname === "/about" ? styles.active : ''}`} href="/about">CORPORATE INFO</Link></h3>
        <h3><Link className={`${styles.link} ${pathname === "/contact-us" ? styles.active : ''}`} href="/contact-us">CONTACT US</Link></h3>
      </div>

      {!isOpen && <FiMenu className={styles.menu} onClick={handleOpen} size={40} />}
      {isOpen &&
        <div className={`${styles.sidebar} ${isOpen ? styles.slideIn : ''}`}>
          <AiOutlineClose onClick={handleClose} size={30} className={styles.iconBtn} />
          <h3><Link onClick={handleClose} className={`${styles.link} ${pathname === "/" ? styles.active : ''}`} href="/">HOME</Link></h3>
          <h3><Link onClick={handleClose} className={`${styles.link} ${pathname === "/sponsors" ? styles.active : ''}`} href="/sponsors">SPONSORS</Link></h3>
          <h3><Link onClick={handleClose} className={`${styles.link} ${pathname === "/events" ? styles.active : ''}`} href="/events">EVENTS</Link></h3>
          <h3><Link onClick={handleClose} className={`${styles.link} ${pathname === "/our-team" ? styles.active : ''}`} href="/our-team">OUR TEAM</Link></h3>
          <h3><Link onClick={handleClose} className={`${styles.link} ${pathname === "/about" ? styles.active : ''}`} href="/about">CORPORATE INFO</Link></h3>
          <h3><Link onClick={handleClose} className={`${styles.link} ${pathname === "/contact-us" ? styles.active : ''}`} href="/contact-us">CONTACT US</Link></h3>
        </div>}

    </nav>
  )
}

export default Navbar;
