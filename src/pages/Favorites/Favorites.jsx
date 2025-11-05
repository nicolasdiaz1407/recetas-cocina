// src/pages/Favorites/Favorites.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import FavoritesGrid from "./components/FavoritesGrid/FavoritesGrid";
import EmptyFavorites from "./components/EmptyFavorites/EmptyFavorites";
import { useFavorites } from "../../hooks/useFavorites";
import Footer from "../../components/Footer/Footer";
import styles from "./Favorites.module.css";
import { HiHeart, HiArrowRight } from "react-icons/hi2";

export default function Favorites() {
  const { favorites, favoritesCount } = useFavorites();
  const navigate = useNavigate();

  const breadcrumbItems = [
    { path: "/", label: "Inicio" },
    { label: "Mis Favoritos" },
  ];

  const hasFavorites = favoritesCount > 0;

  return (
    <div className={styles.favoritesPage}>
      {/* Hero Section */}
      <Hero
        title="Mis Favoritos"
        subtitle={
          hasFavorites
            ? `${favoritesCount} recetas guardadas con amor`
            : "Guarda tus recetas favoritas para cocinar después"
        }
        breadcrumbItems={breadcrumbItems}
        backgroundDesktop="/Hero.png"
        backgroundMobile="/HeroMobile.png"
        height="30rem"
        mobileHeight="15rem"
        overlay={true}
      />

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {/* Header con Stats */}
          {hasFavorites && (
            <section className={styles.statsSection}>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <HiHeart className={styles.heartIcon} />
                  </div>
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>{favoritesCount}</div>
                    <div className={styles.statLabel}>Recetas Guardadas</div>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <span className={styles.globeIcon}>🌍</span>
                  </div>
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>
                      {new Set(favorites.map((fav) => fav.strArea)).size}
                    </div>
                    <div className={styles.statLabel}>Cocinas Diferentes</div>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <span className={styles.categoryIcon}>📚</span>
                  </div>
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>
                      {new Set(favorites.map((fav) => fav.strCategory)).size}
                    </div>
                    <div className={styles.statLabel}>Categorías</div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Content Section */}
          <section className={styles.contentSection}>
            {hasFavorites ? (
              <FavoritesGrid favorites={favorites} />
            ) : (
              <EmptyFavorites />
            )}
          </section>

          {/* CTA Section */}
          {hasFavorites && (
            <section className={styles.ctaSection}>
              <div className={styles.ctaCard}>
                <div className={styles.ctaContent}>
                  <h3 className={styles.ctaTitle}>¿Buscas más inspiración?</h3>
                  <p className={styles.ctaText}>
                    Descubre nuevas recetas increíbles para agregar a tu
                    colección de favoritos
                  </p>
                  <button
                    className={styles.ctaButton}
                    onClick={() => navigate("/recetas")}
                  >
                    <span>Explorar Recetas</span>
                    <HiArrowRight className={styles.arrowIcon} />
                  </button>
                </div>
                <div className={styles.ctaDecoration}></div>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
