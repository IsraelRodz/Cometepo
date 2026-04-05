import { FaBullseye, FaEye, FaHeartbeat } from 'react-icons/fa';

export default function MisionVision() {
  return (
    <section id="misionvision">
      <h2 className="text-4xl text-center text-red-500 mb-10 font-bold">
        Conócenos
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Misión */}
        <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md">
          <FaHeartbeat className="text-4xl text-red-500 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2 text-center">Misión</h3>
          <p className="text-gray-300">
            Satisfacer con calidad, eficiencia y responsabilidad...
          </p>
        </div>

        {/* Visión */}
        <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md">
          <FaEye className="text-4xl text-red-500 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2 text-center">Visión</h3>
          <p className="text-gray-300">
            Ser una empresa socialmente responsable...
          </p>
        </div>

        {/* Objetivo */}
        <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md">
          <FaBullseye className="text-4xl text-red-500 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2 text-center">Objetivo</h3>
          <p className="text-gray-300">
            Nuestro objetivo principal es brindar servicios...
          </p>
        </div>
      </div>
    </section>
  );
}