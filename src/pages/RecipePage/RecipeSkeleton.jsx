// src/components/RecipeDetail/RecipeSkeleton.jsx
import React from "react";
import styles from "../../components/RecipeDetail/RecipeDetail.module.css";

export default function RecipeSkeleton() {
  return (
    <div className={styles.container}>
      {/* Hero Image Skeleton */}
      <div className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <div className={styles.imageSkeleton}></div>
        </div>

        {/* Recipe Header Skeleton */}
        <div className={styles.recipeHeader}>
          <div className={styles.headerContent}>
            <div className={styles.titleSkeleton}></div>

            <div className={styles.metaGrid}>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className={styles.metaItemSkeleton}>
                  <div className={styles.metaIconSkeleton}></div>
                  <div className={styles.metaTextSkeleton}>
                    <div className={styles.metaLabelSkeleton}></div>
                    <div className={styles.metaValueSkeleton}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className={styles.contentTabs}>
        <div className={styles.tabNavigation}>
          <div className={styles.tabSkeleton}></div>
          <div className={styles.tabSkeleton}></div>
        </div>

        <div className={styles.tabContent}>
          <div className={styles.sectionTitleSkeleton}></div>

          {/* Ingredients Skeleton */}
          <div className={styles.ingredientsGrid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className={styles.ingredientCardSkeleton}>
                <div className={styles.ingredientContentSkeleton}>
                  <div className={styles.ingredientNameSkeleton}></div>
                  <div className={styles.ingredientMeasureSkeleton}></div>
                </div>
                <div className={styles.ingredientCheckboxSkeleton}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
