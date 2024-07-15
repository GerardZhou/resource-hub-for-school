import React from "react";
import styles from "./MissionStatement.module.css";

const MissionStatement = () => {
  return (
    <div className={styles.missionStatement}>
      <h2 className={styles.heading}>Mission Statement</h2>
      <p className={styles.paragraph}>
        The mission of this is to help students easily obtain access to
        resources for their AP classes. This is free to use. If you have any
        resources that you would like to share, please send us a contact message
        to potentially add it!
      </p>
    </div>
  );
};

export default MissionStatement;
