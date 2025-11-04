// src/pages/AboutApp/components/OurStory/OurStory.jsx
import React from "react";
import styles from "./OurStory.module.css";
import { FaSeedling, FaRocket, FaUsers, FaHeart } from "react-icons/fa";

const storyTimeline = [
  {
    year: "2020",
    icon: <FaSeedling />,
    title: "La Semilla de una Idea",
    description:
      "Todo comenzó en una pequeña cocina, donde nos dimos cuenta de cómo las recetas familiares se estaban perdiendo en la era digital. Queríamos preservar esas tradiciones y hacerlas accesibles para todos.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2021",
    icon: <FaRocket />,
    title: "Nacimiento de Appetito & Kitchen",
    description:
      "Unimos nuestra pasión por la gastronomía con la tecnología moderna. Comenzamos como un humilde proyecto con la misión de conectar a las personas a través de la comida.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2022",
    icon: <FaUsers />,
    title: "Creciendo Juntos",
    description:
      "Nuestra comunidad comenzó a florecer. Miles de cocineros caseros descubrieron el placer de explorar cocinas internacionales desde sus hogares. Cada receta compartida nos inspiró a mejorar.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2023",
    icon: <FaHeart />,
    title: "Una Familia Culinaria",
    description:
      "Hoy, somos una familia global de amantes de la cocina. Seguimos creyendo que cada plato cuenta una historia y que la mejor comida es la que se compre con amor.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export default function OurStory() {
  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
          <p className={styles.sectionSubtitle}>
            Un viaje de pasión, tradición e innovación que comenzó en la cocina
            y llegó a corazones alrededor del mundo
          </p>
        </div>

        <div className={styles.timeline}>
          {storyTimeline.map((story, index) => (
            <div
              key={story.year}
              className={styles.timelineItem}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineIcon}>{story.icon}</div>
                  <div className={styles.timelineYear}>{story.year}</div>
                  <h3 className={styles.timelineTitle}>{story.title}</h3>
                </div>

                <p className={styles.timelineDescription}>
                  {story.description}
                </p>

                <div
                  className={styles.timelineImage}
                  style={{ backgroundImage: `url(${story.image})` }}
                >
                  <div className={styles.imageOverlay}></div>
                </div>
              </div>

              {index < storyTimeline.length - 1 && (
                <div className={styles.timelineConnector}></div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.storyConclusion}>
          <div className={styles.conclusionContent}>
            <FaHeart className={styles.heartIcon} />
            <h3>Y el viaje continúa...</h3>
            <p>
              Cada día, nuevas historias se escriben en cocinas alrededor del
              mundo. Seguimos comprometidos con nuestra misión original: hacer
              que la magia de la cocina esté al alcance de todos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
