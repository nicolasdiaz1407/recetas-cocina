// src/pages/About/components/FeaturesShowcase/FeaturesShowcase.jsx
import React from "react";
import styles from "./FeaturesShowcase.module.css";
import {
  FaCheckCircle,
  FaMobileAlt,
  FaSearch,
  FaBolt,
  FaEye,
  FaMousePointer,
  FaClock,
  FaShieldAlt,
  FaSyncAlt,
  FaLayerGroup,
  FaRocket,
  FaUserCheck,
  FaPaintBrush,
} from "react-icons/fa";

const featureGroups = [
  {
    title: "Experiencia de Usuario",
    icon: <FaUserCheck />,
    gradient: "linear-gradient(135deg, #AD9A65 0%, #927C50 100%)",
    features: [
      {
        title: "Diseño 100% Responsive",
        description:
          "Enfoque mobile-first con breakpoints optimizados para todos los dispositivos",
        icon: <FaMobileAlt />,
        highlights: ["Mobile-first", "Tablet optimizado", "Desktop enhanced"],
      },
      {
        title: "Interfaz Intuitiva",
        description:
          "Patrones de diseño consistentes y navegación fluida basada en mejores prácticas UX",
        icon: <FaMousePointer />,
        highlights: [
          "Patrones consistentes",
          "Navegación fluida",
          "Feedback visual",
        ],
      },
      {
        title: "Estados de Carga Elegantes",
        description:
          "Skeletons, spinners y transiciones que mejoran la percepción de performance",
        icon: <FaClock />,
        highlights: [
          "Skeleton screens",
          "Transiciones suaves",
          "Feedback inmediato",
        ],
      },
    ],
  },
  {
    title: "Funcionalidades Avanzadas",
    icon: <FaRocket />,
    gradient: "linear-gradient(135deg, #04091E 0%, #1a1f3c 100%)",
    features: [
      {
        title: "Búsqueda Inteligente",
        description:
          "Búsqueda en tiempo real con debounce optimizado y sugerencias contextuales",
        icon: <FaSearch />,
        highlights: [
          "Tiempo real",
          "Debounce optimizado",
          "Búsqueda contextual",
        ],
      },
      {
        title: "Sistema de Filtros Unificado",
        description:
          "Filtros combinables por categoría, región y búsqueda con sincronización de estado",
        icon: <FaLayerGroup />,
        highlights: [
          "Filtros combinables",
          "Sincronización estado",
          "URLs compartibles",
        ],
      },
      {
        title: "Sincronización URL ↔ Estado",
        description:
          "URLs persistentes que mantienen el estado de la aplicación para compartir y bookmarking",
        icon: <FaSyncAlt />,
        highlights: [
          "Estado persistente",
          "URLs compartibles",
          "Browser navigation",
        ],
      },
    ],
  },
  {
    title: "Performance & Optimización",
    icon: <FaBolt />,
    gradient: "linear-gradient(135deg, #927C50 0%, #7a6843 100%)",
    features: [
      {
        title: "Carga Optimizada",
        description:
          "Lazy loading de imágenes, code splitting y carga progresiva de componentes",
        icon: <FaBolt />,
        highlights: ["Lazy loading", "Code splitting", "Carga progresiva"],
      },
      {
        title: "Cache Inteligente",
        description:
          "Sistema de cache para respuestas API y reutilización eficiente de recursos",
        icon: <FaShieldAlt />,
        highlights: ["Cache API", "Reutilización recursos", "Offline ready"],
      },
      {
        title: "Accesibilidad Integral",
        description:
          "ARIA labels, navegación por teclado y semántica HTML para inclusividad total",
        icon: <FaPaintBrush />,
        highlights: ["ARIA labels", "Navegación teclado", "Semántica HTML"],
      },
    ],
  },
];

export default function FeaturesShowcase() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Innovación en UX/UI</h2>
          <p className={styles.sectionSubtitle}>
            Características diseñadas meticulosamente para una experiencia de
            usuario excepcional
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {featureGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className={styles.featureGroup}
              style={{
                animationDelay: `${groupIndex * 0.2}s`,
                "--group-gradient": group.gradient,
              }}
            >
              <div className={styles.groupHeader}>
                <div className={styles.groupIconWrapper}>{group.icon}</div>
                <div className={styles.groupInfo}>
                  <h3 className={styles.groupTitle}>{group.title}</h3>
                  <div className={styles.groupLine}></div>
                </div>
              </div>

              <div className={styles.featuresList}>
                {group.features.map((feature, featureIndex) => (
                  <div
                    key={feature.title}
                    className={styles.featureItem}
                    style={{
                      animationDelay: `${
                        groupIndex * 0.2 + featureIndex * 0.1
                      }s`,
                    }}
                  >
                    <div className={styles.featureMain}>
                      <div className={styles.featureIconWrapper}>
                        {feature.icon}
                      </div>
                      <div className={styles.featureContent}>
                        <h4 className={styles.featureTitle}>{feature.title}</h4>
                        <p className={styles.featureDescription}>
                          {feature.description}
                        </p>
                        <div className={styles.featureHighlights}>
                          {feature.highlights.map((highlight, idx) => (
                            <span key={idx} className={styles.highlight}>
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      <FaCheckCircle className={styles.checkIcon} />
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
