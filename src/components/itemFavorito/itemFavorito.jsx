import { useState } from "react";
import { useFavContext } from "../../context/FavContext/useFavContext";
import ConfirmModal from "../Confirmmodal/confirmmodal";

export default function ItemFavorito({ recipe }) {
  const { ehFavorito, adicionarFavorito, removerFavorito } = useFavContext();
  const [modalAberto, setModalAberto] = useState(false);

  const estaNaLista = ehFavorito(recipe);

  const titulo = recipe.title ?? recipe.receita;
  const imagem = recipe.image ?? recipe.link_imagem;

  const clicarFavorito = () => {
    if (estaNaLista) {
      setModalAberto(true);
    } else {
      adicionarFavorito(recipe);
    }
  };

  const confirmarRemocao = () => {
    removerFavorito(recipe);
    setModalAberto(false);
  };

  return (
    <div className="recipe-card">
      <img src={imagem} alt={titulo} className="recipe-card__img" />
      <div className="recipe-card__footer">
        <span className="recipe-card__title">{titulo}</span>
        <button
          onClick={clicarFavorito}
          className="recipe-card__fav-btn"
          aria-label={estaNaLista ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          {estaNaLista ? "★" : "☆"}
        </button>
      </div>

      <ConfirmModal
        aberto={modalAberto}
        titulo="Remover dos favoritos"
        mensagem={`Tem certeza que deseja remover "${titulo}" dos seus favoritos?`}
        textoConfirmar="Remover"
        textoCancelar="Cancelar"
        onConfirmar={confirmarRemocao}
        onCancelar={() => setModalAberto(false)}
      />
    </div>
  );
}