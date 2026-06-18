import { useState, useEffect } from "react";
import { FavContext } from "./useFavContext";

const STORAGE_KEY = "favoritos";

export const FavContextProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => {
    try {
      const armazenado = localStorage.getItem(STORAGE_KEY);
      return armazenado ? JSON.parse(armazenado) : [];
    } catch (erro) {
      console.error("Erro ao ler favoritos do localStorage:", erro);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritos));
    } catch (erro) {
      console.error("Erro ao salvar favoritos no localStorage:", erro);
    }
  }, [favoritos]);

  const ehFavorito = (receita) => {
    return favoritos.some((item) => item.id === receita.id);
  };

  const adicionarFavorito = (receita) => {
    setFavoritos((listaAnterior) => [...listaAnterior, receita]);
  };

  const removerFavorito = (receita) => {
    setFavoritos((listaAnterior) =>
      listaAnterior.filter((item) => item.id !== receita.id)
    );
  };

  const alternarFavorito = (receita) => {
    if (ehFavorito(receita)) {
      removerFavorito(receita);
    } else {
      adicionarFavorito(receita);
    }
  };

  return (
    <FavContext.Provider
      value={{
        favoritos,
        ehFavorito,
        adicionarFavorito,
        removerFavorito,
        alternarFavorito,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};