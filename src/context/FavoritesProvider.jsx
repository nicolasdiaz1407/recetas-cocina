// src/context/FavoritesProvider.jsx
import React, { useState, useEffect } from "react";
import FavoritesContext from "./FavoritesContext";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Cargar favoritos desde localStorage al inicializar con verificación de expiración
  useEffect(() => {
    const storedFavorites = localStorage.getItem("appetito_favorites");
    const storedTimestamp = localStorage.getItem(
      "appetito_favorites_timestamp"
    );

    if (storedFavorites && storedTimestamp) {
      try {
        const timestamp = parseInt(storedTimestamp);
        const now = Date.now();
        const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000; // 7 días en milisegundos

        // Verificar si los favoritos han expirado (más de 7 días)
        if (now - timestamp < sevenDaysInMs) {
          setFavorites(JSON.parse(storedFavorites));
        } else {
          // Limpiar favoritos expirados
          console.log("Favoritos expirados, limpiando...");
          localStorage.removeItem("appetito_favorites");
          localStorage.removeItem("appetito_favorites_timestamp");
        }
      } catch (error) {
        console.error("Error loading favorites from localStorage:", error);
        localStorage.removeItem("appetito_favorites");
        localStorage.removeItem("appetito_favorites_timestamp");
      }
    }
  }, []);

  // Guardar favoritos en localStorage cuando cambien con timestamp actual
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("appetito_favorites", JSON.stringify(favorites));
      localStorage.setItem(
        "appetito_favorites_timestamp",
        Date.now().toString()
      );
    } else {
      // Si no hay favoritos, limpiar el localStorage
      localStorage.removeItem("appetito_favorites");
      localStorage.removeItem("appetito_favorites_timestamp");
    }
  }, [favorites]);

  // Agregar a favoritos
  const addFavorite = (recipe) => {
    if (!recipe?.idMeal) return;

    setFavorites((prev) => {
      // Evitar duplicados
      if (prev.some((fav) => fav.idMeal === recipe.idMeal)) {
        return prev;
      }
      return [...prev, recipe];
    });
  };

  // Remover de favoritos
  const removeFavorite = (recipeId) => {
    setFavorites((prev) => prev.filter((fav) => fav.idMeal !== recipeId));
  };

  // Verificar si una receta es favorita
  const isFavorite = (recipeId) => {
    return favorites.some((fav) => fav.idMeal === recipeId);
  };

  // Toggle favorito
  const toggleFavorite = (recipe) => {
    if (!recipe?.idMeal) return;

    if (isFavorite(recipe.idMeal)) {
      removeFavorite(recipe.idMeal);
    } else {
      addFavorite(recipe);
    }
  };

  // Obtener cantidad de favoritos
  const favoritesCount = favorites.length;

  // Limpiar todos los favoritos
  const clearFavorites = () => {
    setFavorites([]);
  };

  // Obtener timestamp de expiración
  const getExpirationDate = () => {
    const storedTimestamp = localStorage.getItem(
      "appetito_favorites_timestamp"
    );
    if (storedTimestamp) {
      const timestamp = parseInt(storedTimestamp);
      const expirationDate = new Date(timestamp + 7 * 24 * 60 * 60 * 1000);
      return expirationDate;
    }
    return null;
  };

  const value = {
    favorites,
    favoritesCount,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    clearFavorites,
    getExpirationDate,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
