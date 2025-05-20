'use client';

import { useState } from 'react';

export default function Servicios() {
  const servicios = [
    {
      titulo: 'Distribución nacional',
      descripcion:
        'Ofrecemos un servicio de distribución a nivel nacional, respaldado por una infraestructura eficiente y un equipo altamente capacitado, lo que nos permite garantizar los más altos estándares de calidad, seguridad y puntualidad. Nuestro compromiso es brindar soluciones logísticas confiables, adaptadas a las necesidades de cada cliente, optimizando tiempos de entrega y asegurando la integridad de cada envío durante todo el proceso. Nos posicionamos como un aliado estratégico para su empresa, impulsando su crecimiento a través de una cadena de suministro robusta y eficiente.',
      imagen: '/Servicios/DISTRIBUCION_1.jpg',
    },
    {
      titulo: 'Almacenamiento especializado',
      descripcion:
        'Brindamos un servicio de almacenamiento especializado, diseñado para satisfacer las exigencias de diferentes sectores, garantizando altos estándares de calidad, seguridad y puntualidad. Contamos con instalaciones modernas, sistemas de control avanzados y personal capacitado que aseguran la conservación, trazabilidad y disponibilidad oportuna de su mercancía. Nuestro enfoque está orientado a ofrecer soluciones logísticas integrales, adaptadas a las necesidades específicas de cada cliente, con el objetivo de optimizar sus procesos operativos y fortalecer su cadena de suministro.',
      imagen: '/Servicios/ALMACENAMIENTO_1.jpg',
    },
    {
      titulo: 'Atención personalizada',
      descripcion:
        'Ofrecemos un servicio de atención personalizada, orientado a brindar una experiencia excepcional a cada cliente, garantizando altos estándares de calidad, seguridad y puntualidad. Nuestro equipo está comprometido con comprender las necesidades específicas de cada usuario, proporcionando soluciones ágiles, cercanas y eficaces. A través de una comunicación clara y un acompañamiento constante, buscamos construir relaciones de confianza y largo plazo, aportando valor en cada interacción.',
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
          const descripcionCorta = servicio.descripcion.slice(0, 180) + '...';

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
                <p className="text-gray-700 text-base text-justify">
                  {isExpanded ? servicio.descripcion : descripcionCorta}
                </p>
                <button
                  onClick={() => toggleExpand(idx)}
                  className="mt-3 text-sm text-blue-600 hover:underline"
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
