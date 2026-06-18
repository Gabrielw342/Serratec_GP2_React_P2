import styles from "./Logo.module.css";

function Logo({
  src,
  alt = "Logo",
  texto,
  tamanho = "95px",
}) {
  return (
    <div className={styles.container}>
      <img
        src={src}
        alt={alt}
        className={styles.logo}
        style={{ height: tamanho }}
      />

      {texto && <p>{texto}</p>}
    </div>
  );
}

export default Logo;