import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ['/img/1.jpg','/img/2.jpg','/img/3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="principal"
      className="relative min-h-[85vh] flex flex-col md:flex-row items-center justify-between rounded-3xl overflow-hidden"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="absolute inset-0 bg-blue-500/50" />

      <div className="relative z-10 w-full md:w-1/2 px-6 py-16 text-center md:text-left">

        <motion.h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Comercializadora
        </motion.h1>

        <h2 className="text-2xl sm:text-3xl md:text-5xl text-red-600 font-bold">
          De Medicamentos
        </h2>

        <h3 className="text-2xl sm:text-3xl md:text-5xl text-red-600 font-bold">
          Tepotzotlán
        </h3>

        <p className="mt-4 text-sm sm:text-lg md:text-xl text-white max-w-xl">
          Medicamentos al alcance de todos con distribución eficiente.
        </p>

        <a
          href="#contacto"
          className="mt-6 inline-block bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:scale-105"
        >
          Contáctanos
        </a>
      </div>

      <div className="relative z-10 w-full md:w-1/2 flex justify-center pb-10 md:pb-0">
        <img
          src="/Laboratorios/COME.jpeg"
          className="w-32 sm:w-48 md:w-72 rounded-full border-4 border-white shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;