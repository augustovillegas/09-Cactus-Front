import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Cart } from "./Cart";
import { User } from "./User";
import { WishlistMenu } from "./WishlistMenu";
import { MenuButton } from "./MenuButton";

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { to: "Inicio", label: "Inicio", type: "scroll" },
    { to: "/productos", label: "Productos", type: "route" },
    { to: "Destacados", label: "Destacados", type: "scroll" },
    { to: "/contacto", label: "Contacto", type: "route" },
  ];

  const renderNavLink = (item) => {
    if (item.type === "route") {
      return (
        <RouterLink
          key={item.label}
          to={item.to}
          className="font-mono text-white hover:text-yellow-400 cursor-pointer"
        >
          {item.label}
        </RouterLink>
      );
    }

    if (isHome) {
      return (
        <ScrollLink
          key={item.label}
          to={item.to}
          smooth={true}
          duration={500}
          spy={true}
          offset={-40}
          className="font-mono text-white hover:text-yellow-400 cursor-pointer"
        >
          {item.label}
        </ScrollLink>
      );
    }

    return (
      <RouterLink
        key={item.label}
        to="/"
        state={{ scrollTo: item.to }}
        className="font-mono text-white hover:text-yellow-400 cursor-pointer"
      >
        {item.label}
      </RouterLink>
    );
  };

  return (
    <nav className="bg-black text-white fixed top-0 w-full z-50 h-20">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        {isHome ? (
          <ScrollLink
            to="Inicio"
            smooth={true}
            duration={500}
            offset={-40}
            className="flex flex-col items-center text-base text-yellow-400 cursor-pointer -space-y-1"
          >
            <img
              src="Logo mordida.png"
              alt="logo"
              className="w-8 h-auto object-contain"
            />
            <p className="font-bold font-mono">Cactus</p>
          </ScrollLink>
        ) : (
          <RouterLink
            to="/"
            state={{ scrollTo: "Inicio" }}
            className="flex flex-col items-center text-base text-yellow-400 cursor-pointer -space-y-1"
          >
            <img
              src="Logo mordida.png"
              alt="logo"
              className="w-8 h-auto object-contain"
            />
            <p className="font-bold font-mono">Cactus</p>
          </RouterLink>
        )}

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 ml-8">
          {navLinks.map((item) => renderNavLink(item))}
        </div>

        {/* User and Cart Icons */}
        <div className="flex items-center justify-center gap-5">
          <WishlistMenu />

          {/* User Icon */}
          <User />

          {/* Cart Icon */}
          <Cart />

          {/* Mobile Menu Button */}
          <MenuButton navLinks={navLinks} isHome={isHome} />
        </div>
      </div>
    </nav>
  );
};
