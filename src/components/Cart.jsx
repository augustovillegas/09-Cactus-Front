import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  const formatPrice = (value) => {
    if (Number.isNaN(value)) return "";
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const subtotal = itemsCarrito.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const total = subtotal;

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
                      {formatPrice(item.product.price)} · x{item.quantity}
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
            {itemsCarrito.length > 0 && (
              <div className="pt-3 border-t border-gray-200 space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-800">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Envio</span>
                  <span className="font-semibold text-gray-500">
                    A calcular
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-900">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">{formatPrice(total)}</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={() => setEstaAbierto(false)}
                  className="w-full mt-2 bg-black text-white text-xs font-semibold py-2.5 rounded-md hover:bg-gray-800 transition inline-flex items-center justify-center"
                >
                  Confirmar compra
                </Link>
                <p className="text-[10px] text-gray-400 text-center">
                  Impuestos incluidos. Envio calculado al finalizar.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
