// src/components/Navbar.tsx
import { useState } from 'react';
import {
  FaUserFriends,
  FaEye,
  FaTruck,
  FaConciergeBell,
  FaEnvelope,
  FaCapsules,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed w-full z-50 font-medium text-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#principal"
          className="text-2xl md:text-3xl font-extrabold tracking-wide cursor-pointer transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 flex items-center gap-3"
        >
          <img
            src="/public/Laboratorios/COMEjpeg"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-blue-300 shadow-lg transition-transform duration-300 hover:scale-110 dark:border-cyan-400"
          />
          <span className="flex items-center gap-1">
            <span className="text-blue-600">Come</span>
            <FaCapsules className="text-cyan-500 text-xl md:text-2xl animate-pulseSlow" />
            <span className="text-cyan-500">Tepo</span>
          </span>
        </a>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <a
              href="#nosotros"
              className="flex items-center gap-2 transition-all duration-300 hover:text-blue-500 hover:underline hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <FaUserFriends /> Nosotros
            </a>
          </li>
          <li>
            <a
              href="#misionvision"
              className="flex items-center gap-2 transition-all duration-300 hover:text-blue-500 hover:underline hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <FaEye /> Misión y Visión
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              className="flex items-center gap-2 transition-all duration-300 hover:text-blue-500 hover:underline hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <FaConciergeBell /> Servicios
            </a>
          </li>
          <li>
            <a
              href="#proveedores"
              className="flex items-center gap-2 transition-all duration-300 hover:text-blue-500 hover:underline hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <FaTruck /> Proveedores
            </a>
          </li>
          
          <li>
            <a
              href="#contacto"
              className="flex items-center gap-2 transition-all duration-300 hover:text-blue-500 hover:underline hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <FaEnvelope /> Contáctanos
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 pt-2 space-y-4 text-lg bg-white shadow-md">
          <li>
            <a onClick={closeMenu} href="#nosotros" className="block">Nosotros</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#misionvision" className="block">Misión y Visión</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#servicios" className="block">Servicios</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#proveedores" className="block">Proveedores</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contacto" className="block">Contáctanos</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
