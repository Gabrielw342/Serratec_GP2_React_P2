import { useEffect, useState } from "react";
import styles from './ReceitaEspecifica.module.css';
import { ListaIngredientes } from "../../components/ListaIngredientes";
import { ReceitaInfo } from "../../components/ReceitaInfo";
import { ModoPreparo } from "../../components/ModoPreparo";
import { useFavContext } from "../../context/FavContext/useFavContext";
import LoginModal from "../../components/Modal/loginmodal";
import { estaLogado } from "../../services/auth";


import { useParams } from "react-router-dom";
import api from "../../services/api";
import ErrorCard from "../../components/ErrorCard";

function ReceitaDetails() {

  const { ehFavorito, adicionarFavorito, removerFavorito } = useFavContext();

  const { id } = useParams();

  const [receita, setReceita] = useState(null);
  const [modalLoginAberto, setModalLoginAberto] = useState(false);

  useEffect(() => {
    api.get(`/receitas/${id}`)
      .then((response) => {
        setReceita(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, [id]);

  //erro caso id da receita n exista
  if (!receita) {
    return <ErrorCard/>;
  }

  const clicarFavorito = () => {
    if (ehFavorito(receita)) {
      removerFavorito(receita);
      return;
    }

    if (!estaLogado()) {
      setModalLoginAberto(true);
      return;
    }

    adicionarFavorito({
      id: receita.id,
      title: receita.receita,
      image: receita.link_imagem,
    });
  };

  return (
  <div className={styles.receita}>
  <div className={styles.container}>

    <img
      src={receita.link_imagem}
      alt={receita.receita}
      className={styles.imagem}
    />

    <div className={styles.info}>
      <button
            className={styles.favorito}
            onClick={clicarFavorito}
        >
            {ehFavorito(receita) ? "⭐" : "☆"}
        </button>
      <h1 className={styles.titulo}>
        {receita.receita}
        
      </h1>
    
     


      <h2 className={styles.subtitulo}>
        Ingredientes
      </h2>

      <p className={styles.ingredientes}>
        {receita.ingredientes}
      </p>

      <h2 className={styles.subtitulo}>
        Modo de Preparo
      </h2>

      <p className={styles.preparo}>
        {receita.modo_preparo}
      </p>
    </div>

  </div>

  <LoginModal
    aberto={modalLoginAberto}
    onCancelar={() => setModalLoginAberto(false)}
  />
</div>
);
}
export default ReceitaDetails;