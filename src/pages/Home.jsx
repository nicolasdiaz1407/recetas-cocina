// src/pages/Home.jsx
import React from "react";
import CategoriesHighlight from "../components/CategoriesHighlight/CategoriesHighlight";
import Hero from "../components/Hero/Hero";
import InternationalCuisines from "../components/InternationalCuisines/InternationalCuisines";
import RecipesPopular from "../components/RecipesPopular/RecipesPopular";
import Footer from "../components/Footer/Footer";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero
        title="Appetito & Kitchen"
        subtitle="Descubre nuevas recetas del mundo"
        backgroundDesktop="/Hero.png"
        backgroundMobile="/HeroMobile.png"
        height="58rem"
      />
      <main className={styles.mainContent}>
        <CategoriesHighlight />
        <RecipesPopular />
        <InternationalCuisines />
      </main>
      <Footer />
    </div>
  );
}
