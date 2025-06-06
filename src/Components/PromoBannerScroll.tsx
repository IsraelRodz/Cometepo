import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const images = [
  "/Servicios/promociones_1.jpeg",
  "/Servicios/promociones_2.jpeg",
  "/Servicios/promociones_3.jpeg",
  "/Servicios/promociones_4.jpeg",
  "/Servicios/promociones_5.jpeg",
];

export default function PromoBannerScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalWidth, setTotalWidth] = useState(0);
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  // Calcular el ancho total del carrusel
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setTotalWidth(containerRef.current.scrollWidth / 2);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Animar el movimiento horizontal infinito
  useEffect(() => {
    if (totalWidth === 0 || paused) return;

    controls.start({
      x: [0, -totalWidth],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    });
  }, [totalWidth, paused, controls]);

  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Área visible del carrusel */}
      <div className="aspect-[16/9] min-h-[200px] sm:min-h-[300px] md:min-h-[400px] overflow-hidden">
        <motion.div className="flex" animate={controls} ref={containerRef}>
          {[...images, ...images].map((src, i) => (
            <motion.div
              key={i}
              className="w-full flex-shrink-0 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={src}
                alt={`Promo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300"
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Texto promocional encima del banner */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">
          ¡Promoción por tiempo limitado, Aprovecha!
        </h2>
        <p className="text-white mt-2 text-sm sm:text-lg md:text-xl drop-shadow-md max-w-3xl">
          Hasta 30% de descuento en nuestros productos.
        </p>
      </div>
    </div>
  );
}
