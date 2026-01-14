import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Estilo para el efecto de carga diferida

export const Cards = ({
  imageSrc,
  imageAlt,
  title,
  price,
  originalPrice,
  discount,
  badges = [],
  reviews = { stars: 0, count: "" },
  onBuyClick,
  variant = "default",
  onWishlistClick,
  wishlistActive = false,
  className = "",
}) => {
  const [modalAbierto, setModalAbierto] = useState(false);

  useEffect(() => {
    if (!modalAbierto) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setModalAbierto(false);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modalAbierto]);

  // Generar estrellas segun el rating
  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 !== 0;
    const totalStars = [...Array(5)].map((_, i) => {
      if (i < fullStars)
        return <img key={i} src="icons/cards/star.svg" alt="star" />;
      if (i === fullStars && halfStar)
        return (
          <img key={i} src="icons/cards/star-half-fill.svg" alt="star-half" />
        );
      return (
        <img key={i} src="icons/cards/star-outline.svg" alt="star-outline" />
      );
    });
    return totalStars;
  };

  const esCatalogo = variant === "catalog";

  const claseTarjeta = esCatalogo
    ? "bg-white text-gray-700 w-full h-full border border-gray-200 rounded-md overflow-hidden flex flex-col"
    : "bg-white text-gray-700 w-full max-w-[300px] max-h-[500px] shadow-lg rounded-md overflow-hidden";
  const claseImagenContenedor = esCatalogo
    ? "h-36 md:h-40 w-full bg-gray-100 flex items-center justify-center overflow-hidden"
    : "w-[150px] h-[150px] flex items-center justify-center bg-gray-100 mx-auto";
  const claseImagen = esCatalogo
    ? "max-w-full max-h-full object-contain"
    : "max-w-full max-h-full object-contain";
  const claseContenido = esCatalogo
    ? "p-3 flex flex-col gap-2 flex-1"
    : "p-2 md:p-3 flex flex-col gap-2";
  const claseTitulo = esCatalogo
    ? "text-left font-semibold text-sm md:text-base leading-snug min-h-[2.25rem]"
    : "text-center md:text-start font-semibold text-lg md:text-xl overflow-ellipsis overflow-hidden whitespace-nowrap";
  const clasePrecio = esCatalogo
    ? "flex items-center text-sm md:text-base font-semibold"
    : "flex items-center justify-center md:justify-start text-base md:text-lg font-bold";
  const claseAcciones = esCatalogo
    ? "mt-auto pt-2 flex flex-col gap-2 md:flex-row"
    : "mt-3 flex flex-col gap-1 md:flex-row";
  const claseBotonComprar = esCatalogo
    ? "bg-black text-white px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-yellow-300 hover:text-black transition duration-500"
    : "bg-black text-white px-4 py-1 rounded-md font-medium tracking-wider hover:bg-yellow-300 hover:text-black transition duration-700";
  const claseBotonIcono = esCatalogo
    ? "flex-grow flex justify-center items-center bg-gray-100 hover:bg-gray-200 transition rounded-md py-1.5 border border-transparent"
    : "flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md border border-transparent";
  const claseIconoDeseos = wishlistActive ? "opacity-100" : "opacity-50";
  const claseBotonDeseos = wishlistActive
    ? "bg-yellow-100 border-yellow-400"
    : "";

  return (
    <div className={`${claseTarjeta} ${className}`}>
      {/* Imagen con LazyLoad */}
      <div className={claseImagenContenedor}>
        <LazyLoadImage
          className={claseImagen}
          src={imageSrc}
          alt={imageAlt}
          effect="blur" // Efecto de carga diferida
        />
      </div>
      {/* Contenido */}
      <div className={claseContenido}>
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-1">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full text-xs bg-gray-300"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Titulo */}
        <h2 className={claseTitulo}>{title}</h2>

        {/* Precio */}
        <div>
          <span className={clasePrecio}>{price}</span>
          {originalPrice && (
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs line-through opacity-50">
                {originalPrice}
              </span>
              {discount && (
                <span className="bg-green-400 px-1 py-0.5 rounded-md text-xs text-white">
                  {discount}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Resenas */}
        <span className="flex items-center mt-1 text-xs text-gray-500">
          {renderStars(reviews.stars)}
          <span className="ml-1">{reviews.count}</span>
        </span>

        {/* Botones de accion */}
        <div className={claseAcciones}>
          <button
            onClick={onBuyClick}
            type="button"
            className={claseBotonComprar}
          >
            Comprar
          </button>
          <button
            className={`${claseBotonIcono} ${claseBotonDeseos}`}
            onClick={onWishlistClick}
            type="button"
            aria-pressed={wishlistActive}
          >
            <img
              className={claseIconoDeseos}
              src="icons/cards/love.svg"
              alt="lista de deseos"
            />
          </button>
          <button
            className={claseBotonIcono}
            type="button"
            onClick={() => setModalAbierto(true)}
          >
            <img
              className="opacity-50"
              src="icons/cards/eye.svg"
              alt="detalles"
            />
          </button>
        </div>
      </div>

      {modalAbierto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Cerrar"
            onClick={() => setModalAbierto(false)}
          />
          <div className="relative bg-white w-[90%] max-w-[520px] rounded-lg shadow-xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <button
                type="button"
                className="text-gray-500 hover:text-black"
                onClick={() => setModalAbierto(false)}
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <div className="relative w-full h-60 md:h-72 bg-gray-100 flex items-center justify-center overflow-hidden">
                <LazyLoadImage
                  className="max-w-full max-h-full object-contain"
                  src={imageSrc}
                  alt={imageAlt}
                  effect="blur"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/50 px-4 py-3 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-200 uppercase tracking-wide">
                      {title}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {price}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (onBuyClick) onBuyClick();
                      setModalAbierto(false);
                    }}
                    className="border border-white/70 text-white text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-white hover:text-black transition"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
