// src/components/InternationalCuisines/InternationalCuisines.jsx (MEJORADO)
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InternationalCuisines.module.css";
import { HiArrowRight, HiMapPin } from "react-icons/hi2";

// Mapeo de cocinas a emojis de banderas
const CUISINE_FLAGS = {
  American: "🇺🇸",
  Australian: "🇦🇺",
  British: "🇬🇧",
  Canadian: "🇨🇦",
  Chinese: "🇨🇳",
  Croatian: "🇭🇷",
  Dutch: "🇳🇱",
  Egyptian: "🇪🇬",
  Filipino: "🇵🇭",
  French: "🇫🇷",
  Greek: "🇬🇷",
  Indian: "🇮🇳",
  Irish: "🇮🇪",
  Italian: "🇮🇹",
  Jamaican: "🇯🇲",
  Japanese: "🇯🇵",
  Kenyan: "🇰🇪",
  Malaysian: "🇲🇾",
  Mexican: "🇲🇽",
  Moroccan: "🇲🇦",
  Polish: "🇵🇱",
  Portuguese: "🇵🇹",
  Russian: "🇷🇺",
  Spanish: "🇪🇸",
  Syrian: "🇸🇾",
  Thai: "🇹🇭",
  Tunisian: "🇹🇳",
  Turkish: "🇹🇷",
  Ukrainian: "🇺🇦",
  Uruguayan: "🇺🇾",
  Vietnamese: "🇻🇳",
};

// Cocinas destacadas con platos representativos específicos
const FEATURED_CUISINES = [
  {
    name: "Italian",
    representativeDish: "Spaghetti Carbonara",
    fallbackSearch: "pasta",
  },
  {
    name: "Mexican",
    representativeDish: "Chicken Enchiladas",
    fallbackSearch: "taco",
  },
  {
    name: "Japanese",
    representativeDish: "Chicken Katsudon",
    fallbackSearch: "sushi",
  },
  {
    name: "Indian",
    representativeDish: "Lamb Biryani",
    fallbackSearch: "curry",
  },
  {
    name: "French",
    representativeDish: "Beef Bourguignon",
    fallbackSearch: "ratatouille",
  },
  {
    name: "Chinese",
    representativeDish: "Beef Chow Mein",
    fallbackSearch: "fried rice",
  },
  {
    name: "Thai",
    representativeDish: "Thai Green Curry",
    fallbackSearch: "pad thai",
  },
  {
    name: "Spanish",
    representativeDish: "Paella",
    fallbackSearch: "tapas",
  },
];

