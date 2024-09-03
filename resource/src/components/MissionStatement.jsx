import React from "react";
import styles from "./MissionStatement.module.css";

const MissionStatement = () => {
  return (
    <div className={styles.missionStatement}>
      <h2 className={styles.heading}>About Us</h2>
      <p className={styles.paragraph}>
        The purpose of this is to help students find resources for APs that are
        effective for other AP students. This website has a list of easily
        accessible and free AP Resources for each AP course. If you have any
        resources that you would like to share, please send us a contact
        message!
      </p>
    </div>
  );
};

export default MissionStatement;
