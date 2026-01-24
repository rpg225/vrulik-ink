'use client';

import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar(): JSX.Element {
  return (
    <header className={styles.nav}>
      {/* Navigation row */}
        <nav className={styles.navRow}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#booking">Booking</a>
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
