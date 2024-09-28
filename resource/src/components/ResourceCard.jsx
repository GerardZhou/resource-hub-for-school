import styles from "./resourcecard.module.css";
import Button from "./Button";

export default function ResourceCard({ name, Image, link }) {
  return (
    <a
      href={link}
      className={styles.container}
      style={{ backgroundImage: `url(${Image})` }} // Set the background image dynamically
    >
      <Button name={name} />
    </a>
  );
}
