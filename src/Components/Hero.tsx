import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="principal"
      className="relative bg-cover bg-center bg-no-repeat text-white text-center py-24 px-6 max-[400px]:px-4 min-h-[90vh] transition-transform transform hover:scale-105 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="absolute inset-0 bg-blue-500 bg-opacity-50 z-0"></div>

      <div className="relative z-10 w-full md:w-1/2">
        <h1 className="text-4xl max-[400px]:text-2xl md:text-6xl font-extrabold leading-tight mb-6 transition-transform duration-300 hover:scale-105">
          Comercializadora De Medicamentos Tepotzotlan
        </h1>
        <p className="mt-4 text-lg max-[400px]:text-base md:text-2xl leading-relaxed max-w-xl mx-auto text-justify">
          Medicamentos al alcance de todos con distribución eficiente.
        </p>
        <div className="mt-8">
          <a
            href="#contacto"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 max-[400px]:py-2 max-[400px]:px-4 max-[400px]:text-base rounded-full text-lg shadow-md transition-transform duration-300 hover:scale-110 hover:bg-blue-100"
          >
            Contáctanos
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="relative z-10 mt-10 md:mt-0 w-full md:w-1/2 flex justify-center md:justify-start items-center md:pl-10"
      >
        <img
          src="/Laboratorios/COME.jpeg"
          alt="Logo de la empresa"
          className="w-48 max-[400px]:w-36 md:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square rounded-full object-contain border-4 border-white shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
