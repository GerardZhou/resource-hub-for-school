// src/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/contact" className={styles.link}>
            Contact/Feedback
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/mission-statement" className={styles.link}>
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
