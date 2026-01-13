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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Autoplay escritorio
  useEffect(() => {
    if (isMobile) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [isMobile]);

  const pause = () => intervalRef.current && clearInterval(intervalRef.current);
  const play = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);
  };

  return (
    <section className="px-4 my-10">
      <div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900">

        {/* 📱 MÓVIL */}
        {isMobile ? (
          <div className="flex gap-6 overflow-x-scroll snap-x snap-mandatory py-6 px-6 scrollbar-hide">
            {images.map((src, i) => (
              <div key={i} className="snap-center shrink-0">
                <img
                  src={src}
                  className="h-64 rounded-3xl shadow-xl object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          /* 💻 ESCRITORIO */
          <div
            className="relative py-10 flex justify-center items-center perspective-1000"
            onMouseEnter={pause}
            onMouseLeave={play}
          >
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (current + offset + images.length) % images.length;
              const isCenter = offset === 0;

              return (
                <motion.img
                  key={index}
                  src={images[index]}
                  className="absolute h-80 rounded-[2rem] shadow-xl object-contain"
                  animate={{
                    x: offset * 260,
                    scale: isCenter ? 1.25 : 0.85,
                    opacity: isCenter ? 1 : 0.45,
                    rotateY: offset * 12,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ zIndex: isCenter ? 30 : 10 }}
                  draggable={false}
                />
              );
            })}

            {/* Flechas */}
            <button
              onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
              className="absolute left-6 bg-black/50 text-white p-4 rounded-full hover:bg-black/80 transition"
            >
              ←
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % images.length)}
              className="absolute right-6 bg-black/50 text-white p-4 rounded-full hover:bg-black/80 transition"
            >
              →
            </button>
          </div>
        )}

        {/* Texto */}
        <div className="text-center pb-10 px-6">
          <h2 className="text-white text-4xl font-extrabold drop-shadow-xl">
            Promociones especiales en medicamentos
          </h2>

          <a
            href="https://wa.me/525613143229"
            target="_blank"
            className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl transition"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
