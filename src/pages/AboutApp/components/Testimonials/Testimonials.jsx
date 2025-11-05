// src/pages/AboutApp/components/Testimonials/Testimonials.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Testimonials.module.css";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "María González",
    role: "Madre y Cocinera Casera",
    location: "Madrid, España",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Appetito & Kitchen transformó mis cenas familiares. De cocinar siempre lo mismo a descubrir platos de todo el mundo. Mis hijos ahora piden 'comida de otros países' y es increíble ver su curiosidad.",
    highlight: "Transformó mis cenas familiares",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Estudiante Universitario",
    location: "Ciudad de México, México",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Como estudiante con poco presupuesto, pensé que cocinar platos internacionales sería imposible. Pero con las recetas de Appetito & Kitchen he aprendido a hacer comida increíble con ingredientes accesibles.",
    highlight: "Comida increíble con ingredientes accesibles",
  },
  {
    id: 3,
    name: "Laura Chen",
    role: "Food Blogger",
    location: "Lima, Perú",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "He probado muchas apps de recetas, pero ninguna tiene la elegancia y usabilidad de Appetito & Kitchen. Las fotos, las instrucciones claras y la organización hacen que cocinar sea un placer.",
    highlight: "Elegancia y usabilidad excepcionales",
  },
  {
    id: 4,
    name: "David Miller",
    role: "Chef Aficionado",
    location: "Bogotá, Colombia",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "La variedad de cocinas internacionales es impresionante. He podido recrear platos que probé en mis viajes y sorprender a mis amigos con auténticas recetas de diferentes culturas.",
    highlight: "Variedad impresionante de cocinas",
  },
  {
    id: 5,
    name: "Ana Silva",
    role: "Nutricionista",
    location: "Santiago, Chile",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Recomiendo Appetito & Kitchen a mis pacientes porque hace que comer saludable sea divertido. Las recetas son equilibradas y muestran que la comida nutritiva puede ser deliciosa y emocionante.",
    highlight: "Comer saludable es divertido",
  },
  {
    id: 6,
    name: "Roberto Santos",
    role: "Padre Soltero",
    location: "Buenos Aires, Argentina",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Como padre soltero, el tiempo es oro. Las recetas son fáciles de seguir y los ingredientes fáciles de encontrar. Mi hija y yo hemos creado lindos momentos cocinando juntos gracias a esta app.",
    highlight: "Creamos lindos momentos cocinando juntos",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentTestimonialData = testimonialsData[currentTestimonial];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Lo que Dice Nuestra Comunidad</h2>
          <p className={styles.sectionSubtitle}>
            Historias reales de personas que han transformado su experiencia
            culinaria con Appetito & Kitchen
          </p>
        </div>

        {/* Testimonial Principal */}
        <div className={styles.testimonialMain}>
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>
              <FaQuoteLeft />
            </div>

            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>
                {currentTestimonialData.text}
              </p>

              <div className={styles.testimonialHighlight}>
                "{currentTestimonialData.highlight}"
              </div>
            </div>

            <div className={styles.testimonialAuthor}>
              <div
                className={styles.authorAvatar}
                style={{
                  backgroundImage: `url(${currentTestimonialData.avatar})`,
                }}
              ></div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>
                  {currentTestimonialData.name}
                </h4>
                <p className={styles.authorRole}>
                  {currentTestimonialData.role}
                </p>
                <p className={styles.authorLocation}>
                  {currentTestimonialData.location}
                </p>
              </div>
              <div className={styles.authorRating}>
                {[...Array(currentTestimonialData.rating)].map((_, i) => (
                  <FaStar key={i} className={styles.starIcon} />
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className={styles.navButton}
              onClick={prevTestimonial}
              aria-label="Testimonio anterior"
            >
              <FaChevronLeft />
            </button>
            <button
              className={styles.navButton}
              onClick={nextTestimonial}
              aria-label="Siguiente testimonio"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className={styles.testimonialsGrid}>
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.testimonialMini} ${
                index === currentTestimonial ? styles.active : ""
              }`}
              onClick={() => goToTestimonial(index)}
            >
              <div
                className={styles.miniAvatar}
                style={{ backgroundImage: `url(${testimonial.avatar})` }}
              ></div>
              <div className={styles.miniInfo}>
                <h5 className={styles.miniName}>{testimonial.name}</h5>
                <p className={styles.miniRole}>{testimonial.role}</p>
              </div>
              <div className={styles.miniRating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className={styles.miniStar} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={styles.testimonialsStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10K+</div>
            <div className={styles.statLabel}>Cocineros Felices</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>4.9/5</div>
            <div className={styles.statLabel}>Rating Promedio</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Países</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>99%</div>
            <div className={styles.statLabel}>Recomiendan</div>
          </div>
        </div>

        {/* Community CTA */}
        <div className={styles.communityCta}>
          <h3>Únete a Nuestra Familia Culinaria</h3>
          <p>
            Descubre por qué miles de personas eligen Appetito & Kitchen para
            transformar su experiencia en la cocina cada día.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => navigate("/recetas")}
          >
            Explorar Recetas
          </button>
        </div>
      </div>
    </section>
  );
}
