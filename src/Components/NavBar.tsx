import { useState } from 'react';
import { FaBars, FaTimes, FaCapsules } from 'react-icons/fa';

const links = [
  { name: 'Inicio', href: '#principal' },
  { name: 'Promos', href: '#promos' }, // 🔥 NUEVO
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proveedores', href: '#proveedores' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <a href="#principal" className="flex items-center gap-2 text-xl font-bold">
          <FaCapsules className="text-red-500" />
          <span>ComeTepo</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-red-500 transition relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 px-6 pb-6 space-y-4">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setOpen(false)} className="block">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}