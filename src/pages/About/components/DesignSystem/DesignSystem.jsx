// src/pages/About/components/DesignSystem/DesignSystem.jsx
import React from "react";
import styles from "./DesignSystem.module.css";
import {
  FaPalette,
  FaFont,
  FaCube,
  FaMobileAlt,
  FaBolt,
  FaEye,
  FaCheckCircle,
  FaSwatchbook,
  FaTextHeight,
  FaShapes,
} from "react-icons/fa";

const colorPalette = [
  {
    name: "Azul Oscuro",
    value: "#04091E",
    variable: "--color-text-dark",
    usage: "Texto principal, fondos oscuros",
    contrast: "AAA",
  },
  {
    name: "Dorado Principal",
    value: "#AD9A65",
    variable: "--color-accent-primary",
    usage: "Botones, acentos, estados activos",
    contrast: "AA",
  },
  {
    name: "Dorado Secundario",
    value: "#927C50",
    variable: "--color-accent-secondary",
    usage: "Hover states, elementos secundarios",
    contrast: "AA",
  },
  {
    name: "Fondo Claro",
    value: "#F7F3E9",
    variable: "--color-bg-light",
    usage: "Fondos de secciones, cards",
    contrast: "AAA",
  },
  {
    name: "Texto",
    value: "#3A3A3A",
    variable: "--color-text",
    usage: "Texto de cuerpo principal",
    contrast: "AAA",
  },
  {
    name: "Texto Claro",
    value: "#6E6E6E",
    variable: "--color-text-light",
    usage: "Texto secundario, descripciones",
    contrast: "AA",
  },
];

const typographyScale = [
  {
    name: "H1 Hero",
    size: "3.5rem",
    weight: "500",
    example: "Títulos principales impactantes",
    icon: <FaTextHeight />,
  },
  {
    name: "H2 Sección",
    size: "2.5rem",
    weight: "600",
    example: "Encabezados de sección destacados",
    icon: <FaFont />,
  },
  {
    name: "H3 Subsección",
    size: "1.8rem",
    weight: "600",
    example: "Subtítulos y categorías",
    icon: <FaTextHeight />,
  },
  {
    name: "Body Large",
    size: "1.2rem",
    weight: "400",
    example: "Texto de cuerpo grande para lectura",
    icon: <FaFont />,
  },
  {
    name: "Body Regular",
    size: "1rem",
    weight: "400",
    example: "Texto principal y contenido",
    icon: <FaTextHeight />,
  },
  {
    name: "Body Small",
    size: "0.9rem",
    weight: "400",
    example: "Texto secundario y detalles",
    icon: <FaFont />,
  },
];

const designPrinciples = [
  {
    title: "Consistencia Visual",
    description:
      "Patrones de diseño uniformes en todos los componentes y páginas para una experiencia cohesiva",
    icon: <FaCube />,
    gradient: "linear-gradient(135deg, #AD9A65 0%, #927C50 100%)",
  },
  {
    title: "Mobile-First",
    description:
      "Diseño que prioriza dispositivos móviles y se escala elegantemente a pantallas grandes",
    icon: <FaMobileAlt />,
    gradient: "linear-gradient(135deg, #04091E 0%, #1a1f3c 100%)",
  },
  {
    title: "Performance First",
    description:
      "Optimización continua para la mejor experiencia de usuario y tiempos de carga mínimos",
    icon: <FaBolt />,
    gradient: "linear-gradient(135deg, #927C50 0%, #7a6843 100%)",
  },
  {
    title: "Accesibilidad",
    description:
      "Diseño inclusivo que considera todos los usuarios y capacidades diferentes",
    icon: <FaEye />,
    gradient: "linear-gradient(135deg, #6e6e6e 0%, #5a5a5a 100%)",
  },
];

