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
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Detectar si es móvil o escritorio
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768); // móvil < md
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Animación automática solo en móvil
  useEffect(() => {
    if (!isMobile || containerWidth === 0) return;

    controls.start({
      x: [0, -containerWidth],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 30,
        ease: "linear",
      },
    });
  }, [containerWidth, controls, isMobile]);

  // Calcular ancho del carrusel
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

  // Navegación manual en escritorio
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section aria-label="Promociones de medicamentos" className="my-6 px-4">
      <div className="block pointer-events-auto max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 cursor-pointer pointer-events-auto">
          {/* Carrusel */}
          {isMobile ? (
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
          ) : (
            <div className="relative flex items-center justify-center py-4">
              <img
                src={images[currentIndex].src}
                className="h-64 md:h-80 w-auto object-contain rounded-xl"
                loading="lazy"
                draggable={false}
              />

              {/* Botón anterior */}
              <button
                onClick={handlePrev}
                className="absolute left-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
              >
                ←
              </button>

              {/* Botón siguiente */}
              <button
                onClick={handleNext}
                className="absolute right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Texto animado debajo con enlace a WhatsApp */}
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
          <a
            href="https://wa.me/525630847160"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg transition"
          >
            Haz clic para escribirnos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
