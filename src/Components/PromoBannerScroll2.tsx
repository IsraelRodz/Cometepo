import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/Promo_2/come_1.jpeg",
  "/Promo_2/come_2.jpeg",
  "/Promo_2/come_3.jpeg",
  "/Promo_2/come_4.jpeg",
  "/Promo_2/come_5.jpeg",
  "/Promo_2/come_6.jpeg",
  "/Promo_2/come_7.jpeg",
  "/Promo_2/come_8.jpeg",
  "/Promo_2/come_9.jpeg",
  "/Promo_2/come_10.jpeg",
  "/Promo_2/come_11.jpeg",
  "/Promo_2/come_12.jpeg",
  "/Promo_2/come_13.jpeg",
  "/Promo_2/come_14.jpeg",
  "/Promo_2/come_15.jpeg",
  "/Promo_2/come_16.jpeg",
  "/Promo_2/come_17.jpeg",
  "/Promo_2/come_18.jpeg",
];

export default function PromoBannerScroll() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    intervalRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMobile]);

  return (
    <section className="px-4 my-20">
      <div className="max-w-7xl mx-auto rounded-[3rem] shadow-2xl bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 px-6 py-14">

        {/* ===== TITULO ===== */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-xl">
            Promociones especiales
          </h2>
          <p className="text-white/90 text-xl md:text-2xl mt-3">
            en medicamentos
          </p>
        </div>

        {/* ===== CARRUSEL ===== */}
        {isMobile ? (
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-10 scrollbar-hide">
            {images.map((src, i) => (
              <div key={i} className="snap-center shrink-0">
                <img
                  src={src}
                  alt={`Promoción ${i + 1}`}
                  className="h-64 rounded-3xl shadow-xl object-contain bg-white p-4"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative h-[380px] flex justify-center items-center mb-14">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (current + offset + images.length) % images.length;
              const isCenter = offset === 0;

              return (
                <motion.img
                  key={index}
                  src={images[index]}
                  alt={`Promoción ${index + 1}`}
                  className="absolute h-80 rounded-[2rem] shadow-2xl object-contain bg-white p-4"
                  animate={{
                    x: offset * 300,
                    scale: isCenter ? 1.2 : 0.85,
                    opacity: isCenter ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ zIndex: isCenter ? 20 : 10 }}
                  draggable={false}
                />
              );
            })}
          </div>
        )}

        {/* ===== BOTON ===== */}
        <div className="text-center">
          <a
            href="https://wa.me/525613143229"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl transition-transform hover:scale-105"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
