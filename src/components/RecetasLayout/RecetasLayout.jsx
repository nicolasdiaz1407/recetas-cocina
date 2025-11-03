// src/components/Recetas/RecetasLayout.jsx (ACTUALIZADO)
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Importar useNavigate
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import RecipeGrid from "../Recetas/RecipeGrid";
import Pagination from "../Recetas/Pagination";
import useCategories from "../../hooks/useCategories";
import useRecipes from "../../hooks/useRecipes";
import styles from "./RecetasLayout.module.css";
import RecipeSkeleton from "../Recetas/RecipeSkeleton";

// Lista de áreas disponibles
const AVAILABLE_AREAS = [
  "American",
  "Australian",
  "British",
  "Canadian",
  "Chinese",
  "Croatian",
  "Dutch",
  "Egyptian",
  "Filipino",
  "French",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Jamaican",
  "Japanese",
  "Kenyan",
  "Malaysian",
  "Mexican",
  "Moroccan",
  "Polish",
  "Portuguese",
  "Russian",
  "Spanish",
  "Syrian",
  "Thai",
  "Tunisian",
  "Turkish",
  "Ukrainian",
  "Uruguayan",
  "Vietnamese",
];

export default function RecetasLayout({
  initialCategory = "",
  initialArea = "",
  onClearFilters, // 👈 Nueva prop opcional
}) {
  const navigate = useNavigate(); // 👈 Hook de navegación
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(initialCategory);
  const [selectedArea, setSelectedArea] = useState(initialArea);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 12;

  {
    /*const  categories, loading: loadingCategories  = useCategories();*/
  }
  const { categories } = useCategories();
  const { recipes, totalRecipes, loading, error } = useRecipes(
    search,
    selectedFilter,
    currentPage,
    recipesPerPage,
    false,
    selectedArea
  );

  // Efecto para sincronizar initialCategory y initialArea con la URL
  useEffect(() => {
    if (initialCategory) {
      setSelectedFilter(initialCategory);
      setSelectedArea("");
      setSearch("");
      setCurrentPage(1);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialArea) {
      setSelectedArea(initialArea);
      setSelectedFilter("");
      setSearch("");
      setCurrentPage(1);
    }
  }, [initialArea]);

  // Efecto para actualizar la URL cuando cambian los filtros
  useEffect(() => {
    // Solo actualizar la URL si hay un filtro activo
    if (selectedFilter || selectedArea) {
      const params = new URLSearchParams();

      if (selectedFilter) {
        params.set("categoria", selectedFilter);
      }

      if (selectedArea) {
        params.set("area", selectedArea);
      }

      // Usar replace: true para no agregar nueva entrada al historial
      navigate(`/recetas?${params.toString()}`, { replace: true });
    } else {
      // Si no hay filtros activos, limpiar la URL
      navigate("/recetas", { replace: true });
    }
  }, [selectedFilter, selectedArea, navigate]);

  // Opciones de filtro por categoría
  const categoryOptions = [
    { label: "Todas", value: "", icon: "🍽️" },
    ...categories.map((cat) => ({
      label: cat.strCategory,
      value: cat.strCategory,
      icon: "🍴",
    })),
  ];

  // Opciones de filtro por área
  const areaOptions = [
    { label: "Todas", value: "", icon: "🌍" },
    ...AVAILABLE_AREAS.map((area) => ({
      label: area,
      value: area,
      icon: "📍",
    })),
  ];

  const totalPages = Math.ceil(totalRecipes / recipesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (value) => {
    setSelectedFilter(value);
    setSelectedArea("");
    setSearch("");
    setCurrentPage(1);
  };

  const handleAreaChange = (value) => {
    setSelectedArea(value);
    setSelectedFilter("");
    setSearch("");
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedFilter("");
    setSelectedArea("");
    setSearch("");
    setCurrentPage(1);

    // Limpiar también la URL
    if (onClearFilters) {
      onClearFilters();
    }
  };

  // Determinar el título y subtítulo
  const getTitle = () => {
    if (selectedArea) return `Cocina ${selectedArea}`;
    if (selectedFilter) return `Recetas de ${selectedFilter}`;
    return "Descubre Recetas Deliciosas";
  };

  const getSubtitle = () => {
    if (selectedArea) return `Explora recetas auténticas de ${selectedArea}`;
    if (selectedFilter)
      return `Explora nuestra colección de ${selectedFilter.toLowerCase()}`;
    return "Explora la colección y encuentra tu próxima comida favorita";
  };

  return (
    <div className={styles.recetasContainer}>
      {/* Hero */}
      <div className={styles.heroSection}>
        <h2 className={styles.title}>{getTitle()}</h2>
        <p className={styles.subtitle}>{getSubtitle()}</p>
      </div>

      {/* Search & Filters */}
      <div className={styles.searchFiltersSection}>
        <div className={styles.searchContainer}>
          <SearchBar
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Buscar recetas..."
          />
        </div>

        <div className={styles.filtersRow}>
          {/* Filtro por Categoría */}
          <Filters
            options={categoryOptions}
            selectedOption={selectedFilter}
            onChange={handleCategoryChange}
            filterType="category"
          />

          {/* Filtro por Área/Región */}
          <Filters
            options={areaOptions}
            selectedOption={selectedArea}
            onChange={handleAreaChange}
            filterType="area"
          />
        </div>
      </div>

      {/* Resultados */}
      <div className={styles.resultsInfo}>
        <span className={styles.resultsCount}>
          {loading
            ? "Cargando recetas..."
            : `Mostrando ${recipes.length} de ${totalRecipes} recetas`}
        </span>
        <div className={styles.activeFilters}>
          {selectedFilter && (
            <span className={styles.activeFilter}>
              {
                categoryOptions.find((opt) => opt.value === selectedFilter)
                  ?.label
              }
              <button onClick={() => handleCategoryChange("")}>×</button>
            </span>
          )}
          {selectedArea && (
            <span className={styles.activeFilter}>
              {areaOptions.find((opt) => opt.value === selectedArea)?.label}
              <button onClick={() => handleAreaChange("")}>×</button>
            </span>
          )}
          {(selectedFilter || selectedArea) && (
            <button
              className={styles.clearAllButton}
              onClick={handleClearFilters}
            >
              Limpiar todo
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className={styles.recetasContent}>
        {error && <p className={styles.error}>{error}</p>}

        {loading ? (
          <div className={styles.gridSkeleton}>
            {Array.from({ length: recipesPerPage }).map((_, i) => (
              <RecipeSkeleton key={i} />
            ))}
          </div>
        ) : (
          <RecipeGrid
            recipes={recipes}
            currentCategory={selectedFilter}
            currentArea={selectedArea}
            onView={(r) => console.log(r)}
          />
        )}
      </div>

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
