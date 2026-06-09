import CardHorizontal from "../../componets/Card/cardHorizontal";
import CardVertical from "../../componets/Card/CardVertical";
import Carousel from "../../componets/Carousel/Carousel";
import DivisaoTitulo from "../../componets/DivisaoTitulo/DivisaoTitulo"
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Carousel />
      
      <DivisaoTitulo titulo="Receitas em Destaque"/>
      
      <div className={styles.cardContainer}>
        <CardHorizontal></CardHorizontal>
        <CardHorizontal></CardHorizontal>
        <CardHorizontal></CardHorizontal>
        <CardHorizontal></CardHorizontal>
        <CardHorizontal></CardHorizontal>
      </div>
      
      <div className={styles.cardContainer}>
        <CardHorizontal></CardHorizontal>
        <CardHorizontal></CardHorizontal>
        <CardHorizontal></CardHorizontal>
        <CardHorizontal></CardHorizontal>
        <CardHorizontal></CardHorizontal>
      </div>

      <DivisaoTitulo titulo="Categorias"/>

      <div className={styles.cardContainer2}>

        <CardVertical></CardVertical>
        <CardVertical></CardVertical>
        <CardVertical></CardVertical>
        <CardVertical></CardVertical>
        <CardVertical></CardVertical>

      </div>


    </>
  );
}

export default Home;