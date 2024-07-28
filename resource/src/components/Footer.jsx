import styles from "./footer.module.css";
import { useState } from "react";

export default function Footer() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Resource Hub For School</div>
      <div className={styles.social}>
        <a
          href="https://www.instagram.com/resourcehubforschool/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png?20200512141346"
            alt="Instagram"
            className={styles.icon}
          />
        </a>
        <a
          href="https://www.tiktok.com/@resourcehubforschool"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://static-00.iconduck.com/assets.00/tik-tok-icon-2048x2048-mmnsrcbe.png"
            alt="TikTok"
            className={styles.icon}
          />
        </a>
        <a
          href="https://x.com/AP_Resource_Hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/X_icon_2.svg"
            alt="X (Twitter)"
            className={styles.icon}
          />
        </a>
      </div>
    </div>
  );
}
