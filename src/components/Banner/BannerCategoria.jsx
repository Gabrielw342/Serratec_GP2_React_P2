import styles from "./BannerCategoria.module.css";
import bannerImg from "../../assets/banner-categorias.png";

function BannerCategorias() {
  return (
    <aside className={styles.banner}>
      <img src={bannerImg} alt="Explore categorias" className={styles.imagem2} />
        <div className={styles.overlay}>

          <button className={styles.botao}>
            Explore categorias
          </button>
        </div>
    </aside>
  );
}

export default BannerCategorias;
