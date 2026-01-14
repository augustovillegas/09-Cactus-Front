import React from "react";
import { Cards } from "./Cards";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export const Destacados = () => {
  const slides = [
    {
      imageSrc: "products/airpods.jpg",
      imageAlt: "Airpods Pro 2da Gen.",
      title: "Airpods Pro 2da Gen.",
      price: "$53,590.00",
      originalPrice: "$65,550.00",
      discount: "save 20%",
      badges: ["Stock ready", "Envio gratis"],
      onBuyClick: () => console.log("Comprar Airpods"),
    },
    {
      imageSrc: "products/cargador-rapido.jpg",
      imageAlt: "Cargador R?pido",
      title: "Cargador R?pido",
      price: "$33,590.00",
      originalPrice: "$35,550.00",
      discount: "save 20%",
      badges: ["Stock ready", "Official store"],
      onBuyClick: () => console.log("Comprar Cargador"),
    },
    {
      imageSrc: "products/funda-premium2.jpg",
      imageAlt: "Funda Premium Magnetic",
      title: "Funda Premium Magnetic",
      price: "$15,590.00",
      originalPrice: "$18,550.00",
      discount: "save 20%",
      badges: ["Stock ready", "Official store"],
      onBuyClick: () => console.log("Comprar Funda"),
    },
    {
      imageSrc: "products/soporte.jpg",
      imageAlt: "Soporte MagSafe",
      title: "Soporte p/ MagSafe",
      price: "$17,590.00",
      originalPrice: "$22,550.00",
      discount: "save 20%",
      badges: ["Stock ready", "Official store"],
      onBuyClick: () => console.log("Comprar Funda"),
    },
  ];

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
          {slides.map((slide, index) => (
            <SplideSlide key={index}>
              <div className="flex justify-center">
                <Cards
                  className="shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105"
                  imageSrc={slide.imageSrc}
                  imageAlt={slide.imageAlt}
                  title={slide.title}
                  price={slide.price}
                  originalPrice={slide.originalPrice}
                  discount={slide.discount}
                  badges={slide.badges}
                  reviews={{
                    stars: 4.5,
                    count: "20k reviews",
                  }}
                  onBuyClick={slide.onBuyClick}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
