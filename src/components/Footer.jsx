import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-3 font-mono">
      <div className="container mx-auto px-4">
        {/* Redes Sociales y Seguinos */}
        <div className="flex flex-wrap justify-end items-center gap-3 py-2">
          <p className="text-[0.8rem] font-semibold text-gray-400 hidden md:inline">
            Seguinos en nuestras redes:
          </p>
          <a href="#" aria-label="Tiktok" className="social">
            <LazyLoadImage
              src="icons/social/tiktok-logo-48.png"
              alt="Tiktok"
              className="w-5 h-auto"
              effect="blur"
            />
          </a>
          <a href="#" aria-label="Instagram" className="social">
            <LazyLoadImage
              src="icons/social/instagram-logo-48.png"
              alt="Instagram"
              className="w-5 h-auto"
              effect="blur"
            />
          </a>
          <a href="#" aria-label="Facebook" className="social">
            <LazyLoadImage
              src="icons/social/facebook-logo-48.png"
              alt="Facebook"
              className="w-5 h-auto"
              effect="blur"
            />
          </a>
        </div>

        {/* Secciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 items-center px-4 md:px-8 py-6 md:py-10">
          {/* Logo */}
          <div className="flex flex-col items-center justify-center -space-y-2">
            <LazyLoadImage
              src="Logo mordida.png"
              alt="Logo"
              className="w-20 h-auto object-contain"
              effect="blur"
            />
            <p className="font-bold text-yellow-400 text-center md:text-left text-lg">
              Cactus
            </p>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-3 md:space-y-7">
            <p className="text-gray-300 text-lg font-semibold">Newsletter</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md md:max-w-sm">
              Consigue un{" "}
              <span className="font-bold text-yellow-400">10% OFF</span> en los
              productos suscribiendote para enterarte de novedades y
              promociones.
            </p>
            <div className="flex items-stretch border border-white rounded-lg overflow-hidden shadow-md">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                autoCapitalize="off"
                aria-label="Email"
                autoComplete="off"
                className="h-10 px-4 text-sm text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 w-full"
              />
              <button className="px-6 bg-black text-white border-l border-white font-semibold text-sm hover:bg-yellow-500 hover:text-black transition-colors">
                Enviar
              </button>
            </div>
          </div>

          {/* Medios de Pago */}
          <div className="flex flex-col items-center space-y-3 md:items-start md:space-y-4">
            <p className="text-gray-300 text-lg font-semibold">
              Medios de Pago
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
              <LazyLoadImage
                src="icons/payments/visa.svg"
                alt="Visa"
                className="w-8 h-auto md:w-9"
                effect="blur"
              />
              <LazyLoadImage
                src="icons/payments/mastercard.svg"
                alt="Master Card"
                className="w-8 h-auto md:w-9"
                effect="blur"
              />
              <LazyLoadImage
                src="icons/payments/maestro.svg"
                alt="Maestro"
                className="w-8 h-auto md:w-9"
                effect="blur"
              />
              <LazyLoadImage
                src="icons/payments/american-express.svg"
                alt="American Express"
                className="w-8 h-auto md:w-9"
                effect="blur"
              />
              <LazyLoadImage
                src="icons/payments/tarjeta-naranja.png"
                alt="Naranja X"
                className="w-8 h-8 md:w-9 md:h-9 object-contain"
                effect="blur"
              />
              <LazyLoadImage
                src="icons/payments/nativa.png"
                alt="Banco Nacion"
                className="w-8 h-8 md:w-9 md:h-9 object-contain"
                effect="blur"
              />
              <LazyLoadImage
                src="icons/payments/mercado-pago.svg"
                alt="Mercado Pago"
                className="w-8 h-auto md:w-9"
                effect="blur"
              />
            </div>

            {/* Informacion */}
            <div className="hidden md:block">
              <p className="text-gray-300 text-lg font-semibold mb-2">
                Informacion
              </p>
              <p>Catamarca, Capital - Argentina</p>
              <p>Tel.: (383)-4373389</p>
              <p>cactustecnologia@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-5"></div>

        <div className="flex flex-col items-center text-center text-sm text-gray-400 px-4 space-y-4">
          {/* Enlaces Rapidos */}
          <nav className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-gray-400">
            <a
              href="#"
              className="hover:text-yellow-400 text-xs leading-tight flex items-center gap-1"
            >
              Preguntas frecuentes
            </a>
            <span className="text-gray-500 hidden md:inline">|</span>
            <a
              href="#"
              className="hover:text-yellow-400 text-xs leading-tight flex items-center gap-1"
            >
              Terminos y Condiciones
            </a>
            <span className="text-gray-500 hidden md:inline">|</span>
            <a
              href="#"
              className="hover:text-yellow-400 text-xs leading-tight flex items-center gap-1"
            >
              Politica de Envios
            </a>
            <span className="text-gray-500 hidden md:inline">|</span>
            <a
              href="#"
              className="hover:text-yellow-400 text-xs leading-tight flex items-center gap-1"
            >
              Cambios y Devoluciones
            </a>
            <span className="text-gray-500 hidden md:inline">|</span>
            <a
              href="#"
              className="hover:text-yellow-400 text-xs leading-tight flex items-center gap-1"
            >
              Contacto
            </a>
          </nav>
          <p className="text-[0.9rem] text-gray-500">
            &copy; 2025 #Cactus - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
