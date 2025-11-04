// src/pages/AboutApp/AboutApp.jsx
import React from "react";
import Hero from "../../components/Hero/Hero";
import MissionVision from "./components/MissionVision/MissionVision";
import OurStory from "./components/OurStory/OurStory";
import ValuesShowcase from "./components/ValuesShowcase/ValuesShowcase";
import Transparency from "./components/Transparency/Transparency";
import Testimonials from "./components/Testimonials/Testimonials";
import styles from "./AboutApp.module.css";
import { FaHeart, FaUsers, FaSeedling } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

export default function AboutApp() {
  const breadcrumbItems = [
    { path: "/", label: "Inicio" },
    { label: "Sobre Nosotros" },
  ];

  return (
    <div className={styles.aboutApp}>
      {/* Hero Section */}
      <Hero
        title="Nuestra Pasión por la Cocina"
        subtitle="Donde los sabores del mundo se encuentran con el corazón del hogar"
        breadcrumbItems={breadcrumbItems}
        backgroundDesktop="/Hero.png"
        backgroundMobile="/HeroMobile.png"
        height="30rem"
        mobileHeight="15rem"
        overlay={true}
      />

      {/* Contenido Principal */}
      <main className={styles.mainContent}>
        {/* Introducción Cálida */}
        <section className={styles.warmIntro}>
          <div className={styles.container}>
            <div className={styles.introContent}>
              <div className={styles.introBadge}>
                <FaHeart className={styles.badgeIcon} />
                Bienvenido a Nuestra Cocina
              </div>
              <h2 className={styles.introTitle}>
                Más que Recetas,{" "}
                <span className={styles.accent}>Experiencias</span> que Unen
              </h2>
              <div className={styles.introText}>
                <p>
                  En <strong>Appetito & Kitchen</strong>, creemos que cada plato
                  cuenta una historia y cada cocina es un espacio donde se crean
                  memorias. No somos solo una aplicación de recetas; somos tu
                  compañero en el viaje culinario que transforma ingredientes en
                  momentos especiales.
                </p>
                <p>
                  Nuestra misión es simple pero profunda: hacer que la magia de
                  la cocina internacional sea accesible para todos, sin importar
                  tu nivel de experiencia.
                </p>
              </div>

              <div className={styles.statsPreview}>
                <div className={styles.statPreview}>
                  <FaUsers className={styles.statIcon} />
                  <div>
                    <div className={styles.statNumber}>+10K</div>
                    <div className={styles.statLabel}>Cocineros Felices</div>
                  </div>
                </div>
                <div className={styles.statPreview}>
                  <FaSeedling className={styles.statIcon} />
                  <div>
                    <div className={styles.statNumber}>300+</div>
                    <div className={styles.statLabel}>Recetas Auténticas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Misión & Visión */}
        <MissionVision />

        {/* Nuestra Historia */}
        <OurStory />

        {/* Nuestros Valores */}
        <ValuesShowcase />

        {/* Transparencia */}
        <Transparency />

        {/* Testimonios */}
        <Testimonials />

        {/* Sección Final de Compromiso */}
        <section className={styles.commitmentSection}>
          <div className={styles.container}>
            <div className={styles.commitmentContent}>
              <h2 className={styles.sectionTitle}>Nuestra Promesa para Ti</h2>
              <div className={styles.commitmentGrid}>
                <div className={styles.commitmentItem}>
                  <div className={styles.commitmentIcon}>🎯</div>
                  <h3>Siempre Gratuito</h3>
                  <p>
                    Creemos que la buena comida debe ser accesible para todos
                  </p>
                </div>
                <div className={styles.commitmentItem}>
                  <div className={styles.commitmentIcon}>🔍</div>
                  <h3>Transparencia Total</h3>
                  <p>
                    Seremos siempre claros sobre el origen de nuestro contenido
                  </p>
                </div>
                <div className={styles.commitmentItem}>
                  <div className={styles.commitmentIcon}>💝</div>
                  <h3>Enfoque en Ti</h3>
                  <p>Tus necesidades y experiencia son nuestra prioridad</p>
                </div>
                <div className={styles.commitmentItem}>
                  <div className={styles.commitmentIcon}>🚀</div>
                  <h3>Mejora Continua</h3>
                  <p>Escuchamos tu feedback para crecer juntos</p>
                </div>
              </div>

              <div className={styles.finalCta}>
                <h3>¿Listo para Cocinar Algo Extraordinario?</h3>
                <p>
                  Únete a nuestra comunidad de amantes de la cocina y descubre
                  cómo cada receta puede ser el inicio de una nueva aventura.
                </p>
                <div className={styles.ctaButtons}>
                  <button className={styles.primaryCta}>
                    Explorar Recetas
                  </button>
                  <button className={styles.secondaryCta}>
                    Ver Categorías
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
