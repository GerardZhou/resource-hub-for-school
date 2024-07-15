import styles from "./title.module.css";
import MissionStatement from "./MissionStatement";
import ContactForm from "./ContactForm";

export default function Title() {
  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Resources for All AP Classes</div>
      </div>
      {/* <div className={styles.container}>
        <div className={styles.missionStatement}>
          <MissionStatement />
        </div>
        <div className={styles.contact}>
          {" "}
          <ContactForm />
        </div>
      </div> */}
    </div>
  );
}
