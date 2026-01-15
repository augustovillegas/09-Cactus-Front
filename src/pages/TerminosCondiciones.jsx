import React from "react";
import { Link } from "react-router-dom";

export const TerminosCondiciones = () => {
  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-sm text-gray-500 mb-2">
          Inicio / Terminos y condiciones
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Terminos y condiciones
          </h2>
          <p className="text-sm text-gray-500">
            Informacion legal y uso del sitio
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <p className="text-sm text-gray-600">
            Al realizar una compra aceptas las condiciones de venta, los
            tiempos de entrega y las politicas de devolucion publicadas.
          </p>
          <p className="text-sm text-gray-600">
            La disponibilidad de productos, precios y promociones puede variar
            sin previo aviso.
          </p>
          <div className="pt-2">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-semibold px-5 py-2 rounded-md hover:border-gray-500 transition"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
