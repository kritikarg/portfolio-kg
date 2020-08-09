import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <span className={styles.link}>Work</span>
        <span>/</span>
        <span className={styles.link}>About</span>
        <span>/</span>
        <span className={styles.link}>Contact</span>
      </div>
    </nav>
  );
}
