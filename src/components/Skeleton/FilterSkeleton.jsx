// src/components/ui/Skeleton/FilterSkeleton.jsx
import React from "react";
import styles from "./FilterSkeleton.module.css";

export default function FilterSkeleton({ isMobile = false }) {
  if (isMobile) {
    return (
      <div className={styles.mobileFilterSkeleton}>
        <div className={styles.skeletonButton}></div>
      </div>
    );
  }

  return (
    <div className={styles.desktopFilterSkeleton}>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className={styles.skeletonFilterItem}></div>
      ))}
    </div>
  );
}
