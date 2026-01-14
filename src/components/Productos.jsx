import React, { useEffect, useMemo, useState } from "react";
import { Cards } from "./Cards";
import { products as initialProducts } from "../data/db";
import { useShop } from "../context/ShopContext";

const sortOptions = [
  { value: "relevance", label: "Relevancia" },
  { value: "price-asc", label: "Precio: menor a mayor" },
  { value: "price-desc", label: "Precio: mayor a menor" },
  { value: "newest", label: "Mas recientes" },
  { value: "rating", label: "Mejor valorados" },
];

const formatPrice = (value) => {
  if (Number.isNaN(value)) return "";
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
};

export const Productos = () => {
  const { agregarAlCarrito, alternarDeseos, estaEnDeseos } = useShop();
  const [sortBy, setSortBy] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [status] = useState("ready");

  const categories = useMemo(() => {
    return Array.from(new Set(initialProducts.map((item) => item.category)));
  }, []);

  const brands = useMemo(() => {
    return Array.from(new Set(initialProducts.map((item) => item.brand)));
  }, []);

  const colors = useMemo(() => {
    const allColors = initialProducts.flatMap((item) => item.colors || []);
    return Array.from(new Set(allColors));
  }, []);

  const priceRange = useMemo(() => {
    const prices = initialProducts.map((item) => item.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, []);

  const filteredProducts = useMemo(() => {
    const minValue = Number(priceMin);
    const maxValue = Number(priceMax);

    return initialProducts
      .filter((item) => {
        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(item.category);
        const matchesBrand =
          selectedBrands.length === 0 || selectedBrands.includes(item.brand);
        const matchesColor =
          selectedColors.length === 0 ||
          (item.colors || []).some((color) => selectedColors.includes(color));
        const matchesStock = !inStockOnly || item.inStock;
        const matchesMinPrice = !priceMin || item.price >= minValue;
        const matchesMaxPrice = !priceMax || item.price <= maxValue;

        return (
          matchesCategory &&
          matchesBrand &&
          matchesColor &&
          matchesStock &&
          matchesMinPrice &&
          matchesMaxPrice
        );
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
        if (sortBy === "newest") return b.id.localeCompare(a.id);
        return 0;
      });
  }, [
    selectedCategories,
    selectedBrands,
    selectedColors,
    inStockOnly,
    priceMin,
    priceMax,
    sortBy,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategories,
    selectedBrands,
    selectedColors,
    inStockOnly,
    priceMin,
    priceMax,
    sortBy,
  ]);

  useEffect(() => {
    if (!filtersOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setFiltersOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [filtersOpen]);

  const itemsPerPage = 9;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedColors([]);
    setPriceMin("");
    setPriceMax("");
    setInStockOnly(false);
  };

  const toggleSelection = (value, list, setter) => {
    if (list.includes(value)) {
      setter(list.filter((item) => item !== value));
      return;
    }
    setter([...list, value]);
  };

  const getBadges = (item) => {
    const badges = [];
    badges.push(item.inStock ? "Stock ready" : "Sin stock");
    if (item.brand === "Cactus") {
      badges.push("Official store");
    } else {
      badges.push(item.brand);
    }
    return badges;
  };

  const FiltersPanel = (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Categorias</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() =>
                  toggleSelection(category, selectedCategories, setSelectedCategories)
                }
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Marcas</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleSelection(brand, selectedBrands, setSelectedBrands)}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Rango de precio</h3>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            min={priceRange.min}
            max={priceRange.max}
            placeholder={`Min ${priceRange.min}`}
            value={priceMin}
            onChange={(event) => setPriceMin(event.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="number"
            min={priceRange.min}
            max={priceRange.max}
            placeholder={`Max ${priceRange.max}`}
            value={priceMax}
            onChange={(event) => setPriceMax(event.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Colores</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => toggleSelection(color, selectedColors, setSelectedColors)}
              className={`h-7 w-7 rounded-full border ${
                selectedColors.includes(color)
                  ? "border-black"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
              aria-label={`Color ${color}`}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Disponibilidad</h3>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(event) => setInStockOnly(event.target.checked)}
          />
          <span>En stock</span>
        </label>
      </div>

      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={clearFilters}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-100 transition"
        >
          Limpiar filtros
        </button>
        <button
          type="button"
          onClick={() => setFiltersOpen(false)}
          className="w-full bg-black text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition"
        >
          Aplicar
        </button>
      </div>
    </div>
  );

  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-sm text-gray-500 mb-2">Inicio / Productos</div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Productos</h2>
          <p className="text-sm text-gray-500">
            Mostrando {filteredProducts.length} resultados
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="sm:hidden inline-flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm font-semibold"
          >
            Filtrar
          </button>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-500" htmlFor="sort">
              Ordenar por
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          <aside className="hidden lg:block">
            <div className="border border-gray-200 rounded-lg p-5 bg-white">
              {FiltersPanel}
            </div>
          </aside>

          <div>
            {status === "loading" && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-[340px] w-full rounded-lg bg-gray-200 animate-pulse"
                  />
                ))}
              </div>
            )}

            {status === "error" && (
              <div className="border border-red-200 bg-red-50 text-red-700 rounded-md p-4">
                Ocurrio un error al cargar los productos.
              </div>
            )}

            {status === "ready" && filteredProducts.length === 0 && (
              <div className="border border-gray-200 bg-white rounded-lg p-6 text-center">
                <p className="text-gray-600 mb-4">No se encontraron productos</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="bg-black text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition"
                >
                  Limpiar filtros
                </button>
              </div>
            )}

            {status === "ready" && filteredProducts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedProducts.map((item) => (
                  <Cards
                    key={item.id}
                    variant="catalog"
                    imageSrc={item.image}
                    imageAlt={item.name}
                    title={item.name}
                    price={formatPrice(item.price)}
                    originalPrice={item.oldPrice ? formatPrice(item.oldPrice) : null}
                    discount={item.oldPrice ? "save" : null}
                    badges={getBadges(item)}
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

            {status === "ready" && totalPages > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-md"
                  disabled={currentPage === 1}
                >
                  Anterior
                </button>
                {Array.from({ length: totalPages }).map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 text-sm rounded-md border ${
                        page === currentPage
                          ? "bg-black text-white border-black"
                          : "border-gray-300"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  className="px-3 py-2 text-sm border border-gray-300 rounded-md"
                  disabled={currentPage === totalPages}
                >
                  Siguiente
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-40 flex">
          <button
            type="button"
            aria-label="Cerrar filtros"
            onClick={() => setFiltersOpen(false)}
            className="absolute inset-0 bg-black/40"
          />
          <div className="relative w-full max-w-xs bg-white h-full p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Filtros</h3>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="text-sm text-gray-500"
              >
                Cerrar
              </button>
            </div>
            {FiltersPanel}
          </div>
        </div>
      )}
    </section>
  );
};

