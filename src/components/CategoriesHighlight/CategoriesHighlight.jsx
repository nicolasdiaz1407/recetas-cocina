// src/components/CategoriesHighlight/CategoriesHighlight.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CategoriesHighlight.module.css";
import { HiArrowRight } from "react-icons/hi2";

// Categorías destacadas con iconos más modernos
const FEATURED_CATEGORIES = [
  { name: "Postres", icon: "🍰", apiName: "Dessert" },
  { name: "Carnes", icon: "🍖", apiName: "Beef" },
  { name: "Pollo", icon: "🍗", apiName: "Chicken" },
  { name: "Vegetariano", icon: "🥦", apiName: "Vegetarian" },
  { name: "Pasta", icon: "🍝", apiName: "Pasta" },
  { name: "Mariscos", icon: "🦐", apiName: "Seafood" },
  { name: "Desayunos", icon: "🥞", apiName: "Breakfast" },
  { name: "Entradas", icon: "🥗", apiName: "Starter" },
];

export default function CategoriesHighlight({
  maxCategories = 8,
  showTitle = true,
  className = "",
}) {
  const navigate = useNavigate();
  const categoriesToShow = FEATURED_CATEGORIES.slice(0, maxCategories);

  const handleCategoryClick = (categoryApiName) => {
    // Navegar con replace: false para permitir volver atrás
    navigate(`/recetas?categoria=${encodeURIComponent(categoryApiName)}`, {
      replace: false,
    });
  };
  const handleViewAllClick = () => {
    navigate("/recetas");
  };

  return (
    <section className={`${styles.container} ${className}`}>
      {/* Header moderno con diseño impactante */}
      {showTitle && (
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>
                <span className={styles.titleMain}>Descubre por</span>
                <span className={styles.titleAccent}>Categoría</span>
              </h2>
              <div className={styles.titleLine}></div>
            </div>
            <p className={styles.subtitle}>
              Postres, platos principales y más: elige tu receta favorita.
            </p>
          </div>
          <button
            className={styles.viewAllButton}
            onClick={handleViewAllClick}
            aria-label="Explorar todas las categorías"
          >
            <span className={styles.buttonText}>Explorar Todo</span>
            <div className={styles.buttonIcon}>
              <HiArrowRight size={18} />
            </div>
          </button>
        </div>
      )}

      {/* Grid moderno de categorías */}
      <div className={styles.categoriesGrid}>
        {categoriesToShow.map((category, index) => (
          <button
            key={category.apiName}
            className={styles.categoryCard}
            onClick={() => handleCategoryClick(category.apiName)}
            aria-label={`Explorar recetas de ${category.name}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <span className={styles.categoryIcon}>{category.icon}</span>
              </div>
              <span className={styles.categoryName}>{category.name}</span>
            </div>

            {/* Efecto hover sutil */}
            <div className={styles.hoverEffect}></div>
          </button>
        ))}
      </div>

      {/* CTA móvil mejorado */}
      <div className={styles.mobileCTA}>
        <button className={styles.viewAllMobile} onClick={handleViewAllClick}>
          <span>Ver Todas las Categorías</span>
          <HiArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
