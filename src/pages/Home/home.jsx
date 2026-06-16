import { useEffect, useState } from "react";

import CardHorizontal from "../../components/Card/cardHorizontal";
import CardVertical from "../../components/Card/CardVertical";
import Carousel from "../../components/Carousel/Carousel";
import DivisaoTitulo from "../../components/DivisaoTitulo/DivisaoTitulo";
import BannerCategorias from "../../components/Banner/BannerCategoria";

import styles from "./Home.module.css";
import api from "../../services/api";

// primeiro carousel
import cozinhar from "../../assets/cozinhar.png";
import descubra from "../../assets/descubra.png";
import inspire from "../../assets/inspire.png";

// Carousel Últimas Receitas
import lasanha from "../../assets/lasanha.png";
import frango from "../../assets/frango.png";
import bolo_de_chocolate from "../../assets/bolo_de_chocolate.png";

function Home() {

  const [receitas, setReceitas] = useState([]);

  const bannersHome = [
    cozinhar,
    descubra,
    inspire
  ];

  const bannersUltimasReceitas = [
    lasanha,
    frango,
    bolo_de_chocolate
  ];

  useEffect(() => {

    api.get("/receitas/todas?page=1&limit=93")
      .then((response) => {
        setReceitas(response.data.items);
      })
      .catch((erro) => {
        console.log(erro);
      });

  }, []);

  return (
    <>

      {/* primeiro carousel */}
      <Carousel imagens={bannersHome} />

      <DivisaoTitulo titulo="Receitas em Destaque"/>

      <div className={styles.cardContainer}>
        {receitas.slice(0, 5).map((receita) => (
          <CardHorizontal
            key={receita.id}
            id={receita.id}
            imagem={receita.link_imagem}
            titulo={receita.receita}
            descricao={receita.ingredientes}
          />
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

      {/* carousel do ultimas receitas */}
      <Carousel imagens={bannersUltimasReceitas} />

      <div className={styles.cardContainer1}>
        {receitas.slice(85, 93).map((receita) => (
          <CardHorizontal
            key={receita.id}
            id={receita.id}
            imagem={receita.link_imagem}
            titulo={receita.receita}
            descricao={receita.ingredientes}
          />
        ))}
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