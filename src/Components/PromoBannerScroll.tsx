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
  const controls = useAnimation();
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth / 2);
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (containerWidth === 0) return;

    controls.start({
      x: [0, -containerWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    });
  }, [containerWidth, controls]);

  return (
    <a
      href="https://wa.me/525630847160"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 cursor-pointer">
        <motion.div
          className="flex items-center gap-4 py-4"
          animate={controls}
          ref={containerRef}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Promoción ${i + 1}`}
                className="h-64 md:h-80 w-auto object-contain"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">
            ¡Promoción por tiempo limitado, Aprovecha!
          </h2>
        </div>
      </div>
    </a>
  );
}
