import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useShop } from "../context/ShopContext";

export const WishlistMenu = () => {
  const { itemsDeseos } = useShop();
  const [estaAbierto, setEstaAbierto] = useState(false);
  const contenedorRef = useRef(null);

  useEffect(() => {
    const manejarClickFuera = (event) => {
      if (contenedorRef.current && !contenedorRef.current.contains(event.target)) {
        setEstaAbierto(false);
      }
    };

    document.addEventListener("mousedown", manejarClickFuera);
    return () => document.removeEventListener("mousedown", manejarClickFuera);
  }, []);

  const alternarMenu = () => {
    setEstaAbierto((prev) => !prev);
  };

  const ultimosItems = itemsDeseos.slice(-3).reverse();

  return (
    <div className="relative" ref={contenedorRef}>
      <div onClick={alternarMenu} className="cursor-pointer">
        <img
          src="icons/navbar/heart.svg"
          alt="Lista de deseos"
          className="w-5 h-5 invert"
        />
        {itemsDeseos.length > 0 && (
          <span className="absolute -top-3 left-3 md:left-4 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            {itemsDeseos.length}
          </span>
        )}
      </div>

      {estaAbierto && (
        <div className="fixed md:absolute left-4 right-4 md:left-auto md:right-0 top-20 md:top-auto mt-0 md:mt-5 md:w-72 bg-white rounded-lg shadow-lg z-50 max-h-[70vh] overflow-y-auto">
          <div className="p-4 text-sm text-black font-mono space-y-3">
            <p className="font-semibold text-gray-800">Lista de deseos</p>
            {ultimosItems.length === 0 && (
              <p className="text-center text-gray-500">
                Aun no tienes productos guardados
              </p>
            )}
            {ultimosItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border-b border-gray-100 pb-2"
              >
                <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                  <LazyLoadImage
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                    effect="blur"
                  />
                </div>
                <span className="text-xs font-semibold text-gray-800">
                  {item.name}
                </span>
              </div>
            ))}
            <Link
              to="/deseos"
              className="inline-flex items-center justify-center w-full border border-gray-300 rounded-md py-2 text-xs font-semibold hover:border-gray-500 transition"
            >
              Ver lista completa
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
