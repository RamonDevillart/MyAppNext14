import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
        </div>
        <div className={styles.right}>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
