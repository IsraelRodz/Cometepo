import Layout from '../Layout/Layout';
import Hero from '../Components/Hero';
import PromoBannerScroll from '../Components/PromoBannerScroll';  // importado aquí
import Nosotros from '../Components/Nosotros';
import MisionVision from '../Components/MisionVision';
import Servicios from '../Components/Servicios';
import Proveedores from '../Components/Proveedores';
import Contacto from '../Components/Contacto';
import Footer from '../Components/Footer';

export default function PaginaPrincipal() {
  return (
    <Layout>
      <Hero />
      <PromoBannerScroll />  {/* Promoción justo después del Hero */}
      <Nosotros />
      <MisionVision />
      <Servicios />
      <Proveedores />
      <Contacto />
      <Footer />
    </Layout>
  );
}
