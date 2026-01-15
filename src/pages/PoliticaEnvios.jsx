import React from "react";
import { Link } from "react-router-dom";

export const PoliticaEnvios = () => {
  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-sm text-gray-500 mb-2">
          Inicio / Politica de envios
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Politica de envios
          </h2>
          <p className="text-sm text-gray-500">
            Costos, tiempos y zonas de entrega
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <p className="text-sm text-gray-600">
            Los envios se despachan de lunes a viernes. El tiempo de entrega
            estimado se informa al finalizar la compra.
          </p>
          <p className="text-sm text-gray-600">
            El costo depende de la ubicacion y el metodo seleccionado. En
            compras superiores al minimo indicado el envio puede ser gratuito.
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
