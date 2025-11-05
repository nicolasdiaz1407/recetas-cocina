// src/pages/Favorites/components/FavoritesGrid/FavoritesGrid.jsx
import React, { useState, useRef, useEffect } from "react";
import RecipeCard from "../../../../components/Recetas/RecipeCard";
import { useFavorites } from "../../../../hooks/useFavorites";
import styles from "./FavoritesGrid.module.css";
import {
  FiSliders,
  FiXCircle,
  FiFilter,
  FiChevronDown,
  FiCheck,
} from "react-icons/fi";

export default function FavoritesGrid({ favorites }) {
  const { clearFavorites } = useFavorites();
  const [sortBy, setSortBy] = useState("date");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);

  // Refs para los dropdowns
  const categoryDropdownRef = useRef(null);
  const sortDropdownRef = useRef(null);
  const categoryTriggerRef = useRef(null);
  const sortTriggerRef = useRef(null);

  // Obtener categorías únicas
  const categories = React.useMemo(() => {
    const uniqueCategories = [
      ...new Set(favorites.map((fav) => fav.strCategory)),
    ];
    return ["all", ...uniqueCategories].filter(Boolean);
  }, [favorites]);

  // Filtrar y ordenar recetas
  const filteredAndSortedFavorites = React.useMemo(() => {
    let result = [...favorites];

    if (filterCategory !== "all") {
      result = result.filter((fav) => fav.strCategory === filterCategory);
    }

    switch (sortBy) {
      case "name":
        result.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
        break;
      case "category":
        result.sort((a, b) => a.strCategory.localeCompare(b.strCategory));
        break;
      case "area":
        result.sort((a, b) => a.strArea.localeCompare(b.strArea));
        break;
      case "date":
      default:
        result.reverse();
        break;
    }

    return result;
  }, [favorites, sortBy, filterCategory]);

  // Cerrar dropdowns al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verificar si el click fue fuera del dropdown de categorías
      if (
        showCategoryDropdown &&
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target) &&
        categoryTriggerRef.current &&
        !categoryTriggerRef.current.contains(event.target)
      ) {
        setShowCategoryDropdown(false);
      }

      // Verificar si el click fue fuera del dropdown de ordenamiento
      if (
        showSortDropdown &&
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target) &&
        sortTriggerRef.current &&
        !sortTriggerRef.current.contains(event.target)
      ) {
        setShowSortDropdown(false);
      }
    };

    // Agregar event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    // Limpiar event listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [showCategoryDropdown, showSortDropdown]);

  // Cerrar dropdowns al presionar Escape
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setShowCategoryDropdown(false);
        setShowSortDropdown(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleClearAll = () => {
    clearFavorites();
    setShowClearModal(false);
  };

  const getSortLabel = (value) => {
    switch (value) {
      case "date":
        return "Más recientes";
      case "name":
        return "Orden A-Z";
      case "category":
        return "Por categoría";
      case "area":
        return "Por región";
      default:
        return "Más recientes";
    }
  };

  const getCategoryLabel = (value) => {
    return value === "all" ? "Todas las categorías" : value;
  };

  const handleCategoryToggle = () => {
    setShowCategoryDropdown(!showCategoryDropdown);
    setShowSortDropdown(false);
  };

  const handleSortToggle = () => {
    setShowSortDropdown(!showSortDropdown);
    setShowCategoryDropdown(false);
  };

  const handleCategorySelect = (category) => {
    setFilterCategory(category);
    setShowCategoryDropdown(false);
  };

  const handleSortSelect = (sortValue) => {
    setSortBy(sortValue);
    setShowSortDropdown(false);
  };

  return (
    <div className={styles.favoritesGridContainer}>
      {/* Modal de Confirmación */}
      {showClearModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <FiXCircle size={24} className={styles.modalIcon} />
              <h3>¿Eliminar todos los favoritos?</h3>
            </div>
            <div className={styles.modalBody}>
              <p>
                Esta acción eliminará permanentemente {favorites.length} recetas
                de tus favoritos. Esta acción no se puede deshacer.
              </p>
            </div>
            <div className={styles.modalActions}>
              <button
                className={styles.modalCancel}
                onClick={() => setShowClearModal(false)}
              >
                Cancelar
              </button>
              <button className={styles.modalConfirm} onClick={handleClearAll}>
                Sí, eliminar todo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header con Controles */}
      <div className={styles.gridHeader}>
        <div className={styles.headerInfo}>
          <h2 className={styles.gridTitle}>Tus Recetas Favoritas</h2>
          <span className={styles.recipeCount}>
            {filteredAndSortedFavorites.length} de {favorites.length} recetas
          </span>
        </div>

        <div className={styles.controls}>
          {/* Filtro por Categoría - Dropdown Personalizado */}
          <div className={styles.dropdownContainer}>
            <button
              ref={categoryTriggerRef}
              className={styles.dropdownTrigger}
              onClick={handleCategoryToggle}
              aria-expanded={showCategoryDropdown}
              aria-haspopup="true"
            >
              <FiFilter className={styles.dropdownIcon} />
              <span>{getCategoryLabel(filterCategory)}</span>
              <FiChevronDown
                className={`${styles.dropdownArrow} ${
                  showCategoryDropdown ? styles.rotated : ""
                }`}
              />
            </button>

            {showCategoryDropdown && (
              <div
                ref={categoryDropdownRef}
                className={styles.dropdownMenu}
                role="menu"
                aria-labelledby="category-filter"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`${styles.dropdownItem} ${
                      filterCategory === category ? styles.selected : ""
                    }`}
                    onClick={() => handleCategorySelect(category)}
                    role="menuitem"
                  >
                    <span>{getCategoryLabel(category)}</span>
                    {filterCategory === category && (
                      <FiCheck className={styles.checkIcon} />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Ordenar - Dropdown Personalizado */}
          <div className={styles.dropdownContainer}>
            <button
              ref={sortTriggerRef}
              className={styles.dropdownTrigger}
              onClick={handleSortToggle}
              aria-expanded={showSortDropdown}
              aria-haspopup="true"
            >
              <FiSliders className={styles.dropdownIcon} />
              <span>{getSortLabel(sortBy)}</span>
              <FiChevronDown
                className={`${styles.dropdownArrow} ${
                  showSortDropdown ? styles.rotated : ""
                }`}
              />
            </button>

            {showSortDropdown && (
              <div
                ref={sortDropdownRef}
                className={styles.dropdownMenu}
                role="menu"
                aria-labelledby="sort-options"
              >
                <button
                  className={`${styles.dropdownItem} ${
                    sortBy === "date" ? styles.selected : ""
                  }`}
                  onClick={() => handleSortSelect("date")}
                  role="menuitem"
                >
                  <span>Más recientes</span>
                  {sortBy === "date" && (
                    <FiCheck className={styles.checkIcon} />
                  )}
                </button>
                <button
                  className={`${styles.dropdownItem} ${
                    sortBy === "name" ? styles.selected : ""
                  }`}
                  onClick={() => handleSortSelect("name")}
                  role="menuitem"
                >
                  <span>Orden A-Z</span>
                  {sortBy === "name" && (
                    <FiCheck className={styles.checkIcon} />
                  )}
                </button>
                <button
                  className={`${styles.dropdownItem} ${
                    sortBy === "category" ? styles.selected : ""
                  }`}
                  onClick={() => handleSortSelect("category")}
                  role="menuitem"
                >
                  <span>Por categoría</span>
                  {sortBy === "category" && (
                    <FiCheck className={styles.checkIcon} />
                  )}
                </button>
                <button
                  className={`${styles.dropdownItem} ${
                    sortBy === "area" ? styles.selected : ""
                  }`}
                  onClick={() => handleSortSelect("area")}
                  role="menuitem"
                >
                  <span>Por región</span>
                  {sortBy === "area" && (
                    <FiCheck className={styles.checkIcon} />
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Limpiar Todo */}
          <button
            onClick={() => setShowClearModal(true)}
            className={styles.clearButton}
            aria-label="Eliminar todos los favoritos"
            disabled={favorites.length === 0}
          >
            <FiXCircle size={18} />
            <span>Limpiar Todo</span>
          </button>
        </div>
      </div>

      {/* Grid de Recetas */}
      {filteredAndSortedFavorites.length > 0 ? (
        <div className={styles.recipesGrid}>
          {filteredAndSortedFavorites.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              currentCategory={recipe.strCategory}
            />
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <div className={styles.noResultsContent}>
            <FiSliders size={48} className={styles.noResultsIcon} />
            <h3>No hay recetas que coincidan</h3>
            <p>Intenta cambiar los filtros para ver más recetas</p>
            <button
              onClick={() => {
                setFilterCategory("all");
                setSortBy("date");
              }}
              className={styles.resetFiltersButton}
            >
              Mostrar todas las recetas
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
