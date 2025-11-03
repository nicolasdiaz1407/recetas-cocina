import CategoriesHighlight from "../components/CategoriesHighlight/CategoriesHighlight";
import Hero from "../components/Hero/Hero";
import InternationalCuisines from "../components/InternationalCuisines/InternationalCuisines";
import RecipesPopular from "../components/RecipesPopular/RecipesPopular";

// src/pages/Home.jsx
export default function Home() {
  return (
    <main className="home">
      <Hero
        title="Appetito & Kitchen"
        subtitle="Descubre nuevas recetas del mundo"
        backgroundDesktop="/Hero.png"
        backgroundMobile="/HeroMobile.png"
        height="58rem"
      />
      <CategoriesHighlight />
      <RecipesPopular />
      <InternationalCuisines />
    </main>
  );
}
