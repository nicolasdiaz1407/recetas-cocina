// src/pages/RecipePage/RecipePage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import RecipeDetail from "../../components/RecipeDetail/RecipeDetail";
import RecipeSkeleton from "./RecipeSkeleton";
import useRecipe from "../../hooks/useRecipe";
import { useFavorites } from "../../hooks/useFavorites";
import Footer from "../../components/Footer/Footer";
import styles from "./RecipePage.module.css";
import { HiArrowLeft } from "react-icons/hi2";

export default function RecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipe, loading, error } = useRecipe(id);
  const { isFavorite, toggleFavorite } = useFavorites();

  // Configuración del breadcrumb para el Hero
  const breadcrumbItems = recipe
    ? [
        { label: "Inicio", path: "/" },
        { label: "Recetas", path: "/recetas" },
        { label: recipe.strMeal, path: null, current: true },
      ]
    : null;

  if (loading) {
    return (
      <div className={styles.container}>
        <Hero
          title=""
          subtitle=""
          height="20rem"
          mobileHeight="12rem"
          showBreadcrumb={false}
        />
        <RecipeSkeleton />
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className={styles.container}>
        <Hero
          title="Receta no encontrada"
          subtitle="Lo sentimos, no pudimos encontrar la receta que buscas"
          height="20rem"
          mobileHeight="12rem"
          showBreadcrumb={false}
        />
        <div className={styles.errorContainer}>
          <div className={styles.errorContent}>
            <h2>{error || "La receta solicitada no existe"}</h2>
            <p>
              Puede que la receta haya sido eliminada o el enlace sea
              incorrecto.
            </p>
            <button
              className={styles.backButton}
              onClick={() => navigate("/recetas")}
            >
              <HiArrowLeft size={20} />
              Volver a Recetas
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Hero
        title={recipe.strMeal}
        breadcrumbItems={breadcrumbItems}
        backgroundDesktop="/Hero.png"
        backgroundMobile="/HeroMobile.png"
        height="25rem"
        mobileHeight="18rem"
        overlay={true}
      />
      <RecipeDetail
        recipe={recipe}
        onToggleFavorite={() => toggleFavorite(recipe)}
        isFavorite={isFavorite(recipe.idMeal)}
      />
      <Footer />
    </div>
  );
}
