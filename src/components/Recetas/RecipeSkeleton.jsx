// src/components/Recetas/RecipeSkeleton.jsx
import styles from "./RecipeSkeleton.module.css";

export default function RecipeSkeleton() {
  return (
    <article className={styles.skeletonCard}>
      {/* Image area */}
      <div className={styles.imageSkeleton}></div>

      {/* Content area */}
      <div className={styles.contentSkeleton}>
        <div className={styles.titleSkeleton}></div>
        <div className={styles.metaSkeleton}>
          <div className={styles.metaItemSkeleton}></div>
          <div className={styles.metaItemSkeleton}></div>
        </div>
        <div className={styles.descriptionSkeleton}></div>
        <div className={styles.buttonSkeleton}></div>
      </div>
    </article>
  );
}
