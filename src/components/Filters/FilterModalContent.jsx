// src/components/Filters/FilterModalContent.jsx
import React from "react";
import styles from "./FilterModalContent.module.css";

export default function FilterModalContent({
  options = [],
  selectedOption,
  onChange,
  title,
  onClose,
}) {
  return (
    <div className={styles.filterModalContent}>
      <h3 className={styles.modalTitle}>{title}</h3>

      <div className={styles.optionsGrid}>
        {options.map((opt) => (
          <button
            key={opt.value}
            className={`${styles.optionButton} ${
              selectedOption === opt.value ? styles.optionActive : ""
            }`}
            onClick={() => {
              onChange(opt.value);
              onClose();
            }}
          >
            <span className={styles.optionIcon}>{opt.icon}</span>
            <span className={styles.optionLabel}>{opt.label}</span>
          </button>
        ))}
      </div>

      {selectedOption && (
        <div className={styles.modalActions}>
          <button
            className={styles.clearButton}
            onClick={() => {
              onChange("");
              onClose();
            }}
          >
            Limpiar filtro
          </button>
        </div>
      )}
    </div>
  );
}
