import styles from "./resourcecard.module.css";
import Button from "./Button";
export default function ResourceCard({ name, Image }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={Image} />
      <div>
        <Button name={name} />
      </div>
    </div>
  );
}
