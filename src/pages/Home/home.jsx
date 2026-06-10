import CardHorizontal from "../../components/Card/cardHorizontal";
import CardVertical from "../../components/Card/CardVertical";
import Carousel from "../../components/Carousel/Carousel";
import DivisaoTitulo from "../../components/DivisaoTitulo/DivisaoTitulo"
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