import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BarraDeBusca.module.css";
import { FaSearch } from "react-icons/fa";
import api from "../../services/api";

function BarraDeBusca() {
  const [texto, setTexto] = useState("");
  const [resultados, setResultados] = useState([]);
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();
  
  async function pesquisar(event) {
    event.preventDefault();

    if (texto.trim() === "") {
      return;
    }

    try {
      const response = await api.get(
        `/receitas/descricao?descricao=${texto}&page=1&limit=5`
      );

      const receitasEncontradas = response.data.items || [];

      setResultados(receitasEncontradas);

      if (receitasEncontradas.length === 0) {
        setMensagem("Nenhuma receita encontrada.");
      } else {
        setMensagem("");
      }
    } catch (erro) {
      console.log(erro);
      setMensagem("Erro ao buscar receita.");
      setResultados([]);
    }
  }

  function abrirReceita(id) {
    setTexto("");
    setResultados([]);
    setMensagem("");

    navigate(`/receita/${id}`);
  }

  return (
    <form className={styles.searchWrapper} onSubmit={pesquisar}>
      <button className={styles.searchButton} type="submit">
        <FaSearch />
      </button>

      <input
        type="text"
        className={styles.search}
        placeholder="Buscar receita..."
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
      />

      {resultados.length > 0 && (
        <div className={styles.resultadosBusca}>
          {resultados.map((receita) => (
            <button
              type="button"
              key={receita.id}
              className={styles.itemResultado}
              onClick={() => abrirReceita(receita.id)}
            >
              {receita.receita}
            </button>
          ))}
        </div>
      )}

      {mensagem && <p className={styles.mensagemBusca}>{mensagem}</p>}
    </form>
  );
}

export default BarraDeBusca;