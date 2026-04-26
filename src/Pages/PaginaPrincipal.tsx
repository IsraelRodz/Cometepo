import Layout from "../Layout/Layout";
import Hero from "../Components/Hero";
import PromoBannerScroll2 from "../Components/PromoBannerScroll2";
import ExcelViewer from "../Components/ExcelViewer"; // 🔥 NUEVO
import Nosotros from "../Components/Nosotros";
import MisionVision from "../Components/MisionVision";
import Servicios from "../Components/Servicios";
import Proveedores from "../Components/Proveedores";
import Contacto from "../Components/Contacto";
import Footer from "../Components/Footer";

export default function PaginaPrincipal() {
  return (
    <Layout>
      {/* HERO */}
      <Hero />

      {/* PROMOCIONES */}
      <PromoBannerScroll2 />

      {/* CONTENIDO */}
      <Nosotros />
      <MisionVision />
      <Servicios />
      <Proveedores />

      {/* 🔥 CATÁLOGO (CLAVE PARA NAVBAR) */}
      <ExcelViewer />

      {/* CONTACTO */}
      <Contacto />

      {/* FOOTER */}
      <Footer />
    </Layout>
  );
}
