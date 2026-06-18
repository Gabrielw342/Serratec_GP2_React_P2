import "./favoritos.css";
import ItemFavorito from "../../components/itemFavorito/itemFavorito";
import DivisaoTitulo from "../../components/DivisaoTitulo/DivisaoTitulo";
import { useFavContext } from "../../context/FavContext/useFavContext";

export default function Favoritos() {
  const { favoritos } = useFavContext();

  return (
    <div className="favoritos-page">
      <main className="favoritos-main">
        <DivisaoTitulo titulo="Favoritos"/>
        <div className="favoritos-grid">
          {favoritos.length === 0 ? (
            <p className="favoritos-vazio">Você ainda não adicionou nenhuma receita aos favoritos.</p>
          ) : (
            favoritos.map((receita) => (
              <ItemFavorito
                key={receita.id}
                recipe={receita}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}