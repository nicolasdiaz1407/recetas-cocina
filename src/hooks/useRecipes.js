// src/hooks/useRecipes.js
import { useState, useEffect, useRef } from "react";

export default function useRecipes(
  search,
  category,
  currentPage = 1,
  recipesPerPage = 12,
  popular = false,
  area = "" // 👈 Nuevo parámetro para área
) {
  const [recipes, setRecipes] = useState([]);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cacheRef = useRef({}); // Cache por categoría, búsqueda, popular y área

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        // Crear cache key único que incluya área
        let cacheKey = "default";
        if (area) cacheKey = `area_${area}`;
        else if (category) cacheKey = `cat_${category}`;
        else if (search) cacheKey = `search_${search}`;
        else if (popular) cacheKey = "popular";

        // Usar cache si existe
        if (cacheRef.current[cacheKey]) {
          const allRecipes = cacheRef.current[cacheKey];
          setTotalRecipes(allRecipes.length);
          const startIndex = (currentPage - 1) * recipesPerPage;
          setRecipes(allRecipes.slice(startIndex, startIndex + recipesPerPage));
          setLoading(false);
          return;
        }

        let allRecipes = [];

        if (popular) {
          // Estrategia para recetas populares: mezclar varias categorías
          const popularCategories = [
            "Beef",
            "Chicken",
            "Dessert",
            "Vegetarian",
            "Seafood",
          ];

          // Obtener recetas de múltiples categorías populares
          const categoryPromises = popularCategories.map(async (cat) => {
            try {
              const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
              );
              const data = await res.json();
              return data.meals ? data.meals.slice(0, 4) : []; // Tomar hasta 4 recetas por categoría
            } catch {
              return [];
            }
          });

          const categoryResults = await Promise.all(categoryPromises);
          const flattenedRecipes = categoryResults.flat();

          // Mezclar y seleccionar las más populares (simulado)
          allRecipes = shuffleArray(flattenedRecipes).slice(0, 20);
          setTotalRecipes(allRecipes.length);

          // Traer detalles de las recetas populares
          const detailedRecipes = await Promise.all(
            allRecipes.slice(0, recipesPerPage).map(async (r) => {
              try {
                const resDetail = await fetch(
                  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${r.idMeal}`
                );
                const detailData = await resDetail.json();
                return detailData.meals[0];
              } catch {
                return r; // Fallback a la receta básica
              }
            })
          );

          setRecipes(detailedRecipes);
          cacheRef.current[cacheKey] = allRecipes;
        } else if (area) {
          // 👈 NUEVO: Filtrar por área
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
          );
          const data = await res.json();
          allRecipes = data.meals || [];
          setTotalRecipes(allRecipes.length);

          // Paginación: slice de recetas a mostrar
          const startIndex = (currentPage - 1) * recipesPerPage;
          const currentRecipesSlice = allRecipes.slice(
            startIndex,
            startIndex + recipesPerPage
          );

          // Traer detalles solo de las recetas visibles
          const detailedRecipes = await Promise.all(
            currentRecipesSlice.map(async (r) => {
              try {
                const resDetail = await fetch(
                  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${r.idMeal}`
                );
                const detailData = await resDetail.json();
                return detailData.meals[0];
              } catch {
                return r; // Fallback a la receta básica
              }
            })
          );

          setRecipes(detailedRecipes);
          // Guardar en cache la área completa (solo IDs, no detalles completos)
          cacheRef.current[cacheKey] = allRecipes;
        } else if (category) {
          // Primer fetch: solo IDs y nombre
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
          );
          const data = await res.json();
          allRecipes = data.meals || [];
          setTotalRecipes(allRecipes.length);

          // Paginación: slice de recetas a mostrar
          const startIndex = (currentPage - 1) * recipesPerPage;
          const currentRecipesSlice = allRecipes.slice(
            startIndex,
            startIndex + recipesPerPage
          );

          // Traer detalles solo de las recetas visibles
          const detailedRecipes = await Promise.all(
            currentRecipesSlice.map(async (r) => {
              try {
                const resDetail = await fetch(
                  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${r.idMeal}`
                );
                const detailData = await resDetail.json();
                return detailData.meals[0];
              } catch {
                return r; // Fallback a la receta básica
              }
            })
          );

          setRecipes(detailedRecipes);
          // Guardar en cache la categoría completa (solo IDs, no detalles completos)
          cacheRef.current[cacheKey] = allRecipes;
        } else {
          // Búsqueda o default
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${
              search || ""
            }`
          );
          const data = await res.json();
          allRecipes = data.meals || [];
          setTotalRecipes(allRecipes.length);

          const startIndex = (currentPage - 1) * recipesPerPage;
          setRecipes(allRecipes.slice(startIndex, startIndex + recipesPerPage));

          // Guardar en cache
          cacheRef.current[cacheKey] = allRecipes;
        }
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Error al cargar recetas");
      } finally {
        setLoading(false);
      }
    };

    // Debounce para búsqueda
    const debounceTimeout = setTimeout(() => {
      fetchRecipes();
    }, 400);

    return () => clearTimeout(debounceTimeout);
  }, [search, category, currentPage, recipesPerPage, popular, area]); // 👈 Agregar area a las dependencias

  return { recipes, totalRecipes, loading, error };
}

// Función auxiliar para mezclar array (Fisher-Yates shuffle)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
