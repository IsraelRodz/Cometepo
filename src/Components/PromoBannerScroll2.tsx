import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const promos = [
  { src: "/Promo_2/vomifos.jpeg", title: "VOMIFOS 150MG", description: "Fosaprepitant – Solución inyectable" },
  { src: "/Promo_2/clodap.jpeg", title: "CLODAP 500MG", description: "Daptomicina – Solución inyectable" },
  { src: "/Promo_2/lunazol.jpeg", title: "LUNAZOL® 1G", description: "Paracetamol – Solución inyectable" },
  { src: "/Promo_2/candipres.jpeg", title: "CANDIPRES® 50MG", description: "Amfotericina B – Solución inyectable" },
  { src: "/Promo_2/raifol.jpeg", title: "RIAFOL", description: "Propofol 200 mg / 20 ml" },
  { src: "/Promo_2/capecita.jpeg", title: "SKEMCA 500MG", description: "Capecitabina – Caja con 120 tabletas" },
  { src: "/Promo_2/mexcikem.jpeg", title: "MEXCIKEM 200MG", description: "Ciclofosfamida – Solución inyectable" },
  { src: "/Promo_2/micofe.jpeg", title: "ACCOCEPT 500MG", description: "Ácido micofenólico – 50 tabletas" },
  { src: "/Promo_2/esomeprazol.jpeg", title: "ESOMEPRAZOL 40MG", description: "Tronium IV – Solución inyectable" },
  { src: "/Promo_2/rovular.jpeg", title: "ROVULVAR", description: "Bromuro de Rocuronio – 12 frascos" },
  { src: "/Promo_2/nodescron.jpeg", title: "NODESCRON®", description: "Bromuro de Vecuronio – 50 ampollas" },
  { src: "/Promo_2/ropiva.jpeg", title: "ANDUREST® 7.5MG", description: "Ropivacaina – 5 ampollas" },
  { src: "/Promo_2/ropiva_2.jpeg", title: "ANDUREST® 2MG", description: "Ropivacaina – 5 ampollas" },
  { src: "/Promo_2/ropi.jpeg", title: "NELVIK 150MG", description: "Ropivacaina – Solución inyectable" },
  { src: "/Promo_2/prolia.jpeg", title: "PROLIA", description: "Denosumab 60 mg/ml" },
  { src: "/Promo_2/esmolol.jpeg", title: "ESMOLOL", description: "Tifesolp – 2 ampollas" },
];

const getWhatsAppLink = (title: string) => {
  const message = `Hola, quiero cotizar la promoción de: ${title}`;
  return `https://wa.me/525613143229?text=${encodeURIComponent(message)}`;
};

export default function PromoBannerScroll() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const [search, setSearch] = useState("");
  const intervalRef = useRef<number | null>(null);

  // 🔍 FILTRO
  const filteredPromos = promos.filter((promo) =>
    `${promo.title} ${promo.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (isMobile || paused || filteredPromos.length === 0) return;

    intervalRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % filteredPromos.length);
    }, 4500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMobile, paused, filteredPromos.length]);

  // 🧨 NO RESULTADOS
  if (filteredPromos.length === 0) {
    return (
      <section className="px-4 my-20 text-center text-white">
        <h2 className="text-3xl font-bold">No se encontraron resultados</h2>
        <p className="mt-2 text-white/70">
          Intenta con otro nombre de medicamento
        </p>
      </section>
    );
  }

  return (
    <section id="promociones" className="px-4 my-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto rounded-[3rem] shadow-2xl bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 px-6 py-14">
        
        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold">
            Promociones especiales
          </h2>
          <p className="text-white/90 text-xl md:text-2xl mt-3">
            en medicamentos
          </p>
        </div>

        {/* 🔍 Buscador */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Buscar medicamento..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrent(0); // reset carrusel
            }}
            className="w-full max-w-xl px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/40 shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-800 font-medium"
          />
        </div>

        {/* Móvil */}
        {isMobile ? (
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-10 scrollbar-hide">
            {filteredPromos.map((promo, i) => (
              <motion.div
                key={i}
                className="snap-center shrink-0 w-72 bg-white/80 backdrop-blur-md border border-white/40 rounded-3xl shadow-xl p-5 flex flex-col items-center"
              >
                <img src={promo.src} className="h-56 object-contain mb-3" />
                <h3 className="text-xl font-extrabold text-center">
                  {promo.title}
                </h3>
                <p className="text-sm text-gray-500 text-center mt-1">
                  {promo.description}
                </p>
                <a
                  href={getWhatsAppLink(promo.title)}
                  target="_blank"
                  className="mt-4 w-full bg-green-500 text-white py-3 rounded-xl font-bold text-center"
                >
                  Cotizar por WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <div
            className="relative h-[520px] flex justify-center items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index =
                (current + offset + filteredPromos.length) %
                filteredPromos.length;
              const promo = filteredPromos[index];
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={index}
                  className="absolute flex flex-col items-center"
                  animate={{
                    x: offset * 320,
                    scale: isCenter ? 1.15 : 0.85,
                    opacity: isCenter ? 1 : 0.25,
                  }}
                >
                  <img
                    src={promo.src}
                    className="h-80 rounded-[2rem] shadow-2xl bg-white p-4"
                  />

                  {isCenter && (
                    <div className="mt-4 text-center bg-white/85 rounded-2xl p-5 w-96 shadow-2xl">
                      <h3 className="text-2xl font-extrabold">
                        {promo.title}
                      </h3>
                      <p className="text-gray-500 mt-1">
                        {promo.description}
                      </p>
                      <a
                        href={getWhatsAppLink(promo.title)}
                        target="_blank"
                        className="mt-4 w-full inline-block bg-green-500 text-white py-3 rounded-xl font-bold"
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
          {filteredPromos.map((_, i) => (
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