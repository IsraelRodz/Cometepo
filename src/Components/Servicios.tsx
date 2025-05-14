// src/components/Servicios.tsx

export default function Servicios() {
    const servicios = [
      {
        titulo: 'Distribución nacional',
        descripcion: 'Servicio de distribución nacional garantizando calidad, seguridad y puntualidad.',
        imagen: '/public/Servicios/DISTRIBUCION_NACIONAL.jpg', // Asegúrate de tener esta imagen en public/assets/
      },
      {
        titulo: 'Almacenamiento especializado',
        descripcion: 'Servicio de almacenamiento especializado garantizando calidad, seguridad y puntualidad.',
        imagen: '/public/Servicios/ALMACENAMIENTO.jpg',
      },
      {
        titulo: 'Atención personalizada',
        descripcion: 'Servicio de atención personalizada garantizando calidad, seguridad y puntualidad.',
        imagen: '/public/Servicios/CALL.jpg',
      },
    ];
  
    return (
      <section id="servicios" className="bg-blue-100 py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-12 font-serif">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {servicios.map((servicio, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={servicio.imagen}
                alt={servicio.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-3">{servicio.titulo}</h3>
                <p className="text-gray-700 text-base">{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  