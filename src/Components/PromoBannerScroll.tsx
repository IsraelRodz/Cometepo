import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PromoBannerScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const controls = useAnimation();
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      if (imageRef.current) {
        setImageWidth(imageRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (imageWidth === 0) return;

    controls.start({
      x: [0, -imageWidth],
      scale: [1, 1.05, 1], // escala leve para "respirar"
      filter: [
        "brightness(1)",
        "brightness(1.1)",
        "brightness(1)"
      ], // brillo suave para animar
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "easeInOut",
        },
        scale: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "easeInOut",
        },
        filter: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "easeInOut",
        },
      },
    });
  }, [imageWidth, controls]);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl
                 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]"
    >
      <motion.div
        className="flex gap-0"
        animate={controls}
        ref={containerRef}
      >
        <img
          ref={imageRef}
          src="/Servicios/promociones_1.jpeg"
          alt="Promoción especial"
          className="flex-none w-[80vw] sm:w-[50vw] md:w-[40vw] h-auto max-h-96 object-contain"
          draggable={false}
        />
        <img
          src="/Servicios/promociones_1.jpeg"
          alt="Promoción especial"
          className="flex-none w-[80vw] sm:w-[50vw] md:w-[40vw] h-auto max-h-96 object-contain"
          draggable={false}
        />
      </motion.div>

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
