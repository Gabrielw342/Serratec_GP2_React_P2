import { createContext, useContext } from "react";

export const FavContext = createContext(null);
export const useFavContext = () => useContext(FavContext);