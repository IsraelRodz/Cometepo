import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const images = [
  { src: "/Promo_2/sep_1.jpeg" },
  { src: "/Promo_2/sep_2.jpeg" },
  { src: "/Promo_2/sep_3.jpeg" },
  { src: "/Promo_2/sep_4.jpeg" },
  { src: "/Promo_2/sep_5.jpeg" },
  { src: "/Promo_2/sep_6.jpeg" },
  { src: "/Promo_2/sep_7.jpeg" },
  { src: "/Promo_2/sep_8.jpeg" },
  { src: "/Promo_2/sep_9.jpeg" },
  { src: "/Promo_2/sep_10.jpeg" },
  { src: "/Promo_2/sep_11.jpeg" },
  { src: "/Promo_2/sep_12.jpeg" },
  { src: "/Promo_2/sep_13.jpeg" },
  { src: "/Promo_2/sep_14.jpeg" },
  { src: "/Promo_2/sep_15.jpeg" },
  { src: "/Promo_2/sep_16.jpeg" },
  { src: "/Promo_2/sep_17.jpeg" },
  { src: "/Promo_2/sep_18.jpeg" },
  { src: "/Promo_2/sep_19.jpeg" },
];

export default function PromoBannerScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth;
        const offsetWidth = containerRef.current.offsetWidth;
        setContainerWidth(scrollWidth - offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (containerWidth === 0) return;

    controls.start({
      x: [0, -containerWidth], // va de izquierda a derecha
      transition: {
        repeat: Infinity,
        repeatType: "reverse", // 🔥 rebota de regreso
        duration: 30,
        ease: "linear",
      },
    });
  }, [containerWidth, controls]);

  return (
    <section aria-label="Promociones de medicamentos" className="my-6 px-4">
      <a
        href="https://wa.me/525630847160"
        target="_blank"
        rel="noopener noreferrer"
        className="block pointer-events-auto max-w-7xl mx-auto"
        aria-label="Contáctanos por WhatsApp para más promociones"
      >
        <div className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 cursor-pointer pointer-events-auto">
          {/* Carrusel */}
          <motion.div
            className="flex items-center gap-8 py-4"
            animate={controls}
            ref={containerRef}
          >
            {images.map(({ src }, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={src}
                  className="h-64 md:h-80 w-auto object-contain rounded-xl"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Texto animado debajo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-center"
        >
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-xl"
            style={{ textShadow: "0 3px 8px rgba(0,0,0,0.85)" }}
          >
            ¡Aprovecha nuestras promociones en medicamentos!
          </h2>
          <p
            className="text-green-400 text-lg mt-2 font-semibold drop-shadow-md"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.75)" }}
          >
            Haz clic para escribirnos por WhatsApp
          </p>
        </motion.div>
      </a>
    </section>
  );
}
