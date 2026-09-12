import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";

export default function CourseCard({ course }) {
  const search = new URLSearchParams({ resourceId: course.name });

  return (
    <li>
      <Link to={`/resources?${search}`} className={styles.card}>
        <span className={styles.subject}>{course.subject}</span>
        <h2 className={styles.name}>{course.name}</h2>
      </Link>
    </li>
  );
}
