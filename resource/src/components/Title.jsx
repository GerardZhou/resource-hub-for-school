import styles from "./title.module.css";
export default function Title() {
  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Resources for All AP Classes</div>
      </div>
      <div className={styles.container}>
        <button className={styles.missionStatement}>Mission Statement</button>
        <button className={styles.contact}>Contact</button>
      </div>
    </div>
  );
}
