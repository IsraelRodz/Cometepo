export default function Nosotros() {
    return (
      <section
        id="nosotros"
        className="relative bg-cover bg-center bg-no-repeat py-20 px-6 md:px-20 text-white text-center font-serif transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl"  // Agregando rounded-xl para bordes redondeados
        style={{ backgroundImage: "url('/medicamentos.jpg')" }}  // Ruta correcta
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">¿Quiénes Somos?</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-justify">
            Somos una empresa comprometida con la salud y el bienestar, dedicada a la distribución de medicamentos e insumos médicos. Nuestro portafolio cuenta con más de 15,000 productos que incluyen medicamentos de patente, genéricos y de alta especialidad. Buscamos mejorar continuamente para ofrecer soluciones confiables y accesibles para todos nuestros clientes.
          </p>
        </div>
      </section>
    );
}
