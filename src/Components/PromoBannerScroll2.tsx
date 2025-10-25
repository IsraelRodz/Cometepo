import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const images = [
  { src: "public/Promo_2/promo_1.jpeg" },
  { src: "public/Promo_2/promo_2.jpeg" },
  { src: "public/Promo_2/promo_3.jpeg" },
  { src: "public/Promo_2/promo_4.jpeg" },
  { src: "public/Promo_2/promo_5.jpeg" },
  { src: "public/Promo_2/promo_6.jpeg" },
  { src: "public/Promo_2/promo_7.jpeg" },
  { src: "public/Promo_2/promo_8.jpeg" },
  { src: "public/Promo_2/promo_9.jpeg" },
  { src: "public/Promo_2/promo_10.jpeg" },
{ src: "public/Promo_2/promo_11.jpeg" },
{ src: "public/Promo_2/promo_12.jpeg" },
{ src: "public/Promo_2/promo_13.jpeg" },
{ src: "public/Promo_2/promo_14.jpeg" },
{ src: "public/Promo_2/promo_15.jpeg" },
{ src: "public/Promo_2/promo_16.jpeg" },
{ src: "public/Promo_2/promo_17.jpeg" },
{ src: "public/Promo_2/promo_18.jpeg" },
{ src: "public/Promo_2/promo_19.jpeg" },
{ src: "public/Promo_2/promo_20.jpeg" },
{ src: "public/Promo_2/promo_21.jpeg" },
{ src: "public/Promo_2/promo_22.jpeg" },
{ src: "public/Promo_2/promo_23.jpeg" },
{ src: "public/Promo_2/promo_24.jpeg" },
{ src: "public/Promo_2/promo_25.jpeg" },
{ src: "public/Promo_2/promo_26.jpeg" },
{ src: "public/Promo_2/promo_27.jpeg" },
{ src: "public/Promo_2/promo_28.jpeg" },
{ src: "public/Promo_2/promo_29.jpeg" },
{ src: "public/Promo_2/promo_30.jpeg" },
{ src: "public/Promo_2/promo_31.jpeg" },
{ src: "public/Promo_2/promo_32.jpeg" },
{ src: "public/Promo_2/promo_33.jpeg" },
{ src: "public/Promo_2/promo_34.jpeg" },
{ src: "public/Promo_2/promo_35.jpeg" },
{ src: "public/Promo_2/promo_36.jpeg" },
{ src: "public/Promo_2/promo_37.jpeg" },
{ src: "public/Promo_2/promo_38.jpeg" },
{ src: "public/Promo_2/promo_39.jpeg" },
{ src: "public/Promo_2/promo_40.jpeg" },
{ src: "public/Promo_2/promo_41.jpeg" },
{ src: "public/Promo_2/promo_42.jpeg" },
{ src: "public/Promo_2/promo_43.jpeg" },
{ src: "public/Promo_2/promo_44.jpeg" },
{ src: "public/Promo_2/promo_45.jpeg" },
{ src: "public/Promo_2/promo_46.jpeg" },
{ src: "public/Promo_2/promo_47.jpeg" },
];

export default function PromoBannerScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

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
        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900">
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
                    className="h-64 md:h-80 w-auto object-contain rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="relative flex items-center justify-center py-6 gap-10 perspective-1000">
              {[-2, -1, 0, 1, 2].map((offset) => {
                const index = (currentIndex + offset + images.length) % images.length;
                const isCenter = offset === 0;
                const scale = isCenter ? 1.2 : 0.9 - Math.abs(offset) * 0.05;
                const zIndex = isCenter ? 50 : 30 - Math.abs(offset);
                const opacity = isCenter ? 1 : 0.5;
                const rotateY = offset * 15;

                return (
                  <motion.img
                    key={index}
                    src={images[index].src}
                    className="w-auto h-72 md:h-80 rounded-3xl shadow-xl object-contain"
                    style={{
                      zIndex,
                      opacity,
                      transform: `scale(${scale}) rotateY(${rotateY}deg)`,
                      transition: "transform 0.8s ease, opacity 0.8s ease",
                    }}
                    loading="lazy"
                    draggable={false}
                    layout
                    whileHover={{ scale: isCenter ? 1.25 : scale + 0.05 }}
                  />
                );
              })}

              <button
                onClick={handlePrev}
                className="absolute left-6 bg-black/40 text-white p-4 rounded-full hover:bg-black/70 backdrop-blur-sm transition"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="absolute right-6 bg-black/40 text-white p-4 rounded-full hover:bg-black/70 backdrop-blur-sm transition"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Texto animado debajo */}
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
