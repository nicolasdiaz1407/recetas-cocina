// src/components/ui/ModalPanel/ModalPanel.jsx
import React, { useRef, useEffect } from "react";
import styles from "./ModalPanel.module.css";

const ModalPanel = ({
  title,
  onClose,
  children,
  closeButton = true,
  fullWidthOnMobile = true,
  className = "",
}) => {
  const modalContentRef = useRef(null);

  // Bloquear scroll del body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Manejar el scroll para evitar propagación
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const isAtTop = scrollTop === 0;
    const isAtBottom = scrollHeight - scrollTop === clientHeight;

    if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.modalPanelOverlay} onClick={onClose}>
      <div
        ref={modalContentRef}
        className={`${styles.modalPanelContent} ${
          fullWidthOnMobile ? styles.fullWidthMobile : ""
        } ${className}`}
        onClick={(e) => e.stopPropagation()}
        onWheel={handleScroll}
      >
        {closeButton && (
          <button
            className={styles.modalPanelCloseBtn}
            onClick={onClose}
            aria-label="Cerrar panel"
          >
            &times;
          </button>
        )}
        {title && <h2 className={styles.modalPanelTitle}>{title}</h2>}
        <div className={styles.modalPanelScrollContainer}>{children}</div>
      </div>
    </div>
  );
};

export default ModalPanel;
