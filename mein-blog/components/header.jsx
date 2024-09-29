import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headline}>Mein Blog</h1>
      <nav>
        <ul className={styles.nav}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">Über mich</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
