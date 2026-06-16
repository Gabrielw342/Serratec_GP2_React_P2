import { useEffect, useState } from "react";
import styles from './ReceitaEspecifica.module.css';
import { ListaIngredientes } from "../../components/ListaIngredientes";
import { ReceitaInfo } from "../../components/ReceitaInfo";
import { ModoPreparo } from "../../components/ModoPreparo";
import { useFavContext } from "../../context/FavContext/useFavContext";


import { useParams } from "react-router-dom";
import api from "../../services/api";

function ReceitaDetails() {

  const { ehFavorito, adicionarFavorito, removerFavorito } = useFavContext();

  const { id } = useParams();

  const [receita, setReceita] = useState(null);

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
    return <h1>Carregando...</h1>;
  }

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
            onClick={() =>
              ehFavorito(receita)
                ? removerFavorito(receita)
                : adicionarFavorito({
                    id: receita.id,
                    title: receita.receita,
                    image: receita.link_imagem,
                  })
            }
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
</div>
);
}
export default ReceitaDetails;