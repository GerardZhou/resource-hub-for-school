import React, { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setMessage("Failed to send message, please try again later.");
        }
      );
  };

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.heading}>Contact Us</h2>
      {message && <p className={styles.successMessage}>{message}</p>}
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name</label>
          <input type="text" name="user_name" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input type="email" name="user_email" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Message</label>
          <textarea name="message" className={styles.textarea}></textarea>
        </div>
        <input type="submit" value="Send" className={styles.button} />
      </form>
    </div>
  );
}
