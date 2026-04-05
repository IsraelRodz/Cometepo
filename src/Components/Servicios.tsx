'use client';
import { useState } from 'react';

export default function Servicios() {
  const servicios = [
    {
      titulo: 'Distribución nacional',
      descripcion: 'Ofrecemos un servicio de distribución farmacéutica...',
      imagen: '/Servicios/DISTRIBUCION_1.jpg',
    },
    {
      titulo: 'Almacenamiento especializado',
      descripcion: 'Brindamos almacenamiento especializado...',
      imagen: '/Servicios/ALMACENAMIENTO_1.jpg',
    },
    {
      titulo: 'Atención personalizada',
      descripcion: 'Ofrecemos atención personalizada...',
      imagen: '/Servicios/CALL.jpg',
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="servicios">
      <h2 className="text-4xl text-center text-red-500 mb-10 font-bold">
        Nuestros Servicios
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {servicios.map((s, i) => (
          <div key={i} className="bg-white/5 rounded-2xl overflow-hidden backdrop-blur-md">
            <img src={s.imagen} className="w-full h-48 object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-center">{s.titulo}</h3>

              <p className={`${expanded === i ? '' : 'line-clamp-3'} text-gray-300`}>
                {s.descripcion}
              </p>

              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="text-red-500 mt-3"
              >
                {expanded === i ? 'Leer menos' : 'Leer más'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}