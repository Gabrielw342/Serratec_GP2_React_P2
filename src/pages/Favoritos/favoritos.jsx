import "./Favoritos.css";
import ItemFavorito from "../../components/itemFavorito/itemFavorito";
import boloBolo from "../../assets/bolo_bolo.png";
import DivisaoTitulo from "../../components/DivisaoTitulo/DivisaoTitulo";

const receitas = [
  { id: 1, title: "Bolo de bolo", image: boloBolo },
  { id: 2, title: "Bolo de bolo", image: boloBolo },
  { id: 3, title: "Bolo de bolo", image: boloBolo },
  { id: 4, title: "Bolo de bolo", image: boloBolo },
  { id: 5, title: "Bolo de bolo", image: boloBolo },
  { id: 6, title: "Bolo de bolo", image: boloBolo },
  { id: 7, title: "Bolo de bolo", image: boloBolo },
  { id: 8, title: "Bolo de bolo", image: boloBolo },
]

export default function Favoritos() {
  return (
    <div className="favoritos-page">
      <main className="favoritos-main">
        <DivisaoTitulo titulo="Favoritos"/>
        <div className="favoritos-grid">
          {receitas.map((receita) => (
            <ItemFavorito
              key={receita.id}
              recipe={receita}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
