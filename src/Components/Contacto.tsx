// src/components/Contacto.tsx

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
      className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl py-16 px-6 md:px-20 shadow-lg"
    >
      <h2 className="text-5xl font-extrabold text-blue-700 mb-10 font-serif tracking-wide text-center">
        Contáctanos
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Lado izquierdo - Información de contacto */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg text-blue-800 text-lg space-y-6 border border-blue-200">
          <div className="flex items-start gap-4">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-2xl text-green-600" />
            <div className="flex flex-col space-y-2 justify-start text-justify">
              <span>+52 55 7701 9526</span>
              <span>+52 55 7701 9532</span>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-red-600" />
            <span>cotizaciones@comercializadoramedicamentostepotzotlan.mx</span>
          </div>
        </div>

        {/* Lado derecho - Redes sociales */}
        <div className="flex-1 text-center">
          <p className="text-gray-700 mb-8 text-lg max-w-md mx-auto text-justify">
            Estamos disponibles en nuestras redes sociales para resolver tus dudas y brindarte una mejor atención.
          </p>

          <div className="flex justify-center gap-12 text-5xl">
            <a
              href="https://www.facebook.com/share/18jFLCXbWw/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-all duration-300 ease-in-out transform hover:scale-150"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 transition-all duration-300 ease-in-out transform hover:scale-150"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.instagram.com/cometepo?igsh=cWU4b2FmbmF3cXNy&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 transition-all duration-300 ease-in-out transform hover:scale-150"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-all duration-300 ease-in-out transform hover:scale-150"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
