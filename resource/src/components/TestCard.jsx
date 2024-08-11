import styles from "./testcard.module.css";
import Button from "./Button";
export default function TestCard() {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={
          "https://psmag.com/.image/t_share/MTI3NTgyMzg5ODA2Mzc3NjAz/school-testing.jpg"
        }
      />
      <div>
        <Button name={"AP Practice Tests"} />
      </div>
    </div>
  );
}
