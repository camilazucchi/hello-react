import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <header>
      <nav className={styles.navigation}>
        <a className={styles.link} href="/">Index</a>
        <a className={styles.link} href="/about">About Me</a>
      </nav>
    </header>
  );
}