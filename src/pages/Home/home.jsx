import CardHorizontal from "../../components/Card/cardHorizontal";
import CardVertical from "../../components/Card/CardVertical";
import Carousel from "../../components/Carousel/Carousel";
import DivisaoTitulo from "../../components/DivisaoTitulo/DivisaoTitulo"
import styles from "./Home.module.css";
import BannerCategorias from "../../components/Banner/BannerCategoria"

import { useEffect, useState } from "react";
import api from "../../services/api";

function Home() {

  const [receitas, setReceitas] = useState([]);

  useEffect(() => {

  api.get("/receitas/todas?page=1&limit=93")
    .then((response) => {

      console.log(response.data);

      setReceitas(response.data.items);

    })
    .catch((erro) => {
      console.log(erro);
    });

}, []);

  return (
    <>
      <Carousel />
      
      <DivisaoTitulo titulo="Receitas em Destaque"/>
      
      <div className={styles.cardContainer}>
        {receitas.slice(0, 5).map((receita) => (
        <CardHorizontal  
          key={receita.id}
          imagem={receita.link_imagem}
          titulo={receita.receita}
          descricao={receita.ingredientes} />
        ))}
      
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
            {receitas.slice(85, 93).map((receita) => (
        <CardHorizontal  
          key={receita.id}
          imagem={receita.link_imagem}
          titulo={receita.receita}
          descricao={receita.ingredientes} />
        ))}
            
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