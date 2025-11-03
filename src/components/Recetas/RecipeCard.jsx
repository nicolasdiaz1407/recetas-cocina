// src/components/Recetas/RecipeCard.jsx (actualizado)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageFallback from "../ImageFallback/ImageFallback";
import styles from "./RecipeCard.module.css";
import { HiHeart, HiOutlineHeart, HiClock, HiEye } from "react-icons/hi2";

export default function RecipeCard({
  recipe,
  currentCategory,
  onToggleFavorite,
  isFavorite = false,
}) {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const difficulty = ["Fácil", "Media", "Difícil"][
    Math.floor(Math.random() * 3)
  ];
  const category = recipe.strCategory || currentCategory || "General";

  const handleImageLoad = () => setImageLoaded(true);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onToggleFavorite?.(recipe);
  };

  const handleCardClick = () => {
    navigate(`/receta/${recipe.idMeal}`);
  };

  return (
    <article className={styles.card} onClick={handleCardClick}>
      {/* Image Container con ImageFallback */}
      <div className={styles.imageContainer}>
        {!imageLoaded && <div className={styles.imageSkeleton} />}

        <ImageFallback
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className={styles.image}
          onLoad={handleImageLoad}
          loading="lazy"
          size="carousel"
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />

        {/* Favorite Button */}
        <button
          className={styles.favoriteButton}
          onClick={handleFavoriteClick}
          aria-label={
            isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
          }
        >
          {isFavorite ? (
            <HiHeart size={20} className={styles.favoriteIcon} />
          ) : (
            <HiOutlineHeart size={20} className={styles.favoriteIcon} />
          )}
        </button>

        {/* Category Badge */}
        <div className={styles.categoryBadge}>{category}</div>

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
