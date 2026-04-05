// src/components/MisionVision.tsx
import { FaBullseye, FaEye, FaHeartbeat } from 'react-icons/fa';

// Sección que muestra la misión, visión y objetivo de la empresa con estilo interactivo
const MisionVision = () => {
  return (
    <section
      id="misionvision"
      className="bg-blue-50 rounded-2xl py-16 px-6 md:px-20 text-center shadow-md"
    >
      <h2 className="text-5xl font-extrabold text-blue-700 mb-12 font-serif tracking-wide">
        Conocenos
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Misión */}
        <div className="transition-transform duration-300 hover:scale-105 p-4">
          <div className="flex justify-center mb-4 text-5xl text-red-600">
            <FaHeartbeat />
          </div>
          <h3 className="text-2xl font-bold text-red-700 mb-3 cursor-pointer transition-transform hover:scale-105">
            Misión
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed hover:text-lg transition-all duration-200">
            Satisfacer con calidad, eficiencia y responsabilidad los deseos y necesidades de nuestros clientes, 
            permitiéndonos ofrecer productos farmacéuticos acompañados de un excelente servicio. Nos apoyamos en el desarrollo integral 
            de nuestro personal especializado, con un firme compromiso con el medio ambiente y la comunidad en el cuidado de su salud.
          </p>
        </div>

        {/* Visión */}
        <div className="transition-transform duration-300 hover:scale-105 p-4">
          <div className="flex justify-center mb-4 text-5xl text-red-600">
            <FaEye />
          </div>
          <h3 className="text-2xl font-bold text-red-700 mb-3 cursor-pointer transition-transform hover:scale-105">
            Visión
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed hover:text-lg transition-all duration-200">
            Ser una empresa socialmente responsable que se distinga por su innovación, liderazgo y cumplimiento normativo. 
            Orgullosamente 100% mexicana, buscamos construir relaciones comerciales sólidas con nuestros clientes y aliados para impulsar nuevos negocios.
          </p>
        </div>

        {/* Objetivo */}
        <div className="transition-transform duration-300 hover:scale-105 p-4">
          <div className="flex justify-center mb-4 text-5xl text-red-600">
            <FaBullseye />
          </div>
          <h3 className="text-2xl font-bold text-red-700 mb-3 cursor-pointer transition-transform hover:scale-105">
            Objetivo
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed hover:text-lg transition-all duration-200">
            Nuestro objetivo principal es brindar servicios de valor agregado que favorezcan la comercialización y distribución 
            de productos farmacéuticos. Para ello, la dirección se compromete con la mejora continua en la atención al cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MisionVision;