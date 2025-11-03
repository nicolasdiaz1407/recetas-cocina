// src/hooks/useRecipe.js
import { useState, useEffect } from "react";

export default function useRecipe(idMeal) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!idMeal) {
      setLoading(false);
      setError("ID de receta no válido");
      return;
    }

    const fetchRecipe = async () => {
      setLoading(true);
      setError(null);

      try {
        // Check cache first
        const cacheKey = `recipe-${idMeal}`;
        const cached = localStorage.getItem(cacheKey);

        if (cached) {
          const cachedData = JSON.parse(cached);
          // Cache valid for 1 hour
          if (Date.now() - cachedData.timestamp < 3600000) {
            setRecipe(cachedData.recipe);
            setLoading(false);
            return;
          }
        }

        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );

        if (!res.ok) throw new Error("Error en la respuesta del servidor");

        const data = await res.json();

        if (data.meals && data.meals.length > 0) {
          const recipeData = data.meals[0];
          setRecipe(recipeData);

          // Cache the result
          localStorage.setItem(
            cacheKey,
            JSON.stringify({
              recipe: recipeData,
              timestamp: Date.now(),
            })
          );
        } else {
          setError("Receta no encontrada");
        }
      } catch (err) {
        setError("Error al cargar la receta");
        console.error("Error fetching recipe:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [idMeal]);

  return { recipe, loading, error };
}
