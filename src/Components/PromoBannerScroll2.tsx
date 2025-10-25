import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// ⚠️ IMPORTANTE: tus imágenes deben estar en /public/Promo_2/
const images = [
  { src: "/Promo_2/promo_10.jpeg" },
  { src: "/Promo_2/promo_11.jpeg" },
  { src: "/Promo_2/promo_12.jpeg" },
  { src: "/Promo_2/promo_13.jpeg" },
  { src: "/Promo_2/promo_14.jpeg" },
  { src: "/Promo_2/promo_15.jpeg" },
  { src: "/Promo_2/promo_16.jpeg" },
  { src: "/Promo_2/promo_17.jpeg" },
  { src: "/Promo_2/promo_18.jpeg" },
  { src: "/Promo_2/promo_19.jpeg" },
  { src: "/Promo_2/promo_20.jpeg" },
  { src: "/Promo_2/promo_21.jpeg" },
  { src: "/Promo_2/promo_22.jpeg" },
  { src: "/Promo_2/promo_23.jpeg" },
  { src: "/Promo_2/promo_24.jpeg" },
  { src: "/Promo_2/promo_25.jpeg" },
  { src: "/Promo_2/promo_26.jpeg" },
  { src: "/Promo_2/promo_27.jpeg" },
  { src: "/Promo_2/promo_28.jpeg" },
  { src: "/Promo_2/promo_29.jpeg" },
  { src: "/Promo_2/promo_30.jpeg" },
  { src: "/Promo_2/promo_31.jpeg" },
  { src: "/Promo_2/promo_32.jpeg" },
  { src: "/Promo_2/promo_33.jpeg" },
  { src: "/Promo_2/promo_34.jpeg" },
  { src: "/Promo_2/promo_35.jpeg" },
  { src: "/Promo_2/promo_36.jpeg" },
  { src: "/Promo_2/promo_37.jpeg" },
  { src: "/Promo_2/promo_38.jpeg" },
  { src: "/Promo_2/promo_39.jpeg" },
  { src: "/Promo_2/promo_40.jpeg" },
  { src: "/Promo_2/promo_41.jpeg" },
  { src: "/Promo_2/promo_42.jpeg" },
  { src: "/Promo_2/promo_43.jpeg" },
  { src: "/Promo_2/promo_44.jpeg" },
  { src: "/Promo_2/promo_45.jpeg" },
  { src: "/Promo_2/promo_46.jpeg" },
  { src: "/Promo_2/promo_47.jpeg" },
];

export default function PromoBannerScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Detectar versión móvil o escritorio
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Actualizar ancho del contenedor (para el scroll automático móvil)
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

  // Animación automática móvil
  useEffect(() => {
    if (!isMobile || containerWidth === 0) return;
    controls.start({
      x: [0, -containerWidth],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 40,
        ease: "linear",
      },
    });
  }, [containerWidth, controls, isMobile]);

  // Cambio automático de imágenes en escritorio
  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // cada 5 segundos
    return () => clearInterval(interval);
  }, [isMobile]);

  // Flechas para escritorio
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
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900">
          {/* 📱 Versión móvil */}
          {isMobile ? (
            <motion.div
              className="flex items-center gap-8 py-4"
              animate={controls}
              ref={containerRef}
            >
              {images.map(({ src }, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src={src}
                    className="h-64 w-auto object-contain rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </motion.div>
          ) : (
            // 💻 Versión escritorio
            <div className="relative flex items-center justify-center py-6 gap-8 perspective-1000">
              {[-3, -2, -1, 0, 1, 2, 3].map((offset) => {
                const index = (currentIndex + offset + images.length) % images.length;
                const isCenter = offset === 0;
                const scale = isCenter ? 1.25 : 0.9 - Math.abs(offset) * 0.05;
                const zIndex = isCenter ? 50 : 20 - Math.abs(offset);
                const opacity = isCenter ? 1 : 0.45;
                const rotateY = offset * 10;

                return (
                  <motion.img
                    key={index}
                    src={images[index].src}
                    className="w-auto h-72 md:h-80 rounded-[2rem] shadow-xl object-contain"
                    style={{
                      zIndex,
                      opacity,
                      transform: `scale(${scale}) rotateY(${rotateY}deg)`,
                      transition: "transform 0.8s ease, opacity 0.8s ease",
                    }}
                    loading="lazy"
                    draggable={false}
                    whileHover={{ scale: isCenter ? 1.3 : scale + 0.05 }}
                  />
                );
              })}

              {/* Flechas navegación */}
              <button
                onClick={handlePrev}
                className="absolute left-6 bg-black/40 text-white p-4 rounded-full hover:bg-black/70 backdrop-blur-sm transition z-50"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="absolute right-6 bg-black/40 text-white p-4 rounded-full hover:bg-black/70 backdrop-blur-sm transition z-50"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Texto animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-xl">
            ¡Aprovecha nuestras promociones en medicamentos!
          </h2>
          <motion.a
            href="https://wa.me/525625855729"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            Haz clic para escribirnos por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
