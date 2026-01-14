import React, { useMemo } from "react";
import { Cards } from "./Cards";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { products as productos } from "../data/db";
import { useShop } from "../context/ShopContext";

export const Destacados = () => {
  const { agregarAlCarrito, alternarDeseos, estaEnDeseos } = useShop();

  const formatPrice = (value) => {
    if (Number.isNaN(value)) return "";
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const obtenerBadges = (item) => {
    const badges = [];
    badges.push(item.inStock ? "Stock ready" : "Sin stock");
    if (item.brand === "Cactus") {
      badges.push("Official store");
    } else {
      badges.push(item.brand);
    }
    return badges;
  };

  const slides = useMemo(() => {
    const ids = ["p1", "p2", "p3", "p4"];
    const items = productos.filter((item) => ids.includes(item.id));
    return items.length > 0 ? items : productos.slice(0, 4);
  }, []);

  return (
    <div className="mx-auto max-w-[1100px] px-0">
      <style>{`
        .destacados-splide .splide__track {
          padding-bottom: 28px;
        }
        .destacados-splide .splide__arrow {
          background: #000000;
          border-radius: 9999px;
          width: 40px;
          height: 40px;
          opacity: 1;
        }
        .destacados-splide .splide__arrow:hover {
          background: #4b5563;
        }
        .destacados-splide .splide__arrow svg {
          fill: #ffffff;
        }
        .destacados-splide .splide__pagination {
          position: relative;
          margin-top: 16px;
        }
        .destacados-splide .splide__pagination__page {
          width: 10px;
          height: 10px;
          background: rgba(0, 0, 0, 0.2);
          opacity: 1;
        }
        .destacados-splide .splide__pagination__page.is-active {
          background: #000000;
          transform: none;
        }
        .destacados-splide .splide__slide {
          transition: transform 300ms ease, opacity 300ms ease;
          opacity: 0.7;
        }
        .destacados-splide .splide__slide.is-active {
          transform: scale(1.02);
          opacity: 1;
        }
      `}</style>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Productos Destacados
      </h2>
      <div className="destacados-splide">
        <Splide
          options={{
            type: "loop",
            focus: "center",
            perPage: 3,
            gap: "16px",
            arrows: true,
            pagination: true,
            speed: 600,
            breakpoints: {
              768: {
                perPage: 2,
                gap: "20px",
              },
              640: {
                perPage: 1,
                gap: "16px",
              },
            },
          }}
          aria-label="Productos destacados"
        >
          {slides.map((item) => (
            <SplideSlide key={item.id}>
              <div className="flex justify-center">
                <Cards
                  imageSrc={item.image}
                  imageAlt={item.name}
                  title={item.name}
                  price={formatPrice(item.price)}
                  originalPrice={item.oldPrice ? formatPrice(item.oldPrice) : null}
                  discount={item.oldPrice ? "save" : null}
                  badges={obtenerBadges(item)}
                  reviews={{
                    stars: item.rating,
                    count: item.reviewsCount
                      ? `${(item.reviewsCount / 1000).toFixed(1)}k reviews`
                      : "",
                  }}
                  onBuyClick={() => agregarAlCarrito(item)}
                  onWishlistClick={() => alternarDeseos(item)}
                  wishlistActive={estaEnDeseos(item.id)}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
