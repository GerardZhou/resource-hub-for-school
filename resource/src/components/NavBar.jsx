import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const { pathname } = useLocation();
  const browsingCourses = pathname === "/" || pathname === "/resources";

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">AP</span>
          <span>AP Resource Hub</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className={styles.links}>
            <li>
              <Link
                to="/"
                className={styles.link}
                data-active={browsingCourses || undefined}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Courses
              </Link>
            </li>
            <li><NavLink to="/about" className={styles.link}>About</NavLink></li>
            <li><NavLink to="/contact" className={styles.link}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
