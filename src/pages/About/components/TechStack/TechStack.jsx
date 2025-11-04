// src/pages/About/components/TechStack/TechStack.jsx
import React from "react";
import styles from "./TechStack.module.css";
import {
  FaCode,
  FaPalette,
  FaServer,
  FaTools,
  FaReact,
  FaBolt,
  FaRoute,
  FaCss3Alt,
  FaPalette as FaVariables,
  FaMobileAlt,
  FaGlobe,
  FaDatabase,
  FaPlug,
  FaBox,
  FaPaintBrush,
  FaGitAlt,
} from "react-icons/fa";

const techCategories = [
  {
    title: "Frontend",
    icon: <FaCode />,
    color: "#AD9A65",
    gradient: "linear-gradient(135deg, #AD9A65 0%, #927C50 100%)",
    technologies: [
      {
        name: "React 18",
        icon: <FaReact />,
        description: "Librería principal",
      },
      {
        name: "Vite",
        icon: <FaBolt />,
        description: "Build tool y dev server",
      },
      {
        name: "React Router",
        icon: <FaRoute />,
        description: "Navegación SPA",
      },
    ],
  },
  {
    title: "Estilos",
    icon: <FaPalette />,
    color: "#927C50",
    gradient: "linear-gradient(135deg, #927C50 0%, #7a6843 100%)",
    technologies: [
      {
        name: "CSS Modules",
        icon: <FaCss3Alt />,
        description: "Estilos scoped",
      },
      {
        name: "CSS Variables",
        icon: <FaVariables />,
        description: "Sistema de diseño",
      },
      {
        name: "Responsive Design",
        icon: <FaMobileAlt />,
        description: "Mobile-first",
      },
    ],
  },
  {
    title: "Datos & API",
    icon: <FaServer />,
    color: "#04091E",
    gradient: "linear-gradient(135deg, #04091E 0%, #1a1f3c 100%)",
    technologies: [
      {
        name: "TheMealDB API",
        icon: <FaGlobe />,
        description: "Fuente de datos",
      },
      {
        name: "Local Storage",
        icon: <FaDatabase />,
        description: "Persistencia local",
      },
      {
        name: "Hooks Personalizados",
        icon: <FaPlug />,
        description: "Lógica reutilizable",
      },
    ],
  },
  {
    title: "Herramientas",
    icon: <FaTools />,
    color: "#6e6e6e",
    gradient: "linear-gradient(135deg, #6e6e6e 0%, #5a5a5a 100%)",
    technologies: [
      {
        name: "React Icons",
        icon: <FaPaintBrush />,
        description: "Librería de iconos",
      },
      { name: "FontAwesome", icon: <FaBox />, description: "Iconografía" },
      {
        name: "Git & GitHub",
        icon: <FaGitAlt />,
        description: "Control de versiones",
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Tecnología & Arquitectura</h2>
          <p className={styles.sectionSubtitle}>
            Stack moderno cuidadosamente seleccionado para performance y
            mantenibilidad
          </p>
        </div>

        <div className={styles.techGrid}>
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className={styles.techCategory}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={styles.categoryHeader}
                style={{ "--category-gradient": category.gradient }}
              >
                <div className={styles.categoryIcon}>{category.icon}</div>
                <div className={styles.categoryInfo}>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <div className={styles.categoryLine}></div>
                </div>
              </div>

              <div className={styles.techList}>
                {category.technologies.map((tech) => (
                  <div key={tech.name} className={styles.techItem}>
                    <div className={styles.techIconWrapper}>{tech.icon}</div>
                    <div className={styles.techContent}>
                      <h4 className={styles.techName}>{tech.name}</h4>
                      <p className={styles.techDescription}>
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
