import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const promos = [
  {
    src: "/Promo_2/vomifos.jpeg",
    title: "VOMIFOS 150MG",
    description: "Fosaprepitant – Solución inyectable",
  },
  {
    src: "/Promo_2/clodap.jpeg",
    title: "CLODAP 500MG",
    description: "Daptomicina – Solución inyectable",
  },
  {
    src: "/Promo_2/lunazol.jpeg",
    title: "LUNAZOL® 1G",
    description: "Paracetamol – Solución inyectable",
  },
  {
    src: "/Promo_2/candipres.jpeg",
    title: "CANDIPRES® 50MG",
    description: "Amfotericina B – Solución inyectable",
  },
  {
    src: "/Promo_2/raifol.jpeg",
    title: "RIAFOL",
    description: "Propofol 200 mg / 20 ml",
  },
  {
    src: "/Promo_2/capecita.jpeg",
    title: "SKEMCA 500MG",
    description: "Capecitabina – Caja con 120 tabletas",
  },
  {
    src: "/Promo_2/mexcikem.jpeg",
    title: "MEXCIKEM 200MG",
    description: "Ciclofosfamida – Solución inyectable",
  },
  {
    src: "/Promo_2/micofe.jpeg",
    title: "ACCOCEPT 500MG",
    description: "Ácido micofenólico – 50 tabletas",
  },
  {
    src: "/Promo_2/esomeprazol.jpeg",
    title: "ESOMEPRAZOL 40MG",
    description: "Tronium IV – Solución inyectable",
  },
  {
    src: "/Promo_2/rovular.jpeg",
    title: "ROVULVAR",
    description: "Bromuro de Rocuronio – 12 frascos",
  },
  {
    src: "/Promo_2/nodescron.jpeg",
    title: "NODESCRON®",
    description: "Bromuro de Vecuronio – 50 ampollas",
  },
  {
    src: "/Promo_2/ropiva.jpeg",
    title: "ANDUREST® 7.5MG",
    description: "Ropivacaina – 5 ampollas",
  },
  {
    src: "/Promo_2/ropiva_2.jpeg",
    title: "ANDUREST® 2MG",
    description: "Ropivacaina – 5 ampollas",
  },
  {
    src: "/Promo_2/ropi.jpeg",
    title: "NELVIK 150MG",
    description: "Ropivacaina – Solución inyectable",
  },
  {
    src: "/Promo_2/prolia.jpeg",
    title: "PROLIA",
    description: "Denosumab 60 mg/ml",
  },
  {
    src: "/Promo_2/esmolol.jpeg",
    title: "ESMOLOL",
    description: "Tifesolp – 2 ampollas",
  },
];

const getWhatsAppLink = (title: string) => {
  const message = `Hola, quiero cotizar la promoción de: ${title}`;
  return `https://wa.me/525613143229?text=${encodeURIComponent(message)}`;
};

export default function PromoBannerScroll() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (isMobile || paused) return;

    intervalRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % promos.length);
    }, 4500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMobile, paused]);

  return (
    <section className="px-4 my-20">
      <div className="max-w-7xl mx-auto rounded-[3rem] shadow-2xl bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 px-6 py-14">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-xl">
            Promociones especiales
          </h2>
          <p className="text-white/90 text-xl md:text-2xl mt-3">
            en medicamentos
          </p>
        </div>

        {/* Móvil */}
        {isMobile ? (
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-10 scrollbar-hide">
            {promos.map((promo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="snap-center shrink-0 w-72 bg-white/80 backdrop-blur-md border border-white/40 rounded-3xl shadow-xl p-5 flex flex-col items-center"
              >
                <img
                  src={promo.src}
                  alt={promo.title}
                  className="h-56 object-contain mb-3 drop-shadow-md"
                />

                <h3 className="text-xl font-extrabold text-gray-800 text-center leading-tight">
                  {promo.title}
                </h3>

                <p className="text-sm text-gray-500 text-center mt-1">
                  {promo.description}
                </p>

                <a
                  href={getWhatsAppLink(promo.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold shadow-lg text-center"
                >
                  Cotizar por WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Escritorio */
          <div
            className="relative h-[520px] flex justify-center items-center mb-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (current + offset + promos.length) % promos.length;
              const promo = promos[index];
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={index}
                  className="absolute flex flex-col items-center cursor-pointer"
                  animate={{
                    x: offset * 320,
                    scale: isCenter ? 1.15 : 0.85,
                    opacity: isCenter ? 1 : 0.25,
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
                    <div className="mt-4 text-center bg-white/85 backdrop-blur-md border border-white/40 rounded-2xl p-5 w-96 shadow-2xl">
                      <h3 className="text-2xl font-extrabold text-gray-800">
                        {promo.title}
                      </h3>
                      <p className="text-gray-500 mt-1">
                        {promo.description}
                      </p>

                      <a
                        href={getWhatsAppLink(promo.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 w-full inline-block bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold shadow-lg"
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

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {promos.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === current ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}