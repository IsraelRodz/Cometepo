'use client';

import { useState } from 'react';

export default function Servicios() {
  const servicios = [
    {
      titulo: 'Distribución nacional',
      descripcion:
        'Ofrecemos un servicio de distribución farmacéutica a nivel nacional, asegurando la entrega segura y puntual de medicamentos y productos sanitarios. Contamos con una infraestructura especializada y un equipo altamente capacitado para manejar productos sensibles bajo estrictas normas de calidad y seguridad, garantizando la integridad y conservación de cada envío desde su origen hasta su destino.',
      imagen: '/Servicios/DISTRIBUCION_1.jpg',
    },
    {
      titulo: 'Almacenamiento especializado',
      descripcion:
        'Brindamos almacenamiento especializado para productos farmacéuticos, cumpliendo con las normativas vigentes en materia de conservación y control de temperatura. Nuestras instalaciones están equipadas con tecnología avanzada para garantizar la trazabilidad, seguridad y calidad de los medicamentos, asegurando su óptimo estado hasta el momento de la distribución.',
      imagen: '/Servicios/ALMACENAMIENTO_1.jpg',
    },
    {
      titulo: 'Atención personalizada',
      descripcion:
        'Ofrecemos atención personalizada a nuestros clientes del sector farmacéutico, con un equipo experto dedicado a entender sus necesidades específicas. Proporcionamos soluciones logísticas integrales, asesoramiento técnico y un acompañamiento continuo para asegurar la máxima satisfacción y cumplimiento normativo en cada operación.',
      imagen: '/Servicios/CALL.jpg',
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <section id="servicios" className="bg-blue-100 py-20 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-12 font-serif">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {servicios.map((servicio, idx) => {
          const isExpanded = expanded === idx;

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={servicio.imagen}
                alt={servicio.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-blue-600 mb-3 text-center">{servicio.titulo}</h3>
                <p
                  className={`text-gray-700 text-base text-justify transition-all duration-300 ease-in-out
                    ${!isExpanded ? 'line-clamp-4' : ''}`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {servicio.descripcion}
                </p>
                <button
                  onClick={() => toggleExpand(idx)}
                  className="mt-3 text-sm text-blue-600 hover:underline"
                  aria-expanded={isExpanded}
                  aria-controls={`descripcion-${idx}`}
                >
                  {isExpanded ? 'Leer menos' : 'Leer más'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
