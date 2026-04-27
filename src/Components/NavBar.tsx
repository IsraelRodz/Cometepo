// src/components/Navbar.tsx
import { useEffect, useState } from "react";
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
  FaFileExcel,
} from "react-icons/fa";

const sections = 
[
  "nosotros",
  "misión y visión",
  "servicios",
  "proveedores",
  "catálogo",
  "promociones",
  "contacto",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("nosotros");
  const [scrolled, setScrolled] = useState(false);

  // Detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "nosotros";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.offsetTop - 140;
          if (window.scrollY >= offset) {
            current = id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll suave con offset
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  const linkClass = (id: string) =>
    `flex items-center gap-2 px-2 py-1 transition-all duration-300 ${
      active === id
        ? "text-blue-600 font-bold scale-105"
        : "hover:text-blue-500 hover:scale-105"
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg py-2"
          : "bg-white/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <div
          onClick={() => handleScrollTo("principal")}
          className="text-2xl md:text-3xl font-extrabold cursor-pointer flex items-center gap-3 hover:scale-105 transition"
        >
          <img
            src="/Laboratorios/COME.jpeg"
            className="w-10 h-10 rounded-full border-2 border-blue-300 shadow"
          />
          <span className="flex items-center gap-1">
            <span className="text-blue-600">Come</span>
            <FaCapsules className="text-cyan-500 animate-pulse" />
            <span className="text-cyan-500">Tepo</span>
          </span>
        </div>

        {/* MOBILE BTN */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-5 text-sm lg:text-base">
          <li onClick={() => handleScrollTo("nosotros")} className={linkClass("nosotros")}>
            <FaUserFriends /> Nosotros
          </li>

          <li onClick={() => handleScrollTo("misionvision")} className={linkClass("misionvision")}>
            <FaEye /> Misión
          </li>

          <li onClick={() => handleScrollTo("servicios")} className={linkClass("servicios")}>
            <FaConciergeBell /> Servicios
          </li>

          <li onClick={() => handleScrollTo("proveedores")} className={linkClass("proveedores")}>
            <FaTruck /> Proveedores
          </li>

          {/* CATÁLOGO */}
          <li onClick={() => handleScrollTo("catalogo")}>
            <span
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-white shadow-md transition ${
                active === "catalogo"
                  ? "bg-green-700 scale-105"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              <FaFileExcel /> Catálogo
            </span>
          </li>

          {/* PROMOS */}
          <li onClick={() => handleScrollTo("promociones")}>
            <span
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-white shadow-md transition ${
                active === "promociones"
                  ? "bg-blue-700 scale-105"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500"
              }`}
            >
              <FaTags /> Promos
            </span>
          </li>

          <li onClick={() => handleScrollTo("contacto")} className={linkClass("contacto")}>
            <FaEnvelope /> Contacto
          </li>
        </ul>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 pt-2 space-y-4 bg-white shadow-md">
          {sections.map((sec) => (
            <li
              key={sec}
              onClick={() => handleScrollTo(sec)}
              className="capitalize cursor-pointer"
            >
              {sec}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;