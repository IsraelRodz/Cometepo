import { useState, useEffect } from 'react';
import {
  FaUserFriends,
  FaEye,
  FaTruck,
  FaConciergeBell,
  FaEnvelope,
  FaCapsules,
  FaBars,
  FaTimes,
  FaTags,
} from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2'
        : 'bg-white/80 backdrop-blur-md py-3 md:py-4'
    }`}>

      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

        {/* LOGO */}
        <a href="#principal" className="flex items-center gap-2 text-xl md:text-2xl font-bold">
          <FaCapsules className="text-cyan-500 animate-pulse" />
          ComeTepo
        </a>

        {/* DESKTOP  para las promos*/}
        <ul className="hidden md:flex gap-6 text-lg items-center">
          <li><a href="#nosotros" className="hover:text-blue-500">Nosotros</a></li>
          <li><a href="#misionvision" className="hover:text-blue-500">Misión</a></li>
          <li><a href="#servicios" className="hover:text-blue-500">Servicios</a></li>
          <li><a href="#proveedores" className="hover:text-blue-500">Proveedores</a></li>

          {/* 🔥 PROMOS */}
          <li>
            <a href="#promo" className="bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-2 hover:scale-105">
              <FaTags /> Promos
            </a>
          </li>

          {/* CTA */}
          <li>
            <a href="#contacto" className="bg-blue-600 text-white px-4 py-1 rounded-full">
              Contacto
            </a>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-5 text-lg">
          <a onClick={() => setMenuOpen(false)} href="#nosotros">Nosotros</a>
          <a onClick={() => setMenuOpen(false)} href="#misionvision">Misión</a>
          <a onClick={() => setMenuOpen(false)} href="#servicios">Servicios</a>
          <a onClick={() => setMenuOpen(false)} href="#proveedores">Proveedores</a>

          <a onClick={() => setMenuOpen(false)} href="#promo" className="block bg-red-500 text-white py-2 rounded text-center">
            Promociones
          </a>

          <a onClick={() => setMenuOpen(false)} href="#contacto" className="block bg-blue-600 text-white py-2 rounded text-center">
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;