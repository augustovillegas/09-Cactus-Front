import React from "react";
import { Link } from "react-router-dom";

export const PreguntasFrecuentes = () => {
  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-sm text-gray-500 mb-2">
          Inicio / Preguntas frecuentes
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Preguntas frecuentes
          </h2>
          <p className="text-sm text-gray-500">
            Resolvemos tus dudas mas comunes
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">
              Como puedo seguir mi pedido?
            </h3>
            <p className="text-sm text-gray-600">
              Cuando el pedido sea despachado vas a recibir un email con el
              numero de seguimiento.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              Que medios de pago aceptan?
            </h3>
            <p className="text-sm text-gray-600">
              Aceptamos tarjeta, transferencia y Mercado Pago.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              Cual es el plazo de entrega?
            </h3>
            <p className="text-sm text-gray-600">
              Los envios estandar demoran entre 3 y 5 dias habiles.
            </p>
          </div>
          <div className="pt-2">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-black text-white font-semibold px-5 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