export default function InternationalCuisines() {
  const navigate = useNavigate();
  const [cuisinesData, setCuisinesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCuisinesData = async () => {
      setLoading(true);

      try {
        const cuisinesWithRecipes = await Promise.all(
          FEATURED_CUISINES.map(async (cuisine) => {
            try {
              // PRIMERO: Buscar por plato representativo específico
              let recipeImage = null;
              let recipeName = cuisine.representativeDish;
              let recipeCount = 0;

              // 1. Obtener recetas de esta cocina para el contador
              const cuisineResponse = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine.name}`
              );
              const cuisineData = await cuisineResponse.json();
              recipeCount = cuisineData.meals ? cuisineData.meals.length : 0;

              // 2. Buscar plato representativo específico
              const searchResponse = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${cuisine.representativeDish}`
              );
              const searchData = await searchResponse.json();

              if (searchData.meals && searchData.meals.length > 0) {
                // Encontramos el plato representativo
                recipeImage = searchData.meals[0].strMealThumb;
                recipeName = searchData.meals[0].strMeal;
              } else {
                // FALLBACK 1: Buscar por término genérico
                const fallbackResponse = await fetch(
                  `https://www.themealdb.com/api/json/v1/1/search.php?s=${cuisine.fallbackSearch}`
                );
                const fallbackData = await fallbackResponse.json();

                if (fallbackData.meals && fallbackData.meals.length > 0) {
                  // Filtrar para asegurar que sea de la cocina correcta
                  const cuisineMeal =
                    fallbackData.meals.find(
                      (meal) => meal.strArea === cuisine.name
                    ) || fallbackData.meals[0];

                  recipeImage = cuisineMeal.strMealThumb;
                  recipeName = cuisineMeal.strMeal;
                } else {
                  // FALLBACK 2: Usar primera receta de la cocina
                  if (cuisineData.meals && cuisineData.meals.length > 0) {
                    const detailResponse = await fetch(
                      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cuisineData.meals[0].idMeal}`
                    );
                    const detailData = await detailResponse.json();

                    if (detailData.meals && detailData.meals.length > 0) {
                      recipeImage = detailData.meals[0].strMealThumb;
                      recipeName = detailData.meals[0].strMeal;
                    }
                  }
                }
              }

              return {
                name: cuisine.name,
                flag: CUISINE_FLAGS[cuisine.name] || "🌍",
                recipeCount: recipeCount,
                featuredImage: recipeImage,
                featuredRecipe: recipeName,
                isAuthentic: !!recipeImage, // Indica si encontramos una imagen auténtica
              };
            } catch (error) {
              console.error(`Error fetching ${cuisine.name}:`, error);
              return {
                name: cuisine.name,
                flag: CUISINE_FLAGS[cuisine.name] || "🌍",
                recipeCount: 0,
                featuredImage: null,
                featuredRecipe: null,
                isAuthentic: false,
              };
            }
          })
        );

        setCuisinesData(
          cuisinesWithRecipes.filter((cuisine) => cuisine.recipeCount > 0)
        );
      } catch (error) {
        console.error("Error fetching cuisines:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCuisinesData();
  }, []);

  const handleCuisineClick = (cuisineName) => {
    // Navegar con replace: true para reemplazar la entrada del historial
    navigate(`/recetas?area=${encodeURIComponent(cuisineName)}`, {
      replace: false,
    });
  };

  const handleViewAllClick = () => {
    navigate("/recetas");
  };

  // ... (el resto del componente permanece igual, solo cambia la parte del loading y render)
  if (loading) {
    return (
      <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <div className={styles.titleWrapper}>
              {/*<HiMapPin className={styles.titleIcon} />*/}
              <h2 className={styles.title}>
                <span className={styles.titleMain}>Descubre Cocinas</span>
                <span className={styles.titleAccent}>Internacionales</span>
              </h2>
            </div>
            <div className={styles.titleLine}></div>
            <p className={styles.subtitle}>
              Cargando recetas auténticas de todo el mundo...
            </p>
          </div>
        </div>

        <div className={styles.cuisinesGrid}>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div key={index} className={styles.cuisineCardSkeleton}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonContent}>
                  <div className={styles.skeletonTitle}></div>
                  <div className={styles.skeletonCount}></div>
                </div>
              </div>
            ))}
        </div>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      {/* Header de la sección */}
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.titleWrapper}>
            {/*<HiMapPin className={styles.titleIcon} />*/}
            <h2 className={styles.title}>
              <span className={styles.titleMain}>Descubre Cocinas</span>
              <span className={styles.titleAccent}>Internacionales</span>
            </h2>
          </div>
          <div className={styles.titleLine}></div>
          <p className={styles.subtitle}>
            Explora recetas auténticas de todo el mundo
          </p>
        </div>

        <button
          className={styles.viewAllButton}
          onClick={handleViewAllClick}
          aria-label="Explorar todas las cocinas"
        >
          <span className={styles.buttonText}>Ver Todas</span>
          <HiArrowRight className={styles.arrowIcon} />
        </button>
      </div>

      {/* Grid de cocinas */}
      <div className={styles.cuisinesGrid}>
        {cuisinesData.map((cuisine, index) => (
          <button
            key={cuisine.name}
            className={styles.cuisineCard}
            onClick={() => handleCuisineClick(cuisine.name)}
            aria-label={`Explorar recetas ${cuisine.name} como ${cuisine.featuredRecipe}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Imagen de fondo */}
            {cuisine.featuredImage ? (
              <div
                className={styles.cuisineImage}
                style={{ backgroundImage: `url(${cuisine.featuredImage})` }}
              >
                <div className={styles.imageOverlay}></div>
              </div>
            ) : (
              // Fallback cuando no hay imagen
              <div className={styles.cuisineImageFallback}>
                <div className={styles.fallbackContent}>
                  <span className={styles.fallbackFlag}>{cuisine.flag}</span>
                  <span className={styles.fallbackText}>
                    Comida {cuisine.name}
                  </span>
                </div>
              </div>
            )}

            {/* Contenido */}
            <div className={styles.cuisineContent}>
              <div className={styles.cuisineHeader}>
                <span className={styles.cuisineFlag}>{cuisine.flag}</span>
                <div>
                  <h3 className={styles.cuisineName}>{cuisine.name}</h3>
                  {cuisine.featuredRecipe && (
                    <p className={styles.featuredDish}>
                      {cuisine.featuredRecipe}
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.cuisineInfo}>
                <span className={styles.recipeCount}>
                  {cuisine.recipeCount} recetas
                </span>
                <div className={styles.exploreCta}>
                  <span>Explorar</span>
                  <HiArrowRight size={16} />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* CTA móvil */}
      <div className={styles.mobileCTA}>
        <button className={styles.viewAllMobile} onClick={handleViewAllClick}>
          Explorar todas las cocinas
          <HiArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
