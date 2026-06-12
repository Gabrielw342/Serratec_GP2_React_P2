import styles from "./BarraDeBusca.module.css";
import { FaSearch } from "react-icons/fa";

function BarraDeBusca() {
  return (
    <div className={styles.searchWrapper}>
      <button className={styles.searchButton}>
        <FaSearch />
      </button>

      <input
        type="text"
        className={styles.search}
      />
    </div>
  );
}

export default BarraDeBusca;