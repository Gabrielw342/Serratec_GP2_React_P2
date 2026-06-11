import { useState } from "react";
import { FavContext } from "./useFavContext";

export const FavContextProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const ehFavorito = (receita) => {
    return favoritos.find((item) => item.id === receita.id);
  };

  const adicionarFavorito = (receita) => {
    setFavoritos((listaAnterior) => [...listaAnterior, receita]);
  };

  const removerFavorito = (receita) => {
    const listaAtualizada = favoritos.filter((item) => item.id !== receita.id);
    setFavoritos(listaAtualizada);
  };

  return (
    <FavContext.Provider
      value={{ favoritos, ehFavorito, adicionarFavorito, removerFavorito }}
    >
      {children}
    </FavContext.Provider>
  );
};