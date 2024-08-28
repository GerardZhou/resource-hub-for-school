import styles from "./button.module.css";
import { useNavigate } from "react-router-dom";

export default function Button({ name }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/resources?resourceId=" + name);
  }

  return (
    // <div>
    //   <button onClick={handleClick} className={styles.newButton}>
    //     <span>{name}</span>
    //   </button>
    // </div>
    <div>
      <button onClick={handleClick} className={styles.button}>
        <span>{name}</span>
      </button>
    </div>
  );
}
