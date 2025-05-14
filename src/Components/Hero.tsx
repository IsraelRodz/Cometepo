// src/components/Hero.tsx

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
      className="relative bg-cover bg-center bg-no-repeat text-white text-center py-24 px-8 md:px-28 min-h-[90vh] transition-transform transform hover:scale-105 rounded-3xl overflow-hidden md:flex md:items-center md:justify-between"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="absolute inset-0 bg-blue-500 bg-opacity-50 z-0"></div>

      <div className="relative z-10 md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 transition-transform duration-300 hover:scale-105">
          Comercializadora De Medicamentos Tepotzotlan
        </h1>
        <p className="mt-4 text-xl md:text-2xl leading-relaxed max-w-xl mx-auto text-justify">
          Medicamentos al alcance de todos con distribución eficiente.
        </p>
        <div className="mt-8">
          <a
            href="#contacto"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-full text-lg shadow-md transition-transform duration-300 hover:scale-110 hover:bg-blue-100"
          >
            Contáctanos
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="relative z-10 mt-10 md:mt-0 md:w-1/2 flex justify-start items-center md:pl-10"
      >
        <img
          src="/public/Laboratorios/cometepo.svg.jpeg"
          alt="Logo de la empresa"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square rounded-full object-contain border-4 border-white shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
