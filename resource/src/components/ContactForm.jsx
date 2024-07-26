import React, { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_zo7r2ed", "template_qas3hrj", form.current, {
        publicKey: "d65IGPqT7FmKrYgLT",
      })
      .then(
        () => {
          setMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setMessage("Failed to send message, please try again later.");
          console.log("FAILED...", error.text);
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
