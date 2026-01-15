import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useShop } from "../context/ShopContext";

const formatPrice = (value) => {
  if (Number.isNaN(value)) return "";
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
};

const shippingOptions = [
  {
    id: "pickup",
    label: "Retiro en tienda",
    description: "Disponible en 24 hs",
    price: 0,
  },
  {
    id: "standard",
    label: "Envio estandar",
    description: "3-5 dias habiles",
    price: 2900,
  },
  {
    id: "express",
    label: "Envio express",
    description: "24-48 hs",
    price: 4900,
  },
];

const paymentOptions = [
  {
    id: "card",
    label: "Tarjeta de credito o debito",
    description: "Visa, Mastercard, Amex",
  },
  {
    id: "transfer",
    label: "Transferencia bancaria",
    description: "5% de descuento por pago directo",
  },
  {
    id: "mp",
    label: "Mercado Pago",
    description: "Cuotas y medios locales",
  },
];

export const Checkout = () => {
  const { itemsCarrito } = useShop();
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const subtotal = useMemo(
    () =>
      itemsCarrito.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      ),
    [itemsCarrito]
  );

  const shippingCost = useMemo(() => {
    const selected = shippingOptions.find((item) => item.id === shippingMethod);
    return selected ? selected.price : 0;
  }, [shippingMethod]);

  const total = subtotal + shippingCost;

  if (itemsCarrito.length === 0) {
    return (
      <section className="pt-28 pb-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-sm text-gray-500 mb-2">Inicio / Checkout</div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Tu carrito esta vacio
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              Agrega productos para continuar con la compra.
            </p>
            <Link
              to="/productos"
              className="inline-flex items-center justify-center bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gray-800 transition"
            >
              Ver productos
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-sm text-gray-500 mb-2">Inicio / Checkout</div>
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Finalizar compra</h1>
          <p className="text-sm text-gray-600">
            Completa los datos y revisa tu pedido antes de pagar.
          </p>
        </div>

        <ol className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 text-xs text-gray-600">
          {["Datos", "Envio", "Pago", "Revisar"].map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-2"
            >
              <span className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-semibold">
                {index + 1}
              </span>
              <span className="font-semibold">{step}</span>
            </li>
          ))}
        </ol>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-8">
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-900">
                  1. Datos de contacto
                </h2>
                <span className="text-xs text-gray-500">Paso 1 de 4</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <label className="flex flex-col gap-2">
                  Nombre y apellido
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="h-10 rounded-md border border-gray-300 px-3"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  Email
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className="h-10 rounded-md border border-gray-300 px-3"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  Telefono
                  <input
                    type="tel"
                    placeholder="11 0000 0000"
                    className="h-10 rounded-md border border-gray-300 px-3"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  DNI
                  <input
                    type="text"
                    placeholder="Documento"
                    className="h-10 rounded-md border border-gray-300 px-3"
                  />
                </label>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-900">
                  2. Direccion de envio
                </h2>
                <span className="text-xs text-gray-500">Paso 2 de 4</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <label className="flex flex-col gap-2 md:col-span-2">
                  Calle y numero
                  <input
                    type="text"
                    placeholder="Av. Siempre Viva 742"
                    className="h-10 rounded-md border border-gray-300 px-3"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  Ciudad
                  <input
                    type="text"
                    placeholder="Ciudad"
                    className="h-10 rounded-md border border-gray-300 px-3"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  Provincia
                  <input
                    type="text"
                    placeholder="Provincia"
                    className="h-10 rounded-md border border-gray-300 px-3"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  Codigo postal
                  <input
                    type="text"
                    placeholder="CP"
                    className="h-10 rounded-md border border-gray-300 px-3"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  Referencias
                  <input
                    type="text"
                    placeholder="Entre calles, piso, etc."
                    className="h-10 rounded-md border border-gray-300 px-3"
                  />
                </label>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-900">
                  3. Metodo de envio
                </h2>
                <span className="text-xs text-gray-500">Paso 3 de 4</span>
              </div>
              <div className="space-y-3 text-sm">
                {shippingOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-start gap-3 rounded-lg border border-gray-200 p-3 hover:border-gray-400 transition"
                  >
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === option.id}
                      onChange={() => setShippingMethod(option.id)}
                      className="mt-1"
                    />
                    <span className="flex-1">
                      <span className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800">
                          {option.label}
                        </span>
                        <span className="font-semibold text-gray-900">
                          {option.price === 0
                            ? "Gratis"
                            : formatPrice(option.price)}
                        </span>
                      </span>
                      <span className="text-xs text-gray-500">
                        {option.description}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-900">
                  4. Metodo de pago
                </h2>
                <span className="text-xs text-gray-500">Paso 4 de 4</span>
              </div>
              <div className="space-y-3 text-sm">
                {paymentOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-start gap-3 rounded-lg border border-gray-200 p-3 hover:border-gray-400 transition"
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === option.id}
                      onChange={() => setPaymentMethod(option.id)}
                      className="mt-1"
                    />
                    <span>
                      <span className="font-semibold text-gray-800">
                        {option.label}
                      </span>
                      <span className="block text-xs text-gray-500">
                        {option.description}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <label className="flex flex-col gap-2">
                  Nombre en la tarjeta
                  <input
                    type="text"
                    placeholder="Como figura en la tarjeta"
                    className="h-10 rounded-md border border-gray-300 px-3"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  Numero de tarjeta
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="h-10 rounded-md border border-gray-300 px-3"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  Vencimiento
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="h-10 rounded-md border border-gray-300 px-3"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  CVV
                  <input
                    type="password"
                    placeholder="***"
                    className="h-10 rounded-md border border-gray-300 px-3"
                  />
                </label>
              </div>
              <label className="flex items-start gap-2 text-xs text-gray-500">
                <input type="checkbox" className="mt-1" />
                <span>
                  Acepto los terminos, condiciones y politica de devoluciones.
                </span>
              </label>
            </div>
          </div>

          <aside className="bg-white border border-gray-200 rounded-xl p-5 h-fit space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-900">
                Resumen del pedido
              </h2>
              <span className="text-xs text-gray-500">
                {itemsCarrito.length} producto(s)
              </span>
            </div>

            <div className="space-y-3">
              {itemsCarrito.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="h-14 w-14 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                    <LazyLoadImage
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-contain"
                      effect="blur"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-900">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.quantity} x {formatPrice(item.product.price)}
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-gray-900">
                    {formatPrice(item.product.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-800">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <span>Envio</span>
                <span className="font-semibold text-gray-800">
                  {shippingCost === 0
                    ? "Gratis"
                    : formatPrice(shippingCost)}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-900">
                <span className="font-semibold">Total</span>
                <span className="font-bold">{formatPrice(total)}</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-black text-white text-sm font-semibold py-3 rounded-md hover:bg-gray-800 transition"
            >
              Pagar
            </button>
            <p className="text-[11px] text-gray-400 text-center">
              Compra segura. Los impuestos estan incluidos.
            </p>
            <div className="flex items-center justify-center gap-3 text-[10px] text-gray-500">
              <span>SSL Seguro</span>
              <span>|</span>
              <span>Soporte 24/7</span>
              <span>|</span>
              <span>Devoluciones faciles</span>
            </div>
            <Link
              to="/productos"
              className="text-xs text-gray-500 underline text-center block"
            >
              Seguir comprando
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
};
