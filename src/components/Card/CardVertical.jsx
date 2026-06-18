import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./CardVertical.module.css";
import api from "../../services/api";
import descubra from "../../assets/descubra.png";

function CardVertical({ tipoCategoria, nomeExibicao, imagem, receitaId }) {

  const [dadosReceita, setDadosReceita] = useState(null);

  useEffect(() => {
    if (receitaId) {
      api.get(`/receitas/${receitaId}`)
        .then((res) => setDadosReceita(res.data))
        .catch((err) => console.log(err));
    }
  }, [receitaId]);

  const imgFinal    = receitaId ? dadosReceita?.link_imagem || descubra : imagem || descubra;
  const tituloFinal = receitaId ? dadosReceita?.receita     || "Carregando..." : nomeExibicao || "";

  const destino = tipoCategoria
    ? { pathname: "/pages/listagem", state: { tipoCategoria, nomeExibicao } }
    : { pathname: `/receita/${receitaId}` };

  return (
    <Link to={destino.pathname} state={destino.state} className={styles.link}>
      <div className={styles.card}>
        <img className={styles.img2} src={imgFinal} alt={tituloFinal} />
        <h2 className={styles.categoria}>{tituloFinal}</h2>
      </div>
    </Link>
  );
}

export default CardVertical;