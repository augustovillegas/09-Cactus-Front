import React from "react";
import { Cards } from "../components/Cards";
import { useShop } from "../context/ShopContext";

const formatPrice = (value) => {
  if (Number.isNaN(value)) return "";
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
};

export const Deseos = () => {
  const { itemsDeseos, alternarDeseos, agregarAlCarrito, estaEnDeseos } =
    useShop();

  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-sm text-gray-500 mb-2">
          Inicio / Lista de deseos
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Lista de deseos</h2>
          <p className="text-sm text-gray-500">
            {itemsDeseos.length} producto(s) guardado(s)
          </p>
        </div>

        {itemsDeseos.length === 0 ? (
          <div className="border border-gray-200 bg-white rounded-lg p-6 text-center">
            <p className="text-gray-600 mb-4">
              Aun no tienes productos en tu lista de deseos.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
            {itemsDeseos.map((item) => (
              <Cards
                key={item.id}
                variant="catalog"
                className="min-h-[360px]"
                imageSrc={item.image}
                imageAlt={item.name}
                title={item.name}
                price={formatPrice(item.price)}
                originalPrice={item.oldPrice ? formatPrice(item.oldPrice) : null}
                discount={item.oldPrice ? "save" : null}
                badges={[item.brand, item.inStock ? "Stock ready" : "Sin stock"]}
                onBuyClick={() => agregarAlCarrito(item)}
                onWishlistClick={() => alternarDeseos(item)}
                wishlistActive={estaEnDeseos(item.id)}
                reviews={{
                  stars: item.rating,
                  count: item.reviewsCount
                    ? `${(item.reviewsCount / 1000).toFixed(1)}k reviews`
                    : "",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
