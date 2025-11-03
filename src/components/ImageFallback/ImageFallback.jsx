// src/components/ui/ImageFallback/ImageFallback.jsx
import { useState } from "react";
import { FaImage } from "react-icons/fa";
import fixImageUrl from "../../utils/fixImageUrl";
import styles from "./ImageFallback.module.css";

export default function ImageFallback({
  src,
  alt,
  className = "",
  loading = "lazy",
  fallbackText = "Imagen no disponible",
  size = "", // 'small', 'large', 'carousel'
  ...props
}) {
  const [imageError, setImageError] = useState(false);

  // ✅ normalizamos la URL antes de usarla
  const safeSrc = src ? fixImageUrl(src) : "";

  if (!safeSrc) {
    return (
      <div
        className={`${styles.imageFallback} ${className} ${
          size ? styles[size] : ""
        }`}
        role="img"
        aria-label={alt || fallbackText}
        {...props}
      >
        <div className={styles.imageFallbackContent}>
          <FaImage className={styles.imageFallbackIcon} />
          <span className={styles.imageFallbackText}>{fallbackText}</span>
        </div>
      </div>
    );
  }

  const handleError = () => {
    if (!safeSrc?.includes("fallback-image") && !imageError) {
      setImageError(true);
    }
  };

  if (imageError) {
    return (
      <div
        className={`${styles.imageFallback} ${className} ${
          size ? styles[size] : ""
        }`}
        role="img"
        aria-label={alt || fallbackText}
        {...props}
      >
        <div className={styles.imageFallbackContent}>
          <FaImage className={styles.imageFallbackIcon} />
          <span className={styles.imageFallbackText}>{fallbackText}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={safeSrc}
      alt={alt}
      onError={handleError}
      loading={loading}
      decoding="async"
      className={`${styles.imageFallbackImg} ${className}`}
      {...props}
    />
  );
}
