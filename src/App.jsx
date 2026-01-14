import React from "react";
import { Navbar } from "./components/Navbar";
import { MarqueeLogistic } from "./helpers/MarqueeLogistic";
import { Destacados } from "./components/Destacados";
import { Link, Element } from "react-scroll";
import { WhatsApp } from "./components/WhatsApp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const App = () => {
  return (
    <div>
      {/* Icono Whatsapp */}
      <div>
        <WhatsApp />
      </div>

      <Element name="Inicio">
        {/* MENU */}
        <nav>
          <Navbar />
        </nav>

        {/* HERO */}
        <header className="bg-black text-white py-5">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-12 px-6">
            {/* Sección de Texto */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Accesorios <span className="text-yellow-500">Premium</span> para
                tu <span className="text-gray-400">iPhone</span>
              </h1>
              <p className="text-md mb-6">
                Diseñados para proteger y mejorar tu experiencia. ¡Explora
                nuestra colección hoy!
              </p>
              <Link
                to="Productos"
                smooth={true}
                duration={500}
                offset={-40}
                className="flex items-center justify-center md:justify-start mx-auto md:mx-0 bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-400 hover:scale-105 transition duration-500"
                style={{ maxWidth: "fit-content" }}
              >
                <span>Explorar productos</span>
                <LazyLoadImage
                  src="icons/hero/bx-right-arrow-circle.svg"
                  alt="Flecha"
                  className="ml-2 w-4 h-4"
                  effect="blur"
                />
              </Link>
              <p className="text-center md:text-left text-xs text-gray-400 mt-4">
                Envío gratis en compras mayores a $50.000
              </p>
            </div>
            {/* Sección de Imagen */}
            <div>
              <LazyLoadImage
                src="hero.jpg"
                alt="Accesorios para iPhone"
                className="rounded-lg shadow-lg"
                effect="blur"
              />
            </div>
          </div>
        </header>
      </Element>

      {/* LOGISTIC */}
      <section className="bg-yellow-400">
        <MarqueeLogistic />
      </section>

      {/* DESTACADOS */}
      <Element name="Destacados">
        <section className="py-16 md:py-20 bg-destacados ">
          <Destacados />
        </section>
      </Element>

      {/* EXPLORAR */}
      <Element name="Productos">
        <section className="pt-6 md:pt-12 bg-gray-100">
          <div className="container mx-auto py-8 px-4 flex flex-col justify-center">
            <div className="grid grid-cols-4 grid-rows-3 md:grid-cols-3 md:grid-rows-3 gap-4">
              {/* Auriculares */}
              <div className="col-span-2 md:col-span-1 md:row-span-3 bg-[url('/category/Auriculares.jpg')] bg-cover bg-center rounded-lg flex items-center justify-center h-[300px] sm:h-full hover:scale-105 transition duration-500">
                <p className="text-white text-xl sm:text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
                  Auriculares
                </p>
              </div>

              {/* Accesorios */}
              <div className="col-span-2 md:col-span-1 md:row-span-2 bg-[url('/category/Accesorio1.jpg')] bg-cover bg-center rounded-lg flex items-center justify-center md:h-38 hover:scale-105 transition duration-500">
                <p className="text-black text-xl sm:text-2xl font-bold bg-white bg-opacity-70 px-4 py-2 rounded">
                  Accesorios
                </p>
              </div>

              {/* Cables */}
              <div className="col-span-4 row-span-1 md:col-span-1 bg-[url('/category/Cable2.jpg')] bg-cover bg-center rounded-lg flex items-center justify-center md:h-36 hover:scale-105 transition duration-500">
                <p className="text-white text-xl sm:text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
                  Cables
                </p>
              </div>

              {/* Cases */}
              <div className="col-span-4 row-span-1 md:col-span-1 md:row-span-2 bg-[url('/category/Case2.jpg')] bg-cover bg-center rounded-lg flex items-center justify-center h-46 hover:scale-105 transition duration-500">
                <p className="text-black text-xl sm:text-2xl font-bold bg-white bg-opacity-70 px-4 py-2 rounded">
                  Cases
                </p>
              </div>

              {/* Cargadores */}
              <div className="col-span-4 md:col-span-1 bg-[url('/category/Charger4.jpg')] bg-cover bg-center rounded-lg flex items-center justify-center h-40 md:h-36 hover:scale-105 transition duration-500">
                <p className="text-white text-xl sm:text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
                  Cargadores
                </p>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* SAVE OFF */}
      <Element name="Ofertas">
        <section className="bg-gray-300">
          <div className="container mx-auto text-center px-4 py-10 mt-8">
            <h2 className="text-3xl font-bold mb-4">Ofertas Exclusivas</h2>
            <p className="text-lg mb-6">
              Aprovecha nuestras promociones limitadas y consigue los mejores
              precios.
            </p>
            <button className="bg-black text-white font-semibold px-7 py-3 rounded-lg shadow hover:bg-yellow-400 hover:text-black transition duration-500">
              <a href="#productos">
                <img
                  src="icons/cards/eye.svg"
                  alt=""
                  className="filter invert"
                />
              </a>
            </button>
          </div>
        </section>
      </Element>

      {/* FOOTER */}
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
                <span className="font-bold text-yellow-400">10% OFF</span> en
                los productos suscribiéndote para enterarte de novedades y
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
                  alt="Banco Nación"
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

              {/* Información */}
              <div className="hidden md:block">
                <p className="text-gray-300 text-lg font-semibold mb-2">
                  Información
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
            {/* Enlaces Rápidos */}
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
                Términos y Condiciones
              </a>
              <span className="text-gray-500 hidden md:inline">|</span>
              <a
                href="#"
                className="hover:text-yellow-400 text-xs leading-tight flex items-center gap-1"
              >
                Política de Envíos
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
    </div>
  );
};

