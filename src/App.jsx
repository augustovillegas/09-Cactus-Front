import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { WhatsApp } from "./components/WhatsApp";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ToTopButton } from "./components/ToTopButton";
import { Home } from "./pages/Home";
import { Productos } from "./components/Productos";
import { Contacto } from "./pages/Contacto";
import { Login } from "./pages/Login";
import { Registro } from "./pages/Registro";
import { Deseos } from "./pages/Deseos";
import { Ofertas } from "./pages/Ofertas";
import { Checkout } from "./pages/Checkout";
import { ShopProvider } from "./context/ShopContext";

const Layout = () => {
  return (
    <div>
      <WhatsApp />
      <Navbar />
      <ScrollToTop />
      <ToTopButton />
      <Outlet />
      <Footer />
    </div>
  );
};

export const App = () => {
  return (
    <ShopProvider>
      <div>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/deseos" element={<Deseos />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
      </div>
    </ShopProvider>
  );
};
