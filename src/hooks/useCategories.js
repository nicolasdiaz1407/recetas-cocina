// src/hooks/useCategories.js
import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        // La API devuelve un array en res.data.categories
        setCategories(res.data.categories || []);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar las categorías");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
