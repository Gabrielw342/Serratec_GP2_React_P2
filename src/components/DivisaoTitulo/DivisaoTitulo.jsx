import styles from "./DivisaoTitulo.module.css";

function DivisaoTitulo({ titulo }) {
  
  
    return (
    <div className={styles.container}>
      <div className={styles.linha}></div>

      <h2 className={styles.h2}>{titulo}</h2>

      <div className={styles.linha}></div>
    </div>
  );
}

export default DivisaoTitulo;