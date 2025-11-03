// src/components/ui/Carousel/Carousel.jsx
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SkeletonCarouselItem from "../Skeleton/SkeletonCarouselItem";
import styles from "./Carousel.module.css";

export const Carousel = ({
  items = [],
  itemsPerView = 4,
  isMobile = false,
  renderItem,
  ariaLabel = "Carrusel",
  loading = false,
  mobileItemsPerView = 2,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(items.length / itemsPerView);
  const maxIndex = Math.max(0, totalSlides - 1);

  useEffect(() => {
    setCurrentIndex(0);
  }, [items]);

  const avanzar = () => {
    if (isMobile || loading) return;
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const retroceder = () => {
    if (isMobile || loading) return;
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const getTransform = () => {
    const totalItems = items.length;
    if (totalItems <= itemsPerView) return "translateX(0)";

    const maxTranslate = ((totalItems - itemsPerView) / itemsPerView) * 100;
    const translateX = currentIndex * 100;
    const finalTranslate = Math.min(translateX, maxTranslate);

    return `translateX(-${finalTranslate}%)`;
  };

  const getCarouselClass = () => {
    if (isMobile) {
      switch (mobileItemsPerView) {
        case 1:
          return styles.mobileItems1;
        case 1.5:
          return styles.mobileItems15;
        case 2:
          return styles.mobileItems2;
        default:
          return styles.mobileItems2;
      }
    } else {
      switch (itemsPerView) {
        case 1:
          return styles.items1;
        case 2:
          return styles.items2;
        case 3:
          return styles.items3;
        case 4:
          return styles.items4;
        case 5:
          return styles.items5;
        default:
          return styles.items4;
      }
    }
  };

  return (
    <div
      className={`${styles.carousel} ${getCarouselClass()}`}
      role="region"
      aria-label={ariaLabel}
    >
      {!isMobile && !loading && (
        <button
          className={`${styles.carouselBtn} ${styles.prev}`}
          onClick={retroceder}
          disabled={currentIndex === 0}
          aria-label="Retroceder"
          aria-disabled={currentIndex === 0}
        >
          <FiChevronLeft />
        </button>
      )}

      <div className={styles.carouselViewport}>
        <div
          className={`${styles.carouselContent} ${styles.animated} ${
            loading ? styles.loading : ""
          }`}
          style={
            !isMobile && !loading ? { transform: getTransform() } : undefined
          }
          aria-live="polite"
        >
          {loading
            ? Array(itemsPerView)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className={styles.carouselItem}>
                    <SkeletonCarouselItem />
                  </div>
                ))
            : items.map((item, i) => (
                <div className={styles.carouselItem} key={item.idMeal || i}>
                  {renderItem(item)}
                </div>
              ))}
        </div>
      </div>

      {!isMobile && !loading && (
        <button
          className={`${styles.carouselBtn} ${styles.next}`}
          onClick={avanzar}
          disabled={currentIndex >= maxIndex}
          aria-label="Avanzar"
          aria-disabled={currentIndex >= maxIndex}
        >
          <FiChevronRight />
        </button>
      )}
    </div>
  );
};
