const Contacto = () => {
  return (
    <section id="contacto" className="bg-blue-50 py-16 px-6 md:px-20 rounded-2xl">

      <h2 className="text-3xl md:text-5xl text-center text-blue-700 mb-10">
        Contáctanos
      </h2>

      <div className="flex flex-col md:flex-row gap-10">

        {/* INFO */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow text-center md:text-left">
          <p className="mb-2">📞 +52 55 7701 9526</p>
          <p className="mb-2">📞 +52 55 7701 9532</p>
          <p className="text-sm break-all">
            cotizaciones@comercializadoramedicamentostepotzotlan.mx
          </p>
        </div>

        {/* CTA */}
        <div className="flex-1 flex flex-col justify-center items-center gap-6">

          <p className="text-center max-w-md">
            Contáctanos directamente por WhatsApp para una respuesta inmediata.
          </p>

          <a
            href="https://wa.me/525613143229"
            className="bg-green-500 text-white px-6 py-3 rounded-xl text-lg font-bold hover:scale-105"
          >
            Cotizar por WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contacto;