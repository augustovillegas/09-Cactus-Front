import React from "react";
import { Link } from "react-router-dom";

export const Ofertas = () => {
  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-sm text-gray-500 mb-2">Inicio / Ofertas</div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Ofertas exclusivas</h2>
          <p className="text-sm text-gray-500">
            Promociones pensadas para clientes Cactus
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-gray-800 font-semibold text-lg">
            Aun no hay ofertas activas
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Estamos preparando nuevas promociones. Volve pronto para ver
            novedades y descuentos exclusivos.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/productos"
              className="inline-flex items-center justify-center bg-black text-white font-semibold px-5 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Ver productos
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-semibold px-5 py-2 rounded-md hover:border-gray-500 transition"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
