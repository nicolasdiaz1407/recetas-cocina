// src/context/FavoritesContext.jsx
import { createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  favoritesCount: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
  toggleFavorite: () => {},
  clearFavorites: () => {},
  getExpirationDate: () => null,
});

export default FavoritesContext;
