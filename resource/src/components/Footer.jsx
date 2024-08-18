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
          href="https://www.youtube.com/channel/UCuYyTP-qHLiiK-TpcyVqAIA?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiMtJG_PC4lsb3-GZAiTZkUXAm3VlkJC1Ag&s"
            alt="Youtube"
            className={styles.icon}
          />
        </a>
        <a
          href="https://www.tiktok.com/@ap_resources_hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjc4jXJr2nFvOI6Om1YPhEEDnH13pbk_Yug&s"
            alt="TikTok"
            className={styles.icon}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/resource-hub-for-school-b89255321/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
            alt="Linkedin"
            className={styles.icon}
          />
        </a>
      </div>
    </div>
  );
}
