// src/components/RecipesPopular/RecipesPopular.jsx
import React, { useState, useEffect } from "react";
import { Carousel } from "../Carousel/Carousel";
import RecipeCard from "../Recetas/RecipeCard";
import useRecipes from "../../hooks/useRecipes";
import styles from "./RecipesPopular.module.css";
import { HiFire } from "react-icons/hi2";

export default function RecipesPopular() {
  const [isMobile, setIsMobile] = useState(false);
  const { recipes, loading, error } = useRecipes("", "", 1, 8, true);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const renderRecipeCard = (recipe) => (
    <RecipeCard
      recipe={recipe}
      onToggleFavorite={(recipe) => {
        console.log("Toggle favorite:", recipe);
      }}
    />
  );

  if (error) {
    return null;
  }

  return (
    <section className={styles.container}>
      {/* Header de la sección */}
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.titleWrapper}>
            {/*<HiFire className={styles.titleIcon} />*/}
            <h2 className={styles.title}>
              <span className={styles.titleMain}>Recetas</span>
              <span className={styles.titleAccent}>Populares</span>
            </h2>
          </div>
          <div className={styles.titleLine}></div>
          <p className={styles.subtitle}>
            Descubre las recetas más buscadas y mejor valoradas por nuestra
            comunidad
          </p>
        </div>
      </div>

      {/* Carrusel de recetas populares */}
      <div className={styles.carouselContainer}>
        <Carousel
          items={recipes}
          itemsPerView={4}
          isMobile={isMobile}
          mobileItemsPerView={1.5}
          renderItem={renderRecipeCard}
          loading={loading}
          ariaLabel="Carrusel de recetas populares"
        />
      </div>

      {/* Indicadores de scroll para móvil 
      {isMobile && (
        <div className={styles.scrollIndicator}>
          <span>Desliza para explorar más recetas</span>
        </div>
      )}*/}
    </section>
  );
}
