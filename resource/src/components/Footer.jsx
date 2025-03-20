import styles from "./footer.module.css";
import { useState } from "react";

export default function Footer() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Resource Hub For School</div>
      <div className={styles.links}>
        <a href="/about" className={styles.link}>
          About
        </a>
        <a href="/contact" className={styles.link}>
          Contact
        </a>
      </div>
    </div>
  );
}
