import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = async () => {};

  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-sm text-gray-500 mb-2">Inicio / Registrarme</div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Registrarme
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Crea tu cuenta para acceder a ofertas y seguimiento de pedidos.
            </p>

            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 text-sm font-semibold hover:border-gray-500 transition">
                <span className="h-5 w-5 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-5 w-5">
                    <path
                      d="M21.35 11.1h-9.18v2.8h5.28c-.23 1.23-.93 2.27-1.98 2.98v2.47h3.2c1.87-1.72 2.95-4.26 2.95-7.21 0-.7-.06-1.38-.17-2.04z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.17 21c2.7 0 4.97-.9 6.62-2.45l-3.2-2.47c-.9.6-2.05.96-3.42.96-2.62 0-4.84-1.77-5.63-4.15H3.23v2.6A9.99 9.99 0 0 0 12.17 21z"
                      fill="#34A853"
                    />
                    <path
                      d="M6.54 12.89a5.97 5.97 0 0 1 0-3.78V6.51H3.23a10 10 0 0 0 0 8.98l3.31-2.6z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.17 7.04c1.47 0 2.78.5 3.82 1.48l2.86-2.86C17.14 3.99 14.87 3 12.17 3 8.2 3 4.77 5.26 3.23 8.51l3.31 2.6c.79-2.38 3.01-4.07 5.63-4.07z"
                      fill="#EA4335"
                    />
                  </svg>
                </span>
                Continuar con Google
              </button>
              <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 text-sm font-semibold hover:border-gray-500 transition">
                <span className="h-5 w-5 flex items-center justify-center text-gray-800">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.98 3.66 9.1 8.44 9.9v-7H8v-2.9h2.44V9.41c0-2.42 1.44-3.76 3.65-3.76 1.06 0 2.17.19 2.17.19v2.4h-1.22c-1.2 0-1.57.75-1.57 1.52v1.83H16.9v2.9h-2.43v7c4.78-.8 8.44-4.92 8.44-9.9 0-5.52-4.48-10-10-10z" />
                  </svg>
                </span>
                Continuar con Facebook
              </button>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="h-px bg-gray-200 flex-1" />
              <span className="text-xs text-gray-400">o</span>
              <span className="h-px bg-gray-200 flex-1" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  {...register("nombre", {
                    required: "Ingresa tu nombre",
                    pattern: {
                      value: /^[A-Za-z??????????????\s]+$/,
                      message: "El nombre no puede tener numeros",
                    },
                    minLength: {
                      value: 2,
                      message: "El nombre debe tener al menos 2 caracteres",
                    },
                  })}
                  aria-invalid={errors.nombre ? "true" : "false"}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {errors.nombre && (
                  <span className="text-xs text-red-500">{errors.nombre.message}</span>
                )}
              </div>
              <div>
                <label className="text-sm text-gray-600" htmlFor="apellido">
                  Apellido
                </label>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  placeholder="Tu apellido"
                  {...register("apellido", {
                    required: "Ingresa tu apellido",
                    pattern: {
                      value: /^[A-Za-z??????????????\s]+$/,
                      message: "El apellido no puede tener numeros",
                    },
                    minLength: {
                      value: 2,
                      message: "El apellido debe tener al menos 2 caracteres",
                    },
                  })}
                  aria-invalid={errors.apellido ? "true" : "false"}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {errors.apellido && (
                  <span className="text-xs text-red-500">{errors.apellido.message}</span>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-gray-600" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  {...register("email", {
                    required: "Ingresa tu email",
                    pattern: {
                      value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                      message: "Ingresa un email valido",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {errors.email && (
                  <span className="text-xs text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-gray-600" htmlFor="password">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Minimo 8 caracteres"
                  {...register("password", {
                    required: "Ingresa una contrase?a",
                    minLength: {
                      value: 8,
                      message: "La contrase?a debe tener al menos 8 caracteres",
                    },
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {errors.password && (
                  <span className="text-xs text-red-500">{errors.password.message}</span>
                )}
              </div>
              <div className="md:col-span-2 flex items-center gap-2 text-xs text-gray-500">
                <input
                  type="checkbox"
                  id="terms"
                  {...register("terms", {
                    validate: (value) => value || "Debes aceptar los terminos",
                  })}
                />
                <label htmlFor="terms">
                  Acepto terminos y condiciones de Cactus.
                </label>
                {errors.terms && (
                  <span className="text-xs text-red-500">{errors.terms.message}</span>
                )}
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className="w-full bg-black text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition"
                >
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>

          <aside className="bg-black text-white rounded-lg p-8 space-y-4">
            <h3 className="text-2xl font-semibold">Ya tienes cuenta?</h3>
            <p className="text-sm text-gray-300">
              Inicia sesion para guardar tus favoritos y seguir tus pedidos.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center justify-center border border-yellow-400 text-yellow-400 font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
            >
              Iniciar sesion
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
};
