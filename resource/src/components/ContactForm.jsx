import React, { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const REACT_APP_EMAILJS_SERVICE_ID = import.meta.env
    .VITE_APP_EMAILJS_SERVICE_ID;

  const REACT_APP_EMAILJS_TEMPLATE_ID = import.meta.env
    .VITE_APP_EMAILJS_TEMPLATE_ID;

  const REACT_APP_EMAILJS_PUBLIC_KEY = import.meta.env
    .VITE_APP_EMAILJS_PUBLIC_KEY;

  console.log(REACT_APP_EMAILJS_SERVICE_ID);
  console.log(REACT_APP_EMAILJS_TEMPLATE_ID);
  console.log(REACT_APP_EMAILJS_PUBLIC_KEY);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSuccess(true);
          setMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsSuccess(false);
          setMessage("Failed to send message, please try again later.");
        }
      );
  };

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.heading}>Contact Us</h2>
      {message && (
        <p className={isSuccess ? styles.successMessage : styles.errorMessage}>
          {message}
        </p>
      )}
      <form className={styles.formContainer} ref={form} onSubmit={sendEmail}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name</label>
          <input
            required
            type="text"
            name="user_name"
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            required
            type="email"
            name="user_email"
            className={styles.input}
          />
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
