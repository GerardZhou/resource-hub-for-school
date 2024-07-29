import styles from "./title.module.css";
import MissionStatement from "./MissionStatement";
import ContactForm from "./ContactForm";

export default function Title() {
  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <img
          src="https://2.bp.blogspot.com/-ri3YS2flYYE/WU0s921eSoI/AAAAAAAAArs/Os8p6SJG0mA1eQZVH_kfBmMVFNG3REr4QCEwYBhgL/s1600/Edited%2BDU_ReviewsSchoolResources_2017.jpg"
          className={styles.icon}
        />
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
