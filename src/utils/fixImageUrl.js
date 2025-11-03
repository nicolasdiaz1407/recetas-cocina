// src/utils/fixImageUrl.js
/**
 * Normaliza URLs de imágenes para evitar errores comunes
 */
export default function fixImageUrl(url) {
  if (!url || typeof url !== "string") {
    return "";
  }

  // Si ya es una URL completa, retornar tal cual
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  // Si es una ruta relativa, asegurarse de que empiece con /
  if (url.startsWith("/")) {
    return url;
  }

  // Si no tiene slash al inicio, agregarlo
  return `/${url}`;
}
