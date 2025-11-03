// src/components/Filters/Filters.jsx (COMPLETAMENTE ACTUALIZADO)
import React, { useState } from "react";
import styles from "./Filters.module.css";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import ModalPanel from "../ModalPanel/ModalPanel";
import FilterModalContent from "./FilterModalContent";

export default function Filters({
  options = [],
  selectedOption,
  onChange,
  filterType = "default",
}) {
  const [showModal, setShowModal] = useState(false);

  // Determinar el texto del botón según el tipo de filtro
  const getButtonText = () => {
    switch (filterType) {
      case "category":
        return "Categorías";
      case "area":
        return "Regiones";
      default:
        return "Filtros";
    }
  };

  // Determinar el título del modal
  const getModalTitle = () => {
    switch (filterType) {
      case "category":
        return "Filtrar por categoría";
      case "area":
        return "Filtrar por región";
      default:
        return "Filtrar opciones";
    }
  };

  // Obtener la opción seleccionada actualmente
  const getSelectedOptionLabel = () => {
    if (!selectedOption) return null;
    const selected = options.find((opt) => opt.value === selectedOption);
    return selected ? selected.label : null;
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOptionChange = (value) => {
    onChange(value);
  };

  return (
    <>
      <button
        className={styles.filterButton}
        onClick={handleButtonClick}
        aria-label={`Abrir filtro de ${getButtonText()}`}
      >
        <HiAdjustmentsHorizontal size={18} />
        <span className={styles.buttonText}>{getButtonText()}</span>
        {getSelectedOptionLabel() && (
          <span className={styles.selectedIndicator}>
            {getSelectedOptionLabel()}
          </span>
        )}
        {selectedOption && <span className={styles.activeDot}></span>}
      </button>

      {showModal && (
        <ModalPanel
          title={getModalTitle()}
          onClose={handleCloseModal}
          fullWidthOnMobile={true}
        >
          <FilterModalContent
            options={options}
            selectedOption={selectedOption}
            onChange={handleOptionChange}
            title={getModalTitle()}
            onClose={handleCloseModal}
          />
        </ModalPanel>
      )}
    </>
  );
}
