import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const promos = [
  {
    src: "/Promo_2/come_1.jpeg",
    title: "PromociónesVOMIFOS 150MG SOL INY F.A.",
    description: "FOSAPREPITANT 150 MG SOL INY",
  },
  {
    src: "/Promo_2/come_2.jpeg",
    title: "CLODAP SOL 500MG INY C/FCO AMP",
    description: "DAPTOMICINA 500 MG SOL INY",
  },
  {
    src: "/Promo_2/come_3.jpeg",
    title: "NOVAMEXAN 15 UI AMP",
    description: "BLEOMICINA 15 UI AMP",
  },
  {
    src: "/Promo_2/come_4.jpeg",
    title: "ONECOBAX 200 M G SOL INY",
    description: "DACARBAZINA 200 MG SOL INY",
  },
  {
    src: "/Promo_2/come_5.jpeg",
    title: "DONECOL®",
    description: "DEXRAXZOZANO, 500MG SOL INTEC CAJA C/1 AMP",
  },
  {
    src: "/Promo_2/come_6.jpeg",
    title: "MEXCIKEM 1 GR SOLINY F.A",
    description: "CICLOSFOSFAMIDA 1 GR SOL INY",
  },
  {
    src: "/Promo_2/come_7.jpeg",
    title: "MEXCIKEM 200 MG C/5 FC",
    description: "CICLOSFOSFAMIDA 200 GR SOL INY",
  },
  {
    src: "/Promo_2/come_8.jpeg",
    title: "SENDOXAN 500 MG SOL INY",
    description: "CICLOFOSFAMIDA",
  },
  {
    src: "/Promo_2/come_9.jpeg",
    title: "LEUPRORELINA",
    description: "LORELIN 11.25MG SUSP FA 2ML",
  },
  {
    src: "/Promo_2/come_10.jpeg",
    title: "LABETALOL",
    description: "JOYALE-T 100 MG/20ML FC AMP",
  },
  {
    src: "/Promo_2/come_11.jpeg",
    title: "ESOMEPRAZOL",
    description: "TRONIUM IV 40 MG SOL INY",
  },
  {
    src: "/Promo_2/come_12.jpeg",
    title: "PISATRINA 160MG/800MG/3ML SOL INY C/6 AMP",
    description: "TRIMETOPRIMA/SULFAMETOXAZOL 160 MG/800 MG /3 ML C/6 AMP",
  },
  {
    src: "/Promo_2/come_13.jpeg",
    title: "TIGECICLINA",
    description: "GECIFHIL 50MG SOL INY",
  },
  {
    src: "/Promo_2/come_14.jpeg",
    title: "MOXIFLOXACINO",
    description: "AVELOX 400 MG TAB 7",
  },
  {
    src: "/Promo_2/come_15.jpeg",
    title: "VARAMYN®",
    description: "VANCOMICINA, 1 G CAJA C/1 FCO",
  },
  {
    src: "/Promo_2/come_16.jpeg",
    title: "RIVOCILVAR",
    description: "ACICLOVIR 250 MG C/5 FC",
  },
  {
    src: "/Promo_2/come_17.jpeg",
    title: "VARAMYN®",
    description: "VANCOMICINA, 500 MG CAJA C/1 FCO",
  },
  {
    src: "/Promo_2/come_18.jpeg",
    title: "ESMOLOL",
    description: "TIFESOLP 2.5 MG/10 ML C/2 AMP",
  },
];

const getWhatsAppLink = (title: string) => {
  const message = `Hola, quiero cotizar la promoción de: ${title}`;
  return `https://wa.me/525613143229?text=${encodeURIComponent(message)}`;
};

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
      setCurrent((prev) => (prev + 1) % promos.length);
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
            {promos.map((promo, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-72 bg-white rounded-3xl shadow-xl p-4 flex flex-col items-center"
              >
                <img
                  src={promo.src}
                  alt={promo.title}
                  className="h-56 object-contain mb-4"
                  loading="lazy"
                />

                <h3 className="text-lg font-bold text-gray-800 text-center">
                  {promo.title}
                </h3>

                <p className="text-sm text-gray-600 text-center mt-1">
                  {promo.description}
                </p>

                <a
                  href={getWhatsAppLink(promo.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold"
                >
                  Cotizar por WhatsApp
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative h-[460px] flex justify-center items-center mb-14">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (current + offset + promos.length) % promos.length;
              const promo = promos[index];
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={index}
                  className="absolute flex flex-col items-center"
                  animate={{
                    x: offset * 300,
                    scale: isCenter ? 1.15 : 0.85,
                    opacity: isCenter ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.8 }}
                  style={{ zIndex: isCenter ? 20 : 10 }}
                >
                  <img
                    src={promo.src}
                    alt={promo.title}
                    className="h-80 rounded-[2rem] shadow-2xl object-contain bg-white p-4"
                    draggable={false}
                  />

                  {isCenter && (
                    <div className="mt-4 text-center bg-white/90 backdrop-blur rounded-2xl p-4 w-80 shadow-xl">
                      <h3 className="text-xl font-bold text-gray-800">
                        {promo.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {promo.description}
                      </p>

                      <a
                        href={getWhatsAppLink(promo.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold"
                      >
                        Cotizar por WhatsApp
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}