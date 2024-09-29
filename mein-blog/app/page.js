import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header /> {/* Header hier rendern */}
      <main className={styles.main}>
        <h1>Willkommen zu meinem Blog!</h1>
        {/* <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        <p>Dies ist die Startseite deines Blogs. Viel Spaß beim Erstellen!</p>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Patrick Zablocki. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

