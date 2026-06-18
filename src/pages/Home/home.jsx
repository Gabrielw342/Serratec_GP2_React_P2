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

// Imagens das categorias
import arrozFeijao from "../../assets/arrozFeijão.png";
import boloImg from "../../assets/bolo.png";
import coxaFrango from "../../assets/coxadefrango.png";
import sushiImg from "../../assets/sushi.png";
import diversosImg from "../../assets/diversos.png";
import risottoImg from "../../assets/risotto.png";
import picanteImg from "../../assets/picante.png";
import veganaImg from "../../assets/vegana.png";

// Categorias da Home
const categoriasHome = [
  { titulo: "Salgado", imagem: arrozFeijao, tipoCategoria: "salgado" },
  { titulo: "Doce", imagem: boloImg, tipoCategoria: "doce" },
  { titulo: "Agridoce", imagem: veganaImg, tipoCategoria: "agridoce" },
  {
    titulo: "Carne de Frango",
    imagem: coxaFrango,
    tipoCategoria: "/receitas/descricao?descricao=frango&page=1&limit=999",
    nomeExibicao: "Carne de Frango",
  },
  {
    titulo: "Sushi",
    imagem: sushiImg,
    tipoCategoria: "/receitas/descricao?descricao=sushi&page=1&limit=999",
    nomeExibicao: "Sushi",
  },
  {
    titulo: "Feijoadas",
    imagem: diversosImg,
    tipoCategoria: "/receitas/descricao?descricao=feijoada&page=1&limit=999",
    nomeExibicao: "Feijoadas",
  },
  {
    titulo: "Risotos",
    imagem: risottoImg,
    tipoCategoria: "/receitas/descricao?descricao=risotto&page=1&limit=999",
    nomeExibicao: "Risotos",
  },
  {
    titulo: "Picantes",
    imagem: picanteImg,
    tipoCategoria: "/receitas/descricao?descricao=pimenta&page=1&limit=999",
    nomeExibicao: "Picantes",
  },
];

// receita da equipe, passando o id da receita
const selecaoEquipe = [
  { receitaId: 7 }, 
  { receitaId: 93 }, 
  { receitaId: 92 },
  { receitaId: 9 },
  { receitaId: 5 },
  { receitaId: 6 },
  { receitaId: 43 },
];

function Home() {
  const [receitas, setReceitas] = useState([]);
  const [busca, setBusca] = useState("");

  const bannersHome = [cozinhar, descubra, inspire];
  const bannersUltimasReceitas = [lasanha, frango, bolo_de_chocolate];
  
  useEffect(() => {
    api
      .get("/receitas/todas?page=1&limit=93")
      .then((response) => {
        setReceitas(response.data.items);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

    const receitasFiltradas = receitas.filter((receita) =>
    receita.receita?.toLowerCase().includes(busca.toLowerCase())
);

  return (
    <>

      {/* primeiro carousel */}
      <Carousel imagens={bannersHome} />

      <DivisaoTitulo titulo="Receitas em Destaque" />

      <div className={styles.cardContainer}>
        {receitasFiltradas.slice(0, 5).map((receita) => (
          <CardHorizontal
            key={receita.id}
            id={receita.id}
            imagem={receita.link_imagem}
            titulo={receita.receita}
            descricao={receita.ingredientes}
          />
        ))}
      </div>

      <DivisaoTitulo titulo="Categorias" />

      <div className={styles.categoriasContainer}>
        <div className={styles.cardsContainer}>
          {categoriasHome.map((cat, i) => (
            <CardVertical
              key={i}
              imagem={cat.imagem}
              titulo={cat.titulo}
              tipoCategoria={cat.tipoCategoria}
              nomeExibicao={cat.nomeExibicao || cat.titulo}
            />
          ))}
        </div>

        <div className={styles.bannerContainer}>
          <BannerCategorias />
        </div>
      </div>

      <DivisaoTitulo titulo="Últimas Receitas" />

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

      <DivisaoTitulo titulo="Seleção da equipe" />

      <div className={styles.selecaoContainer}>
        <div className={styles.cardsContainer3}>
          {selecaoEquipe.map((item, i) => (
            <CardVertical key={i} receitaId={item.receitaId} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
