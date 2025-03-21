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
            Contact
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
