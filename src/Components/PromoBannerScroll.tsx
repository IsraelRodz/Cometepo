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

  // Calcular el ancho total del slider
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setTotalWidth(containerRef.current.scrollWidth / 2); // solo un set de imágenes
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Iniciar animación
  useEffect(() => {
    if (totalWidth === 0) return;

    controls.start({
      x: [0, -totalWidth],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    });
  }, [totalWidth, controls]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Carrusel animado */}
      <motion.div
        className="flex gap-0"
        animate={controls}
        ref={containerRef}
      >
        {/* Duplicamos el set de imágenes para loop infinito */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Promoción ${index + 1}`}
            className="flex-none w-[80vw] sm:w-[50vw] md:w-[33vw] lg:w-[25vw] h-48 sm:h-64 md:h-80 object-cover"
            draggable={false}
          />
        ))}
      </motion.div>

      {/* Texto sobre el banner */}
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
