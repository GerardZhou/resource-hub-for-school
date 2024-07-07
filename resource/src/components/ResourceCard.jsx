import styles from "./resourcecard.module.css";
export default function ResourceCard({ name, Image }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={Image} />
      <div>
        <button className={styles.button}>{name}</button>
      </div>
    </div>
  );
}
