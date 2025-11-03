// src/components/Recetas/RecipeGrid.jsx
import React from "react";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeGrid.module.css";
import { HiExclamationTriangle } from "react-icons/hi2";

export default function RecipeGrid({
  recipes,
  currentCategory,
  onView,
  onToggleFavorite,
  favorites = [],
}) {
  if (!recipes || recipes.length === 0) {
    return (
      <div className={styles.emptyState}>
        <HiExclamationTriangle size={48} className={styles.emptyIcon} />
        <h3>No se encontraron recetas</h3>
        <p>Intenta con otros términos de búsqueda o filtros diferentes</p>
      </div>
    );
  }

  const isFavorite = (recipe) => {
    return favorites.some((fav) => fav.idMeal === recipe.idMeal);
  };

  return (
    <div className={styles.grid}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          currentCategory={currentCategory} // <-- Nueva prop
          onView={onView}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite(recipe)}
        />
      ))}
    </div>
  );
}
