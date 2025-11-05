// src/pages/Favorites/components/EmptyFavorites/EmptyFavorites.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EmptyFavorites.module.css";
import {
  HiHeart,
  HiOutlineHeart,
  HiArrowRight,
  HiSparkles,
} from "react-icons/hi2";

export default function EmptyFavorites() {
  const navigate = useNavigate();

  return (
    <div className={styles.emptyContainer}>
      <div className={styles.emptyContent}>
        {/* Icono Animado */}
        <div className={styles.heartAnimation}>
          <HiOutlineHeart className={styles.heartOutline} />
          <HiHeart className={styles.heartFill} />
        </div>

        {/* Mensaje Principal */}
        <div className={styles.emptyText}>
          <h2 className={styles.emptyTitle}>
            Tu corazón está vacío... por ahora
          </h2>
          <p className={styles.emptyDescription}>
            Todavía no has guardado ninguna receta en favoritos. Descubre
            recetas increíbles y guárdalas aquí para cocinar después.
          </p>
        </div>

        {/* Stats de Motivación */}
        <div className={styles.motivationStats}>
          <div className={styles.statItem}>
            <HiSparkles className={styles.statIcon} />
            <div className={styles.statContent}>
              <div className={styles.statNumber}>300+</div>
              <div className={styles.statLabel}>Recetas Esperando</div>
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.globeIcon}>🌍</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>30+</div>
              <div className={styles.statLabel}>Cocinas Globales</div>
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.clockIcon}>⏱️</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Gratis</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>
            ¿Listo para comenzar tu viaje culinario?
          </h3>
          <p className={styles.ctaSubtitle}>
            Explora nuestra colección de recetas auténticas de todo el mundo
          </p>

          <div className={styles.ctaButtons}>
            <button
              className={styles.primaryCta}
              onClick={() => navigate("/recetas")}
            >
              <HiArrowRight className={styles.arrowIcon} />
              <span>Explorar Recetas</span>
            </button>

            <button
              className={styles.secondaryCta}
              onClick={() => navigate("/")}
            >
              Volver al Inicio
            </button>
          </div>

          {/* Tips */}
          <div className={styles.tipsSection}>
            <h4 className={styles.tipsTitle}>Consejos para empezar:</h4>
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <div className={styles.tipNumber}>1</div>
                <div className={styles.tipContent}>
                  <strong>Explora categorías</strong>
                  <p>Encuentra recetas por tipo de comida</p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <div className={styles.tipNumber}>2</div>
                <div className={styles.tipContent}>
                  <strong>Busca por región</strong>
                  <p>Descubre cocinas internacionales</p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <div className={styles.tipNumber}>3</div>
                <div className={styles.tipContent}>
                  <strong>Haz click en el corazón</strong>
                  <p>Guarda tus recetas favoritas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
