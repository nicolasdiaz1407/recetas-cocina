// src/components/Footer/Footer.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  HiHome,
  HiBookOpen,
  HiHeart,
  HiInformationCircle,
  HiSparkles,
  HiGlobeAlt,
  HiFire,
  HiCake,
} from "react-icons/hi2";

// Categorías populares con iconos
const POPULAR_CATEGORIES = [
  { name: "Postres", apiName: "Dessert", icon: <HiCake /> },
  { name: "Carnes", apiName: "Beef", icon: <HiFire /> },
  { name: "Pollo", apiName: "Chicken", icon: "🍗" },
  { name: "Vegetariano", apiName: "Vegetarian", icon: "🥦" },
  { name: "Pasta", apiName: "Pasta", icon: "🍝" },
  { name: "Mariscos", apiName: "Seafood", icon: "🦐" },
];

// Cocinas destacadas con iconos
const FEATURED_CUISINES = [
  { name: "Italiana", apiName: "Italian", icon: "🇮🇹" },
  { name: "Mexicana", apiName: "Mexican", icon: "🇲🇽" },
  { name: "Japonesa", apiName: "Japanese", icon: "🇯🇵" },
  { name: "India", apiName: "Indian", icon: "🇮🇳" },
  { name: "Francesa", apiName: "French", icon: "🇫🇷" },
  { name: "China", apiName: "Chinese", icon: "🇨🇳" },
];

// Stats del proyecto
const PROJECT_STATS = [
  { label: "Recetas", value: "300+", icon: <HiBookOpen /> },
  { label: "Cocinas", value: "30+", icon: <HiGlobeAlt /> },
  { label: "Categorías", value: "14", icon: <HiSparkles /> },
];

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleCategoryClick = (categoryApiName) => {
    navigate(`/recetas?categoria=${encodeURIComponent(categoryApiName)}`);
  };

  const handleCuisineClick = (cuisineApiName) => {
    navigate(`/recetas?area=${encodeURIComponent(cuisineApiName)}`);
  };

  return (
    <footer className={styles.footer}>
      {/* Banner de stats */}
      <div className={styles.statsBanner}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {PROJECT_STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={styles.statItem}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statContent}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección principal del footer */}
      <div className={styles.footerMain}>
        <div className={styles.container}>
          {/* Columna 1: Branding premium */}
          <div className={styles.brandColumn}>
            <div className={styles.logoWrapper}>
              <div className={styles.logo}>
                <img src="Logo.png" alt="Appetito & Kitchen" />
              </div>
              <span className={styles.brandName}>Appetito & Kitchen</span>
            </div>

            <p className={styles.brandDescription}>
              Descubre el arte de la cocina con recetas cuidadosamente
              seleccionadas de todo el mundo. Donde cada plato cuenta una
              historia.
            </p>

            {/* Project badge elegante */}
            <div className={styles.projectBadge}>
              <HiSparkles className={styles.badgeIcon} />
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>Proyecto Portfolio</span>
                <span className={styles.badgeSubtitle}>
                  React + TheMealDB API
                </span>
              </div>
            </div>
          </div>

          {/* Contenedor para las columnas de enlaces */}
          <div className={styles.linksContainer}>
            {/* Columna 1: Navegación rápida */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>
                <HiHome className={styles.titleIcon} />
                Navegación
              </h3>
              <ul className={styles.linkList}>
                <li>
                  <Link to="/" className={styles.footerLink}>
                    <div className={styles.linkIcon}>
                      <HiHome size={16} />
                    </div>
                    <span>Inicio</span>
                  </Link>
                </li>
                <li>
                  <Link to="/recetas" className={styles.footerLink}>
                    <div className={styles.linkIcon}>
                      <HiBookOpen size={16} />
                    </div>
                    <span>Explorar Recetas</span>
                  </Link>
                </li>
                <li>
                  <Link to="/categorias" className={styles.footerLink}>
                    <div className={styles.linkIcon}>
                      <HiSparkles size={16} />
                    </div>
                    <span>Todas las Categorías</span>
                  </Link>
                </li>
                <li>
                  <Link to="/favoritos" className={styles.footerLink}>
                    <div className={styles.linkIcon}>
                      <HiHeart size={16} />
                    </div>
                    <span>Mis Favoritos</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Grupo de columnas para móviles: Populares + Cocina Internacional */}
            <div className={styles.mobileColumns}>
              {/* Columna 2: Categorías populares */}
              <div className={styles.column}>
                <h3 className={styles.columnTitle}>
                  <HiFire className={styles.titleIcon} />
                  Populares
                </h3>
                <ul className={styles.linkList}>
                  {POPULAR_CATEGORIES.map((category) => (
                    <li key={category.apiName}>
                      <button
                        onClick={() => handleCategoryClick(category.apiName)}
                        className={styles.footerLink}
                      >
                        <div className={styles.linkIcon}>
                          {typeof category.icon === "string" ? (
                            <span className={styles.emojiIcon}>
                              {category.icon}
                            </span>
                          ) : (
                            category.icon
                          )}
                        </div>
                        <span>{category.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Columna 3: Cocinas internacionales */}
              <div className={styles.column}>
                <h3 className={styles.columnTitle}>
                  <HiGlobeAlt className={styles.titleIcon} />
                  Cocina Internacional
                </h3>
                <ul className={styles.linkList}>
                  {FEATURED_CUISINES.map((cuisine) => (
                    <li key={cuisine.apiName}>
                      <button
                        onClick={() => handleCuisineClick(cuisine.apiName)}
                        className={styles.footerLink}
                      >
                        <div className={styles.linkIcon}>
                          <span className={styles.flagIcon}>
                            {cuisine.icon}
                          </span>
                        </div>
                        <span>{cuisine.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>
                &copy; {currentYear} <strong>Appetito & Kitchen</strong>.
                <span className={styles.projectNote}>
                  Proyecto demostrativo para portfolio.
                </span>
              </p>
            </div>

            <div className={styles.legalLinks}>
              <Link to="/about" className={styles.legalLink}>
                <HiInformationCircle size={16} />
                <span>Sobre el Proyecto</span>
              </Link>
              <div className={styles.legalDivider}>•</div>
              <Link to="/contacto" className={styles.legalLink}>
                <span>Contacto</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
