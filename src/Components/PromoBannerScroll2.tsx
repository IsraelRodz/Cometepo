import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const images = [
  "/Promo_2/promo_1.jpeg",
  "/Promo_2/promo_2.jpeg",
  "/Promo_2/promo_3.jpeg",
  "/Promo_2/promo_4.jpeg",
  "/Promo_2/promo_5.jpeg",
  "/Promo_2/promo_6.jpeg",
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
      x: [0, -containerWidth],
      transition: {
        repeat: Infinity,
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
        className="block"
        aria-label="Contáctanos por WhatsApp para más promociones"
      >
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 cursor-pointer">
          <motion.div
            className="flex items-center gap-8 py-4"
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
                  alt={`Promoción medicamento ${i + 1}`}
                  className="h-64 md:h-80 w-auto object-contain rounded-xl"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </a>

      {/* Texto animado con framer-motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto text-center mt-6 px-4"
      >
        <h2 className="text-slate-900 text-3xl sm:text-4xl md:text-5xl font-bold">
          ¡Aprovecha nuestras promociones en medicamentos!
        </h2>
        <p className="text-slate-700 text-lg mt-2 font-medium">
          Haz clic para escribirnos por WhatsApp
        </p>
      </motion.div>
    </section>
  );
}
