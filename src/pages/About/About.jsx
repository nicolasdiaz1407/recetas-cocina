// src/pages/About/About.jsx
import React from "react";
import Hero from "../../components/Hero/Hero";
import TechStack from "./components/TechStack/TechStack";
import FeaturesShowcase from "./components/FeaturesShowcase/FeaturesShowcase";
import DesignSystem from "./components/DesignSystem/DesignSystem";
import styles from "./About.module.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaRocket } from "react-icons/fa";

export default function About() {
  const breadcrumbItems = [
    { path: "/", label: "Inicio" },
    { label: "Sobre el Proyecto" },
  ];

  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <Hero
        title="Sobre el Proyecto"
        subtitle="Appetito & Kitchen - Donde la gastronomía encuentra la tecnología"
        breadcrumbItems={breadcrumbItems}
        backgroundDesktop="/Hero.png"
        backgroundMobile="/HeroMobile.png"
        height="30rem"
        mobileHeight="15rem"
        overlay={true}
      />

      {/* Contenido Principal */}
      <main className={styles.mainContent}>
        {/* Sección Introducción con Stats */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div className={styles.introContent}>
                <div className={styles.sectionBadge}>
                  <FaRocket className={styles.badgeIcon} />
                  Proyecto Portfolio
                </div>
                <h2 className={styles.sectionTitle}>
                  Innovación en{" "}
                  <span className={styles.titleAccent}>
                    Experiencia Culinaria Digital
                  </span>
                </h2>
                <div className={styles.introText}>
                  <p>
                    <strong>Appetito & Kitchen</strong> representa la fusión
                    perfecta entre
                    <strong> diseño moderno</strong> y{" "}
                    <strong>tecnología frontend de vanguardia</strong>.
                    Desarrollada como proyecto demostrativo, esta aplicación web
                    redefine la forma de explorar recetas culinarias.
                  </p>
                  <p>
                    Utilizando <strong>TheMealDB API</strong> como backbone de
                    datos, he creado un ecosistema digital que prioriza la
                    <strong> experiencia de usuario</strong>, el
                    <strong> performance</strong> y la
                    <strong> elegancia visual</strong> en cada interacción.
                  </p>
                </div>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>300+</div>
                  <div className={styles.statLabel}>Recetas Integradas</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>30+</div>
                  <div className={styles.statLabel}>Cocinas Globales</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>14</div>
                  <div className={styles.statLabel}>Categorías</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Responsive</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stack Tecnológico */}
        <TechStack />

        {/* Características UX/UI */}
        <FeaturesShowcase />

        {/* Sistema de Diseño */}
        <DesignSystem />

        {/* Sección de Contacto Premium */}
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactContent}>
              <div className={styles.contactHeader}>
                <h2 className={styles.sectionTitle}>
                  ¿Listo para Crear Algo Increíble?
                </h2>
                <p className={styles.contactSubtitle}>
                  Este proyecto demuestra mi pasión por el desarrollo frontend
                  moderno y diseño de UX/UI. ¿Tienes un proyecto en mente?
                </p>
              </div>

              <div className={styles.contactGrid}>
                <div className={styles.contactCard}>
                  <div className={styles.contactIconWrapper}>
                    <FaEnvelope className={styles.contactIcon} />
                  </div>
                  <h3 className={styles.contactCardTitle}>Email</h3>
                  <p className={styles.contactCardText}>
                    Hablemos sobre tu proyecto
                  </p>
                  <div className={styles.contactCta}>Contactar</div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.contactIconWrapper}>
                    <FaLinkedin className={styles.contactIcon} />
                  </div>
                  <h3 className={styles.contactCardTitle}>LinkedIn</h3>
                  <p className={styles.contactCardText}>
                    Conectemos profesionalmente
                  </p>
                  <div className={styles.contactCta}>Conectar</div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.contactIconWrapper}>
                    <FaGithub className={styles.contactIcon} />
                  </div>
                  <h3 className={styles.contactCardTitle}>GitHub</h3>
                  <p className={styles.contactCardText}>
                    Explora más proyectos
                  </p>
                  <div className={styles.contactCta}>Visitar</div>
                </div>
              </div>

              <div className={styles.projectNote}>
                <p>
                  <strong>Appetito & Kitchen</strong> es un proyecto de
                  portfolio desarrollado con React, Vite y TheMealDB API.
                  Diseñado para demostrar habilidades en desarrollo frontend
                  moderno, UX/UI y mejores prácticas de desarrollo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
