import styles from "./button.module.css";
import { useNavigate } from "react-router-dom";

export default function Button({ name }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/resources?resourceId=" + name);
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.button}>
        {name}
      </button>
    </div>
  );
}
