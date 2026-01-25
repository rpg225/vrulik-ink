'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
  return () => {
    document.body.style.overflow = '';
  };
}, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.nav}>
      {/* Hamburger button - only visible on mobile */}
      <button 
        className={styles.hamburger} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
        <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
        <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
      </button>

      {/* Navigation row */}
      <nav className={`${styles.navRow} ${isOpen ? styles.mobileOpen : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#booking" onClick={closeMenu}>Booking</a>
      </nav>

      {/* Floating centered logo */}
      <div className={styles.logo}>
        <Image
          src="/vrulik-logo-white.svg"
          alt="Vrulik Ink Tattoo Studio"
          fill
          priority
          sizes="200px"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </header>
  );
}