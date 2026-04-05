import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="principal"
      className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center text-center overflow-hidden rounded-3xl"
      style={{ backgroundImage: `url(${images[currentImage]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-2xl px-6">
        <motion.h1 className="text-4xl md:text-6xl font-extrabold">
          Comercializadora
        </motion.h1>

        <h2 className="text-4xl md:text-6xl font-extrabold text-red-500">
          De Medicamentos
        </h2>

        <h3 className="text-4xl md:text-6xl font-extrabold text-red-500">
          Tepotzotlán
        </h3>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Medicamentos al alcance de todos con distribución eficiente.
        </p>

        <a
          href="#contacto"
          className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold transition"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
}