export default function DesignSystem() {
  return (
    <section className={styles.designSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Sistema de Diseño</h2>
          <p className={styles.sectionSubtitle}>
            Fundamentos visuales que definen la identidad única de Appetito &
            Kitchen
          </p>
        </div>

        {/* Paleta de Colores Mejorada */}
        <div className={styles.sectionBlock}>
          <div className={styles.blockHeader}>
            <div className={styles.blockIconWrapper}>
              <FaPalette className={styles.blockIcon} />
            </div>
            <h3 className={styles.blockTitle}>Paleta de Colores</h3>
          </div>
          <div className={styles.colorsGrid}>
            {colorPalette.map((color, index) => (
              <div
                key={color.name}
                className={styles.colorCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: color.value }}
                >
                  <span className={styles.colorValue}>{color.value}</span>
                  <div className={styles.contrastBadge}>{color.contrast}</div>
                </div>
                <div className={styles.colorInfo}>
                  <h4 className={styles.colorName}>{color.name}</h4>
                  <code className={styles.colorVariable}>{color.variable}</code>
                  <p className={styles.colorUsage}>{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Escala Tipográfica Mejorada */}
        <div className={styles.sectionBlock}>
          <div className={styles.blockHeader}>
            <div className={styles.blockIconWrapper}>
              <FaFont className={styles.blockIcon} />
            </div>
            <h3 className={styles.blockTitle}>Escala Tipográfica</h3>
          </div>
          <div className={styles.typographyScale}>
            {typographyScale.map((type, index) => (
              <div
                key={type.name}
                className={styles.typeItem}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className={styles.typeHeader}>
                  <div className={styles.typeIcon}>{type.icon}</div>
                  <div className={styles.typeInfo}>
                    <span className={styles.typeName}>{type.name}</span>
                    <span className={styles.typeSpecs}>
                      {type.size} • {type.weight}
                    </span>
                  </div>
                </div>
                <p
                  className={styles.typeExample}
                  style={{
                    fontSize: type.size,
                    fontWeight: type.weight,
                  }}
                >
                  {type.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Principios de Diseño Mejorados */}
        <div className={styles.sectionBlock}>
          <div className={styles.blockHeader}>
            <div className={styles.blockIconWrapper}>
              <FaShapes className={styles.blockIcon} />
            </div>
            <h3 className={styles.blockTitle}>Principios de Diseño</h3>
          </div>
          <div className={styles.designPrinciples}>
            {designPrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className={styles.principleCard}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  "--principle-gradient": principle.gradient,
                }}
              >
                <div className={styles.principleIconWrapper}>
                  {principle.icon}
                </div>
                <h4 className={styles.principleTitle}>{principle.title}</h4>
                <p className={styles.principleDescription}>
                  {principle.description}
                </p>
                <FaCheckCircle className={styles.principleCheck} />
              </div>
            ))}
          </div>
        </div>

        {/* Sistema de Componentes */}
        <div className={styles.sectionBlock}>
          <div className={styles.blockHeader}>
            <div className={styles.blockIconWrapper}>
              <FaSwatchbook className={styles.blockIcon} />
            </div>
            <h3 className={styles.blockTitle}>Sistema de Componentes</h3>
          </div>
          <div className={styles.componentsGrid}>
            <div className={styles.componentItem}>
              <div
                className={styles.componentPreview}
                style={{ backgroundColor: "#AD9A65" }}
              ></div>
              <span className={styles.componentLabel}>Botones Primarios</span>
            </div>
            <div className={styles.componentItem}>
              <div
                className={styles.componentPreview}
                style={{
                  backgroundColor: "#F7F3E9",
                  border: "2px solid #AD9A65",
                }}
              ></div>
              <span className={styles.componentLabel}>Cards</span>
            </div>
            <div className={styles.componentItem}>
              <div
                className={styles.componentPreview}
                style={{ backgroundColor: "#04091E" }}
              ></div>
              <span className={styles.componentLabel}>Header/Navigation</span>
            </div>
            <div className={styles.componentItem}>
              <div
                className={styles.componentPreview}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #DCD6C5",
                }}
              ></div>
              <span className={styles.componentLabel}>Formularios</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
