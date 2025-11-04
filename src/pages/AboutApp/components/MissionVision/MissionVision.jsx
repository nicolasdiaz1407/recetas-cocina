// src/pages/AboutApp/components/MissionVision/MissionVision.jsx
import React from "react";
import styles from "./MissionVision.module.css";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

const missionData = {
  mission: {
    icon: <FaBullseye />,
    title: "Nuestra Misión",
    description:
      "Democratizar el acceso a recetas auténticas de todo el mundo, haciendo que la cocina internacional sea accesible para todos los hogares, sin importar su experiencia culinaria.",
    highlights: [
      "Recetas accesibles para todos",
      "Cocina internacional en tu hogar",
      "Aprendizaje continuo y divertido",
    ],
  },
  vision: {
    icon: <FaEye />,
    title: "Nuestra Visión",
    description:
      "Ser el puente digital que conecta a las personas con las tradiciones culinarias globales, creando una comunidad donde cada comida cuenta una historia y cada cocinero encuentra inspiración.",
    highlights: [
      "Comunidad culinaria global",
      "Preservar tradiciones gastronómicas",
      "Inspiración en cada receta",
    ],
  },
  passion: {
    icon: <FaHeart />,
    title: "Nuestra Pasión",
    description:
      "Creemos que cocinar es un acto de amor y compartir. Nos apasiona crear experiencias que transformen ingredientes en momentos memorables y recetas en recuerdos.",
    highlights: [
      "Cocinar con amor",
      "Compartir experiencias",
      "Crear momentos especiales",
    ],
  },
};

export default function MissionVision() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Lo que Nos Guía</h2>
          <p className={styles.sectionSubtitle}>
            Tres pilares fundamentales que definen cada aspecto de Appetito &
            Kitchen
          </p>
        </div>

        <div className={styles.missionGrid}>
          {Object.entries(missionData).map(([key, item], index) => (
            <div
              key={key}
              className={styles.missionCard}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>

              <p className={styles.cardDescription}>{item.description}</p>

              <div className={styles.highlights}>
                {item.highlights.map((highlight, idx) => (
                  <div key={idx} className={styles.highlightItem}>
                    <div className={styles.highlightDot}></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className={styles.cardDecoration}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
