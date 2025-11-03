// src/components/SearchBar/SearchBar.jsx
import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Buscar recetas, ingredientes...",
}) {
  const [isFocused, setIsFocused] = useState(false);

  const clearSearch = () => {
    onChange({ target: { value: "" } });
  };

  return (
    <div className={`${styles.searchBar} ${isFocused ? styles.focused : ""}`}>
      <div className={styles.searchIcon}>
        <HiMagnifyingGlass size={20} />
      </div>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {value && (
        <button
          className={styles.clearButton}
          onClick={clearSearch}
          aria-label="Limpiar búsqueda"
        >
          <HiXMark size={16} />
        </button>
      )}

      <button className={styles.searchButton} aria-label="Buscar">
        <HiMagnifyingGlass size={18} />
      </button>
    </div>
  );
}
