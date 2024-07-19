"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import styles from '../../styles/Header.module.css';
import useTheme from '@/hooks/useTheme';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, toggleTheme] = useTheme(); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            MySite
          </Link>
        </div>
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <button onClick={toggleTheme} className={styles.themeButton}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </nav>
        <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
