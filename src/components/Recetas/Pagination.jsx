// src/components/Recetas/Pagination.jsx
import React from "react";
import styles from "./Pagination.module.css";
import {
  HiChevronLeft,
  HiChevronRight,
  HiEllipsisHorizontal,
} from "react-icons/hi2";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    let prev = 0;
    for (const i of range) {
      if (i - prev > 1) {
        rangeWithDots.push("...");
      }
      rangeWithDots.push(i);
      prev = i;
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <nav className={styles.pagination} aria-label="Navegación de páginas">
      {/* Previous Button */}
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <HiChevronLeft size={18} />
        <span>Anterior</span>
      </button>

      {/* Page Numbers */}
      <div className={styles.pages}>
        {visiblePages.map((page, index) =>
          page === "..." ? (
            <span key={`dots-${index}`} className={styles.dots}>
              <HiEllipsisHorizontal size={20} />
            </span>
          ) : (
            <button
              key={page}
              className={`${styles.pageButton} ${
                page === currentPage ? styles.active : ""
              }`}
              onClick={() => onPageChange(page)}
              aria-label={`Ir a página ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next Button */}
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
      >
        <span>Siguiente</span>
        <HiChevronRight size={18} />
      </button>
    </nav>
  );
}
