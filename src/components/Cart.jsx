import React, { useRef, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useShop } from "../context/ShopContext";

export const Cart = () => {
  const {
    itemsCarrito,
    cantidadCarrito,
    eliminarDelCarrito,
    actualizarCantidadCarrito,
  } = useShop();
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

  return (
    <div className="relative" ref={contenedorRef}>
      {/* Icono del carrito */}
      <div onClick={alternarMenu} className="cursor-pointer">
        <img
          src="icons/navbar/shopping-bag-inline.svg"
          alt="Carrito de compras"
          className="w-5 h-5 fill-white invert"
        />
        {cantidadCarrito > 0 && (
          <span className="absolute -top-3 left-3 md:left-4 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            {cantidadCarrito}
          </span>
        )}
      </div>

      {/* Desplegable */}
      {estaAbierto && (
        <div className="absolute right-0 mt-4 md:mt-5 w-72 bg-white rounded-lg shadow-lg z-10">
          <div className="p-4 text-sm text-black font-mono space-y-3">
            <p className="font-semibold text-gray-800">Mi carrito</p>
            {itemsCarrito.length === 0 && (
              <p className="text-center text-gray-500">Carrito vacio</p>
            )}
            {itemsCarrito.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between gap-3 border-b border-gray-100 pb-2"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                    <LazyLoadImage
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-contain"
                      effect="blur"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-800">
                      {item.product.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      x{item.quantity}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => actualizarCantidadCarrito(item.product.id, -1)}
                    className="h-6 w-6 rounded border border-gray-300 text-xs"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => actualizarCantidadCarrito(item.product.id, 1)}
                    className="h-6 w-6 rounded border border-gray-300 text-xs"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => eliminarDelCarrito(item.product.id)}
                    className="text-xs text-gray-500 hover:text-black"
                  >
                    Quitar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
