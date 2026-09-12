import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>AP Resource Hub</span>
        <nav aria-label="Footer navigation" className={styles.links}>
          <Link to="/about">About</Link>
          <Link to="/contact">Share a resource</Link>
        </nav>
      </div>
    </footer>
  );
}
