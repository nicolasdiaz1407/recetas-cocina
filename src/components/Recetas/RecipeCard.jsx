// src/components/RecipeCard/RecipeCard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageFallback from "../ImageFallback/ImageFallback";
import { useFavorites } from "../../hooks/useFavorites";
import styles from "./RecipeCard.module.css";
import { HiHeart, HiOutlineHeart, HiClock, HiEye } from "react-icons/hi2";

export default function RecipeCard({ recipe, currentCategory }) {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const difficulty = ["Fácil", "Media", "Difícil"][
    Math.floor(Math.random() * 3)
  ];
  const category = recipe?.strCategory || currentCategory || "General";

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipe);
  };

  const handleCardClick = () => {
    navigate(`/receta/${recipe.idMeal}`);
  };

  // Manejar click en el card, evitando el botón de favoritos
  const handleCardClickWrapper = (e) => {
    // Si el click fue en el botón de favoritos, no navegar
    if (e.target.closest(`.${styles.favoriteButton}`)) {
      return;
    }
    handleCardClick();
  };

  const favorite = isFavorite(recipe.idMeal);

  return (
    <article className={styles.card} onClick={handleCardClickWrapper}>
      {/* Image Container con ImageFallback */}
      <div
        className={styles.imageContainer}
        aria-busy={!imageLoaded}
        aria-label={recipe.strMeal + " - imagen"}
      >
        {/* skeleton / placeholder siempre visible hasta que imageLoaded === true */}
        {!imageLoaded && (
          <div className={styles.imageSkeleton} role="img" aria-hidden="true">
            <div className={styles.placeholderBox} />
          </div>
        )}

        {/* ImageFallback: si falla onError se muestra el skeleton/placeholder */}
        <ImageFallback
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className={`${styles.image} ${
            imageLoaded ? styles.imageVisible : ""
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
          size="carousel"
          style={{ opacity: imageLoaded && !imageError ? 1 : 0 }}
        />

        {/* Favorite Button */}
        <button
          className={`${styles.favoriteButton} ${
            favorite ? styles.favoriteActive : ""
          }`}
          onClick={handleFavoriteClick}
          aria-label={favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          onTouchStart={(e) => {
            // Prevenir el comportamiento táctil por defecto que podría causar navegación
            e.stopPropagation();
          }}
        >
          {favorite ? (
            <HiHeart size={20} className={styles.favoriteIcon} />
          ) : (
            <HiOutlineHeart size={20} className={styles.favoriteIcon} />
          )}
        </button>

        {/* Category Badge */}
        <div className={styles.categoryBadge} aria-hidden="true">
          {category}
        </div>

        {/* Hover Overlay */}
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <HiEye size={24} />
            <span>Ver Receta</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{recipe.strMeal}</h3>

        {/* Meta Info */}
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <HiClock className={styles.metaIcon} />
            <span>30 min</span>
          </div>
          <div className={styles.metaItem}>
            <div
              className={`${styles.difficulty} ${
                styles[difficulty.toLowerCase()]
              }`}
            >
              {difficulty}
            </div>
          </div>
        </div>

        {/* Description */}
        {recipe.strInstructions && (
          <p className={styles.description}>
            {recipe.strInstructions.length > 120
              ? `${recipe.strInstructions.substring(0, 120)}...`
              : recipe.strInstructions}
          </p>
        )}

        {/* Action Button */}
        <button className={styles.actionButton} onClick={handleCardClick}>
          <HiEye size={18} /> Ver Receta Completa
        </button>
      </div>
    </article>
  );
}
