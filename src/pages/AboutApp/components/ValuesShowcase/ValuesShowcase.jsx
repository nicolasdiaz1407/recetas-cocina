// src/pages/AboutApp/components/ValuesShowcase/ValuesShowcase.jsx
import React from "react";
import styles from "./ValuesShowcase.module.css";
import {
  FaShieldAlt,
  FaUniversalAccess,
  FaLightbulb,
  FaUsers,
  FaStar,
  FaHandshake,
} from "react-icons/fa";

const valuesData = [
  {
    icon: <FaShieldAlt />,
    title: "Autenticidad",
    description:
      "Cada receta representa tradiciones culinarias reales. Respetamos y honramos los orígenes de cada plato.",
    color: "#AD9A65",
    principles: [
      "Tradiciones verificadas",
      "Orígenes respetados",
      "Recetas auténticas",
    ],
  },
  {
    icon: <FaUniversalAccess />,
    title: "Accesibilidad",
    description:
      "Creemos que la buena comida debe ser para todos. Diseñamos experiencias intuitivas para todos los niveles culinarios.",
    color: "#927C50",
    principles: [
      "Interfaz intuitiva",
      "Para todos los niveles",
      "Sin barreras",
    ],
  },
  {
    icon: <FaLightbulb />,
    title: "Innovación",
    description:
      "Unimos tradición y tecnología para crear experiencias culinarias que inspiran y facilitan la cocina moderna.",
    color: "#04091E",
    principles: [
      "Tecnología útil",
      "Experiencias modernas",
      "Siempre mejorando",
    ],
  },
  {
    icon: <FaUsers />,
    title: "Comunidad",
    description:
      "Más que una plataforma, somos una familia de amantes de la cocina que comparten, aprenden y crecen juntos.",
    color: "#6e6e6e",
    principles: [
      "Compartir experiencias",
      "Aprendizaje colectivo",
      "Apoyo mutuo",
    ],
  },
  {
    icon: <FaStar />,
    title: "Calidad",
    description:
      "Cada aspecto de nuestra plataforma refleja nuestro compromiso con la excelencia y la atención al detalle.",
    color: "#AD9A65",
    principles: [
      "Contenido verificado",
      "Experiencia premium",
      "Detalles cuidados",
    ],
  },
  {
    icon: <FaHandshake />,
    title: "Transparencia",
    description:
      "Creemos en relaciones honestas. Siempre seremos claros sobre nuestras fuentes y nuestro propósito.",
    color: "#927C50",
    principles: ["Honestidad total", "Fuentes claras", "Comunicación abierta"],
  },
];

export default function ValuesShowcase() {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          <p className={styles.sectionSubtitle}>
            Los principios que guían cada decisión y definen nuestra esencia
            como Appetito & Kitchen
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {valuesData.map((value, index) => (
            <div
              key={value.title}
              className={styles.valueCard}
              style={{
                animationDelay: `${index * 0.1}s`,
                "--value-color": value.color,
              }}
            >
              <div className={styles.cardVisual}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <div
                  className={styles.colorAccent}
                  style={{ backgroundColor: value.color }}
                ></div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>

                <div className={styles.principlesList}>
                  {value.principles.map((principle, idx) => (
                    <span key={idx} className={styles.principle}>
                      {principle}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardHoverEffect}></div>
            </div>
          ))}
        </div>

        <div className={styles.valuesConclusion}>
          <div className={styles.conclusionContent}>
            <h3>Valores que se Cocinan con Amor</h3>
            <p>
              Estos no son solo principios escritos; son el ingrediente secreto
              en cada receta que compartimos, en cada función que desarrollamos
              y en cada interacción con nuestra comunidad. Son nuestro
              compromiso contigo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
