import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? styles.activeLink : undefined;

  return (
    <header className={styles.navigation}>
      <div className={styles.navContainer}>
        {/* Menú izquierdo (solo desktop) */}
        <nav
          className={`${styles.navMenu} ${styles.leftMenu} ${styles.desktopOnly}`}
        >
          <ul>
            <li>
              <NavLink to="/" end onClick={closeMenu} className={navLinkClass}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recetas"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Recetas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categorias"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Categorías
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Logo central */}
        <div className={styles.logoContainer}>
          <Link to="/" onClick={closeMenu}>
            <img src="Logo.png" alt="Recetas App" />
          </Link>
        </div>

        {/* Menú derecho (solo desktop) */}
        <nav
          className={`${styles.navMenu} ${styles.rightMenu} ${styles.desktopOnly}`}
        >
          <ul>
            <li>
              <NavLink
                to="/favoritos"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Favoritos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutApp"
                onClick={closeMenu}
                className={navLinkClass}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir/cerrar menú"
        >
          <span
            className={`${styles.burger} ${isMenuOpen ? styles.open : ""}`}
          ></span>
        </button>

        {/* Menú móvil desplegable */}
        <nav
          className={`${styles.navMenu} ${styles.mobileMenu} ${
            isMenuOpen ? styles.open : ""
          }`}
        >
          <ul>
            <li>
              <NavLink to="/" end onClick={closeMenu} className={navLinkClass}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recetas"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Recetas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categorias"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Categorías
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favoritos"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Favoritos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutApp"
                onClick={closeMenu}
                className={navLinkClass}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
