// src/pages/AboutApp/components/Transparency/Transparency.jsx
import React from "react";
import styles from "./Transparency.module.css";
import { FaDatabase, FaHandshake, FaUsers, FaLightbulb } from "react-icons/fa";

const transparencyData = {
  disclosure: {
    title: "Transparencia Total",
    description:
      "Creemos en la honestidad como base de toda relación. Por eso queremos ser completamente transparentes sobre cómo funciona Appetito & Kitchen.",
    icon: <FaHandshake />,
  },
  sources: {
    title: "Nuestras Fuentes",
    description:
      "Todas las recetas son proporcionadas a través de TheMealDB, una API pública que recopila recetas auténticas de alrededor del mundo. No creamos las recetas, las organizamos y presentamos.",
    icon: <FaDatabase />,
    points: [
      "Recetas de TheMealDB API",
      "Contenido verificado y auténtico",
      "Crédito a las fuentes originales",
    ],
  },
  value: {
    title: "Nuestro Valor Agregado",
    description:
      "Donde realmente creamos valor es en la experiencia del usuario, organización inteligente y presentación atractiva que hace que cocinar sea más accesible y divertido.",
    icon: <FaLightbulb />,
    points: [
      "Experiencia de usuario intuitiva",
      "Diseño moderno y accesible",
      "Organización y búsqueda inteligente",
      "Presentación visual atractiva",
    ],
  },
  commitment: {
    title: "Nuestro Compromiso",
    description:
      "Seguiremos siendo transparentes sobre nuestras fuentes mientras trabajamos para hacer que la cocina internacional sea accesible para todos.",
    icon: <FaUsers />,
    points: ["Honestidad siempre", "Mejora continua", "Comunidad primero"],
  },
};

export default function Transparency() {
  return (
    <section className={styles.transparencySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.transparencyBadge}>
            <FaHandshake className={styles.badgeIcon} />
            Transparencia
          </div>
          <h2 className={styles.sectionTitle}>
            Honestidad en Cada Ingrediente
          </h2>
          <p className={styles.sectionSubtitle}>
            Creemos que las mejores relaciones se construyen con confianza y
            claridad
          </p>
        </div>

        <div className={styles.transparencyGrid}>
          {/* Disclosure Card */}
          <div className={styles.disclosureCard}>
            <div className={styles.disclosureIcon}>
              {transparencyData.disclosure.icon}
            </div>
            <h3 className={styles.disclosureTitle}>
              {transparencyData.disclosure.title}
            </h3>
            <p className={styles.disclosureDescription}>
              {transparencyData.disclosure.description}
            </p>
          </div>

          {/* Sources Card */}
          <div className={styles.sourceCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                {transparencyData.sources.icon}
              </div>
              <h3 className={styles.cardTitle}>
                {transparencyData.sources.title}
              </h3>
            </div>
            <p className={styles.cardDescription}>
              {transparencyData.sources.description}
            </p>
            <div className={styles.pointsList}>
              {transparencyData.sources.points.map((point, index) => (
                <div key={index} className={styles.pointItem}>
                  <div className={styles.pointCheck}></div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className={styles.apiBadge}>
              <FaDatabase className={styles.apiIcon} />
              TheMealDB API
            </div>
          </div>

          {/* Value Card */}
          <div className={styles.valueCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                {transparencyData.value.icon}
              </div>
              <h3 className={styles.cardTitle}>
                {transparencyData.value.title}
              </h3>
            </div>
            <p className={styles.cardDescription}>
              {transparencyData.value.description}
            </p>
            <div className={styles.valuePoints}>
              {transparencyData.value.points.map((point, index) => (
                <div key={index} className={styles.valuePoint}>
                  <div className={styles.valueNumber}>{index + 1}</div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Card */}
          <div className={styles.commitmentCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                {transparencyData.commitment.icon}
              </div>
              <h3 className={styles.cardTitle}>
                {transparencyData.commitment.title}
              </h3>
            </div>
            <p className={styles.cardDescription}>
              {transparencyData.commitment.description}
            </p>
            <div className={styles.commitmentList}>
              {transparencyData.commitment.points.map((point, index) => (
                <div key={index} className={styles.commitmentItem}>
                  <div className={styles.commitmentIcon}>✓</div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.transparencyPromise}>
          <div className={styles.promiseContent}>
            <h3>Nuestra Promesa de Transparencia</h3>
            <p>
              Siempre seremos claros sobre lo que hacemos y cómo lo hacemos.
              Creemos que esta honestidad nos permite construir una relación de
              confianza duradera con nuestra comunidad.
            </p>
            <div className={styles.promiseSignature}>
              <strong>El equipo de Appetito & Kitchen</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
