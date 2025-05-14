// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white text-center py-6 mt-16 rounded-t-2xl shadow-inner px-4">
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Comercializadora de Medicamentos Tepotzotlan. Todos los derechos reservados.
      </p>
    </footer>
  );
}