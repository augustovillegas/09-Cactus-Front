import React from "react";

export const Contacto = () => {
  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-sm text-gray-500 mb-2">Inicio / Contacto</div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Contacto</h2>
          <p className="text-sm text-gray-500">
            Te respondemos en menos de 24 horas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
          <aside className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
            <div>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center text-gray-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21s-6-4.5-6-10a6 6 0 1 1 12 0c0 5.5-6 10-6 10z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                </span>
                Direccion
              </p>
              <p className="text-gray-900 font-semibold">
                Catamarca, Capital - Argentina
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center text-gray-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 1h2a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1l-1.3 1.3a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2z" />
                  </svg>
                </span>
                Telefono
              </p>
              <p className="text-gray-900 font-semibold">(383)-4373389</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center text-gray-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </span>
                Email
              </p>
              <p className="text-gray-900 font-semibold">
                cactustecnologia@gmail.com
              </p>
            </div>
            <div className="pt-2">
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center text-gray-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                Horario
              </p>
              <p className="text-gray-900 font-semibold">
                Lun a Vie, 9:00 a 18:00
              </p>
            </div>
          </aside>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Escribinos
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <label className="text-sm text-gray-600" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm text-gray-600" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm text-gray-600" htmlFor="telefono">
                  Telefono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="Tu telefono"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm text-gray-600" htmlFor="asunto">
                  Asunto
                </label>
                <input
                  id="asunto"
                  name="asunto"
                  type="text"
                  placeholder="Motivo de consulta"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-gray-600" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  placeholder="Contanos en que te podemos ayudar"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
