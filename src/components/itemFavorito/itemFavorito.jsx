import { useFavContext } from "../../context/FavContext/useFavContext";

export default function ItemFavorito({ recipe }) {
  const { ehFavorito, adicionarFavorito, removerFavorito } = useFavContext();

  const estaNaLista = ehFavorito(recipe);

  const clicarFavorito = () => {
    if (estaNaLista) {
      removerFavorito(recipe);
    } else {
      adicionarFavorito(recipe);
    }
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-card__img" />
      <div className="recipe-card__footer">
        <span className="recipe-card__title">{recipe.title}</span>
        <button
          onClick={clicarFavorito}
          className="recipe-card__fav-btn"
          aria-label={estaNaLista ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          {estaNaLista ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
}