// scripts/exploreCuisines.js
async function exploreCuisines() {
  console.log("🔍 Explorando cocinas/paises disponibles en TheMealDB...\n");

  try {
    // 1. Obtener algunas recetas para analizar el campo strArea
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const data = await response.json();

    if (!data.meals) {
      console.log("❌ No se pudieron obtener recetas");
      return;
    }

    // 2. Extraer áreas únicas de las recetas
    const areas = new Set();
    data.meals.forEach((meal) => {
      if (meal.strArea) {
        areas.add(meal.strArea);
      }
    });

    console.log("📋 Áreas encontradas en recetas aleatorias:");
    console.log(Array.from(areas).sort());
    console.log("\n");

    // 3. Buscar lista específica de áreas (si existe endpoint)
    console.log("🌍 Buscando lista oficial de áreas...");
    try {
      const areasResponse = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      const areasData = await areasResponse.json();

      if (areasData.meals) {
        console.log("✅ Lista oficial de áreas encontrada:");
        const officialAreas = areasData.meals
          .map((area) => area.strArea)
          .sort();
        console.log(officialAreas);
        console.log(
          `\n📊 Total de cocinas disponibles: ${officialAreas.length}`
        );

        // Mostrar algunas recetas por área
        console.log("\n🍽️  Recetas de ejemplo por cocina:");
        for (const area of officialAreas.slice(0, 5)) {
          const areaResponse = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
          );
          const areaData = await areaResponse.json();
          console.log(
            `\n${area}: ${areaData.meals ? areaData.meals.length : 0} recetas`
          );
          if (areaData.meals && areaData.meals.length > 0) {
            console.log(`   Ejemplo: ${areaData.meals[0].strMeal}`);
          }
        }
      }
    } catch (error) {
      console.log("❌ No se pudo obtener lista oficial de áreas");
    }
  } catch (error) {
    console.error("❌ Error al explorar la API:", error);
  }
}

// Ejecutar el script
exploreCuisines();
