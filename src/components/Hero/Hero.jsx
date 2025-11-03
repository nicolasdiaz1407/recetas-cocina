import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import { HiOutlineChevronRight } from "react-icons/hi2";

export default function Hero({
  title,
  subtitle,
  breadcrumbItems, // Nueva prop para breadcrumb estructurado
  backgroundDesktop = "/Hero.png",
  backgroundMobile = "/HeroMobile.png",
  height = "25rem",
  mobileHeight = "40rem",
  className = "",
  overlay = false,
  showBreadcrumb = true,
}) {
  const [bg, setBg] = useState(backgroundDesktop);
  const [currentHeight, setCurrentHeight] = useState(height);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBg(backgroundMobile);
        setCurrentHeight(mobileHeight || height);
      } else {
        setBg(backgroundDesktop);
        setCurrentHeight(height);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [backgroundDesktop, backgroundMobile, height, mobileHeight]);

  const handleImageError = () => {
    setImageError(true);
  };

  // Renderizar breadcrumb desde items
  const renderBreadcrumb = () => {
    if (!breadcrumbItems || !showBreadcrumb) return null;

    return (
      <nav className={styles.breadcrumb} aria-label="Migas de pan">
        {breadcrumbItems.map((item, index) => (
          <span key={index} className={styles.breadcrumbItem}>
            {item.path ? (
              <Link to={item.path} className={styles.breadcrumbLink}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.breadcrumbCurrent}>{item.label}</span>
            )}
            {index < breadcrumbItems.length - 1 && (
              <HiOutlineChevronRight className={styles.breadcrumbSeparator} />
            )}
          </span>
        ))}
      </nav>
    );
  };

  // Si hay error en la imagen, usar gradiente de fondo
  const backgroundStyle = imageError
    ? {
        background: `linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-secondary) 100%)`,
        minHeight: currentHeight,
        maxHeight: currentHeight,
      }
    : {
        backgroundImage: `url(${bg})`,
        minHeight: currentHeight,
        maxHeight: currentHeight,
      };

  return (
    <section className={`${styles.hero} ${className}`} style={backgroundStyle}>
      {/* Imagen de fondo oculta para preload y detección de error */}
      <img
        src={bg}
        alt=""
        style={{ display: "none" }}
        onError={handleImageError}
        onLoad={() => setImageError(false)}
      />

      {overlay && <div className={styles.overlay}></div>}
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.content_title}>{title}</h1>
        </div>

        {/* Línea decorativa 
        {(subtitle || breadcrumbItems) && (
          <div className={styles.content_line}></div>
        )}*/}

        {/* Renderizar breadcrumb o subtitle */}
        {breadcrumbItems
          ? renderBreadcrumb()
          : subtitle && <div className={styles.content_sub}>{subtitle}</div>}
      </div>
    </section>
  );
}
