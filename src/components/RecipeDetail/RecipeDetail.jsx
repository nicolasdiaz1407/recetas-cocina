// src/components/RecipeDetail/RecipeDetail.jsx (actualizado)
import React, { useState, useMemo } from "react";
import ImageFallback from "../ImageFallback/ImageFallback";
import styles from "./RecipeDetail.module.css";
import {
  HiOutlineHeart,
  HiHeart,
  HiClock,
  HiMapPin,
  HiShare,
  HiBookmark,
} from "react-icons/hi2";

export default function RecipeDetail({ recipe, onToggleFavorite, isFavorite }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  // Memoize ingredients calculation
  const ingredients = useMemo(() => {
    const items = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        items.push({
          ingredient: ingredient.trim(),
          measure: (measure || "").trim(),
        });
      }
    }
    return items;
  }, [recipe]);

  // Memoize instructions with proper formatting
  const formattedInstructions = useMemo(() => {
    if (!recipe.strInstructions) return [];
    return recipe.strInstructions
      .split("\n")
      .filter((step) => step.trim())
      .map((step) => step.trim());
  }, [recipe.strInstructions]);

  const difficulty = ["Fácil", "Media", "Difícil"][
    Math.floor(Math.random() * 3)
  ];
  const cookTime = Math.max(15, Math.min(120, ingredients.length * 3));

  const handleFavoriteClick = () => {
    onToggleFavorite?.(recipe);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className={styles.container}>
      {/* Main Content Grid */}
      <div className={styles.contentGrid}>
        {/* Left Column - Image and Meta */}
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            {!imageLoaded && <div className={styles.imageSkeleton}></div>}

            <ImageFallback
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className={`${styles.image} ${imageLoaded ? styles.loaded : ""}`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
              size="large"
            />

            {/* Favorite Button */}
            <button
              className={`${styles.favoriteButton} ${
                isFavorite ? styles.favorited : ""
              }`}
              onClick={handleFavoriteClick}
              aria-label={
                isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
              }
            >
              {isFavorite ? (
                <HiHeart size={24} />
              ) : (
                <HiOutlineHeart size={24} />
              )}
            </button>
          </div>

          {/* Meta Information */}
          <div className={styles.metaCard}>
            <div className={styles.metaItem}>
              <HiMapPin className={styles.metaIcon} />
              <div>
                <span className={styles.metaLabel}>Cocina</span>
                <span className={styles.metaValue}>{recipe.strArea}</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <HiBookmark className={styles.metaIcon} />
              <div>
                <span className={styles.metaLabel}>Categoría</span>
                <span className={styles.metaValue}>{recipe.strCategory}</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <HiClock className={styles.metaIcon} />
              <div>
                <span className={styles.metaLabel}>Tiempo</span>
                <span className={styles.metaValue}>{cookTime} min</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.difficultyContainer}>
                <span className={styles.metaLabel}>Dificultad</span>
                <span
                  className={`${styles.difficulty} ${
                    styles[difficulty.toLowerCase()]
                  }`}
                >
                  {difficulty}
                </span>
              </div>
            </div>
          </div>

          {/* Share Button */}
          <button
            className={styles.shareButton}
            onClick={handleShare}
            aria-label="Compartir receta"
          >
            <HiShare size={20} />
            {copied ? "¡Enlace copiado!" : "Compartir receta"}
          </button>

          {/* Video Section if available */}
          {recipe.strYoutube && (
            <div className={styles.videoSection}>
              <h3 className={styles.videoTitle}>Video Tutorial</h3>
              <div className={styles.videoContainer}>
                <iframe
                  src={`https://www.youtube.com/embed/${
                    recipe.strYoutube.split("v=")[1]
                  }`}
                  title={`Video de ${recipe.strMeal}`}
                  allowFullScreen
                  loading="lazy"
                  className={styles.video}
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Content */}
        <div className={styles.rightColumn}>
          {/* Recipe Header */}
          <header className={styles.recipeHeader}>
            <h1 className={styles.title}>{recipe.strMeal}</h1>
            <p className={styles.description}>
              Descubre cómo preparar esta deliciosa receta paso a paso
            </p>
          </header>

          {/* Ingredients Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Ingredientes
              <span className={styles.sectionCount}>
                ({ingredients.length})
              </span>
            </h2>
            <div className={styles.ingredientsList}>
              {ingredients.map((item, index) => (
                <div key={index} className={styles.ingredientItem}>
                  <input
                    type="checkbox"
                    id={`ingredient-${index}`}
                    className={styles.ingredientCheckbox}
                  />
                  <label
                    htmlFor={`ingredient-${index}`}
                    className={styles.ingredientLabel}
                  >
                    <span className={styles.ingredientName}>
                      {item.ingredient}
                    </span>
                    {item.measure && (
                      <span className={styles.ingredientMeasure}>
                        {item.measure}
                      </span>
                    )}
                  </label>
                </div>
              ))}
            </div>
          </section>

          {/* Instructions Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Instrucciones
              <span className={styles.sectionCount}>
                ({formattedInstructions.length} pasos)
              </span>
            </h2>
            <div className={styles.instructionsList}>
              {formattedInstructions.map((step, index) => (
                <div key={index} className={styles.instructionStep}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepContent}>
                    <p>{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
