// src/pages/Recetas.jsx (ACTUALIZADO)
import { useSearchParams, useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import RecetasLayout from "../../components/RecetasLayout/RecetasLayout";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";

export default function Recetas() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const categoriaFromURL = searchParams.get("categoria");
  const areaFromURL = searchParams.get("area");

  // Efecto para limpiar parámetros de URL cuando no hay filtros activos
  useEffect(() => {
    // Si no hay parámetros en la URL, no hacer nada
    if (!categoriaFromURL && !areaFromURL) return;

    // Si hay parámetros pero el usuario navegó manualmente a /recetas sin filtros,
    // limpiar la URL para evitar estado persistente no deseado
    const handleBeforeUnload = () => {
      // Solo limpiar si el usuario está navegando fuera de la página
      // No limpiar durante recargas normales
      sessionStorage.setItem("preserveFilters", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [categoriaFromURL, areaFromURL, navigate]);

  const breadcrumbItems = [
    { label: "Inicio", path: "/" },
    { label: "Recetas", path: null, current: true },
  ];

  // Si hay categoría en la URL, actualizar el breadcrumb
  if (categoriaFromURL) {
    breadcrumbItems.push({
      label: categoriaFromURL,
      path: null,
      current: true,
    });
  }

  // Si hay área en la URL, actualizar el breadcrumb
  if (areaFromURL) {
    breadcrumbItems.push({
      label: `Cocina ${areaFromURL}`,
      path: null,
      current: true,
    });
  }

  // Determinar el título del Hero
  const getHeroTitle = () => {
    if (areaFromURL) return `Cocina ${areaFromURL}`;
    if (categoriaFromURL) return `Recetas de ${categoriaFromURL}`;
    return "Recetas de cocina";
  };

  // Función para limpiar todos los filtros y la URL
  const clearAllFilters = () => {
    navigate("/recetas", { replace: true });
  };

  return (
    <div>
      <Hero
        title={getHeroTitle()}
        breadcrumbItems={breadcrumbItems}
        backgroundDesktop="/Hero.png"
        backgroundMobile="/HeroMobile.png"
        height="30rem"
        mobileHeight="15rem"
        overlay={true}
      />
      <RecetasLayout
        initialCategory={categoriaFromURL}
        initialArea={areaFromURL}
        onClearFilters={clearAllFilters}
      />
      <Footer />
    </div>
  );
}
