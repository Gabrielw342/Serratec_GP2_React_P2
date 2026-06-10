import CardHorizontal from "../../components/Card/cardHorizontal";
import CardVertical from "../../components/Card/CardVertical";
import Carousel from "../../components/Carousel/Carousel";
import DivisaoTitulo from "../../components/DivisaoTitulo/DivisaoTitulo"
import styles from "./Home.module.css";
import BannerCategorias from "../../components/Banner/BannerCategoria"

function Home() {

  return (
    <>
      <Carousel />
      
      <DivisaoTitulo titulo="Receitas em Destaque"/>
      
      <div className={styles.cardContainer}>
        <CardHorizontal />
        <CardHorizontal />
        <CardHorizontal />
        <CardHorizontal />
        <CardHorizontal />
      </div>

      <DivisaoTitulo titulo="Categorias"/>
      <div className={styles.categoriasContainer}>

          <div className={styles.cardsContainer}>
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
          </div>
          <div className={styles.bannerContainer}>
            <BannerCategorias />
          </div>
      </div>

      <DivisaoTitulo titulo="Últimas Receitas"/>
      <div className={styles.UltimasConteiner}>
        <Carousel />

          <div className={styles.cardContainer1}>
            <CardHorizontal />
            <CardHorizontal />
            <CardHorizontal />
            <CardHorizontal />
            <CardHorizontal />
          </div>

          <div className={styles.cardContainer2}>
            <CardHorizontal />
            <CardHorizontal />
            <CardHorizontal />
            <CardHorizontal />
            <CardHorizontal />
          </div>
      </div>

      <DivisaoTitulo titulo="Seleção da equipe"/>
        <div className={styles.selecaoContainer}>
          <div className={styles.cardsContainer3}>
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical />
          </div>
        </div>
    </>
  );
}

export default Home;