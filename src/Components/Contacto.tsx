import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

const Contacto = () => {
  return (
    <section
      id="contacto"
      className="bg-black/80 backdrop-blur-lg rounded-3xl py-16 px-6 md:px-20 shadow-2xl border border-white/10"
    >
      {/* Título */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-12 text-center">
        Contáctanos
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Lado izquierdo */}
        <div className="flex-1 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 space-y-6 text-gray-300">
          
          {/* Teléfonos */}
          <div className="flex items-start gap-4">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-2xl text-green-500" />
            <div className="flex flex-col space-y-2">
              <a href="tel:+525577019526" className="hover:text-white transition">
                +52 55 7701 9526
              </a>
              <a href="tel:+525577019532" className="hover:text-white transition">
                +52 55 7701 9532
              </a>
            </div>
          </div>

          {/* Correo */}
          <div className="flex items-start gap-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-red-500" />
            <a
              href="mailto:cotizaciones@comercializadoramedicamentostepotzotlan.mx"
              className="break-all hover:text-white transition"
            >
              cotizaciones@comercializadoramedicamentostepotzotlan.mx
            </a>
          </div>
        </div>

        {/* Lado derecho */}
        <div className="flex-1 text-center">
          <p className="text-gray-400 mb-8 text-base md:text-lg leading-relaxed max-w-md mx-auto">
            Estamos disponibles en nuestras redes sociales para resolver tus dudas y brindarte una mejor atención.
          </p>

          <div className="flex justify-center flex-wrap gap-6 text-3xl md:text-4xl">
            
            <a
              href="https://www.facebook.com/share/18jFLCXbWw/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-full hover:bg-blue-600 transition"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              href="https://wa.me/525613143229"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-full hover:bg-green-500 transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a
              href="https://www.instagram.com/cometepo?igsh=cWU4b2FmbmF3cXNy&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-full hover:bg-pink-500 transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-full hover:bg-blue-500 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="tel:+525613143229"
              className="bg-white/10 p-4 rounded-full hover:bg-green-600 transition"
            >
              <FontAwesomeIcon icon={faPhoneAlt} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;