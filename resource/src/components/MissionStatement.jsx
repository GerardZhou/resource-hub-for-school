import React from "react";
import styles from "./MissionStatement.module.css";

const MissionStatement = () => {
  return (
    <div className={styles.missionStatement}>
      <h2 className={styles.heading}>About Us</h2>
      <p className={styles.paragraph}>
        The purpose of this is to help students find resources for APs that are
        worked for other AP students. We provide accessible and free AP
        Resources for each AP course. If you have any resources that you would
        like to share, please send us a contact message!
      </p>
    </div>
  );
};

export default MissionStatement;
