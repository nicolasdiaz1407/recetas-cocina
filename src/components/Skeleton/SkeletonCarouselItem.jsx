// src/components/ui/Skeleton/SkeletonCarouselItem.jsx
import React from "react";
import styles from "./SkeletonCarouselItem.module.css";

export default function SkeletonCarouselItem() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonMeta}>
          <div className={styles.skeletonTime}></div>
          <div className={styles.skeletonDifficulty}></div>
        </div>
        <div className={styles.skeletonDescription}></div>
        <div className={styles.skeletonButton}></div>
      </div>
    </div>
  );
}
