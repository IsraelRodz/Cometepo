// src/components/Proveedores.tsx

export default function Proveedores() {
    const proveedores = [
      'lab_.jpeg',
      'lab_1.jpeg',
      'lab_2.jpeg',
      'lab_3.png',
      'lab_4.jpeg',
      'pisa.jpg',
      'LAB_7.jpg',
      'LAB_8.jpg',
      'LAB_9.jpg',
      'LAP_10.jpg',
      'LAB_11.jpg',
      'LAB_12.jpg',
      'LAB_14.jpeg',
      'lab_15.png',
      'lab_16.png',
      'lab_17.jpg',
      'lab_18.jpg',
    ];
  
    return (
      <section
        id="proveedores"
        className="bg-white py-24 px-6 md:px-20 text-center scroll-mt-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 font-serif">
          Nuestros Proveedores
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          Trabajamos con laboratorios líderes para garantizar calidad y confianza.
        </p>
  
        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
          {proveedores.map((nombreArchivo, idx) => (
            <div
              key={idx}
              className="group w-52 h-52 md:w-64 md:h-64 bg-gradient-to-br from-white to-blue-50 p-3 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-500"
            >
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105 group-hover:rotate-1">
                <img
                  src={`/Laboratorios/${nombreArchivo}`}
                  alt={`Proveedor ${idx + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/Laboratorios/default.jpg';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  