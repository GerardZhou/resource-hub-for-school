import styles from "./button.module.css";
import { useNavigate } from "react-router-dom";

export default function Button({ name }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/another-page?resourceId=" + name);
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.button}>
        {name}
      </button>
    </div>
  );
}
