import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import { products as initialProducts } from "../data/db";

const ShopContext = createContext(null);

const CLAVE_CARRITO = "cactus_cart";
const CLAVE_DESEOS = "cactus_wishlist";

const carritoInicial = initialProducts.slice(0, 2).map((product) => ({
  product,
  quantity: 1,
}));

const cargarStorage = (clave, respaldo, validar) => {
  if (typeof window === "undefined") return respaldo;
  try {
    const raw = window.localStorage.getItem(clave);
    if (!raw) return respaldo;
    const parsed = JSON.parse(raw);
    if (validar && !validar(parsed)) return respaldo;
    return parsed;
  } catch (error) {
    return respaldo;
  }
};

const guardarStorage = (clave, valor) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(clave, JSON.stringify(valor));
  } catch (error) {
    // Ignorar errores de escritura (modo privado, cuota, etc.).
  }
};

export const ShopProvider = ({ children }) => {
  const [itemsCarrito, setItemsCarrito] = useState(() =>
    cargarStorage(CLAVE_CARRITO, carritoInicial, (valor) =>
      Array.isArray(valor) &&
      valor.every(
        (item) =>
          item &&
          typeof item === "object" &&
          item.product &&
          typeof item.product.id === "string" &&
          typeof item.quantity === "number"
      )
    )
  );
  const [itemsDeseos, setItemsDeseos] = useState(() =>
    cargarStorage(CLAVE_DESEOS, [], (valor) =>
      Array.isArray(valor) &&
      valor.every(
        (item) =>
          item &&
          typeof item === "object" &&
          typeof item.id === "string"
      )
    )
  );

  useEffect(() => {
    guardarStorage(CLAVE_CARRITO, itemsCarrito);
  }, [itemsCarrito]);

  useEffect(() => {
    guardarStorage(CLAVE_DESEOS, itemsDeseos);
  }, [itemsDeseos]);

  const agregarAlCarrito = (product) => {
    setItemsCarrito((prev) => {
      const existente = prev.find((item) => item.product.id === product.id);
      if (existente) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const eliminarDelCarrito = (productId) => {
    setItemsCarrito((prev) =>
      prev.filter((item) => item.product.id !== productId)
    );
  };

  const actualizarCantidadCarrito = (productId, delta) => {
    setItemsCarrito((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const alternarDeseos = (product) => {
    setItemsDeseos((prev) => {
      const existe = prev.some((item) => item.id === product.id);
      if (existe) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const estaEnDeseos = (productId) =>
    itemsDeseos.some((item) => item.id === productId);

  const cantidadCarrito = useMemo(
    () => itemsCarrito.reduce((sum, item) => sum + item.quantity, 0),
    [itemsCarrito]
  );

  const value = useMemo(
    () => ({
      itemsCarrito,
      itemsDeseos,
      agregarAlCarrito,
      eliminarDelCarrito,
      actualizarCantidadCarrito,
      alternarDeseos,
      estaEnDeseos,
      cantidadCarrito,
    }),
    [itemsCarrito, itemsDeseos, cantidadCarrito]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop debe usarse dentro de ShopProvider");
  }
  return context;
};
