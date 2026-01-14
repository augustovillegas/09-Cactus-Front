import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link, Element, scroller } from "react-scroll";
import { MarqueeLogistic } from "../helpers/MarqueeLogistic";
import { Destacados } from "../components/Destacados";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    scroller.scrollTo(location.state.scrollTo, {
      smooth: true,
      duration: 500,
      offset: -40,
    });
  }, [location.state]);

  return (
    <div>
      <Element name="Inicio">
        {/* HERO */}
        <header className="bg-black text-white py-5">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-12 px-6">
            {/* Seccion de Texto */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Accesorios <span className="text-yellow-500">Premium</span> para
                tu <span className="text-gray-400">iPhone</span>
              </h1>
              <p className="text-md mb-6">
                Diseñados para proteger y mejorar tu experiencia. ¡Explora
                nuestra coleccion hoy!
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
                Envio gratis en compras mayores a $50.000
              </p>
            </div>
            {/* Seccion de Imagen */}
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
          <div className="container mx-auto py-8 px-4 flex flex-col justify-center gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Productos</h3>
                <p className="text-sm text-gray-500">
                  Encuentra lo mas buscado en accesorios Apple
                </p>
              </div>
              <RouterLink
                to="/productos"
                className="inline-flex items-center justify-center border border-gray-900 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
              >
                Ver todos
              </RouterLink>
            </div>
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
                <img src="icons/cards/eye.svg" alt="" className="filter invert" />
              </a>
            </button>
          </div>
        </section>
      </Element>

    </div>
  );
};


