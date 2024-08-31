import styles from "./resourcecard.module.css";
import Button from "./Button";

export default function ResourceCard({ name, Image, link }) {
  return (
    <a href={link} className={styles.container}>
      <img className={styles.image} src={Image} alt={name} />
      <div>
        <Button name={name} />
      </div>
    </a>
  );
}
