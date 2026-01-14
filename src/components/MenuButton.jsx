import React, { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export const MenuButton = ({ navLinks, isHome }) => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const renderLink = (item) => {
    if (item.type === "route") {
      return (
        <RouterLink
          key={item.label}
          to={item.to}
          className="py-2 text-white hover:text-yellow-400 cursor-pointer"
          onClick={() => setToggle(false)}
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
          offset={-50}
          className="py-2 text-white hover:text-yellow-400 cursor-pointer"
          onClick={() => setToggle(false)}
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
        className="py-2 text-white hover:text-yellow-400 cursor-pointer"
        onClick={() => setToggle(false)}
      >
        {item.label}
      </RouterLink>
    );
  };

  return (
    <div className="" ref={menuRef}>
      {/* Mobile Menu Button */}
      <button
        aria-label={toggle ? "Cerrar menu" : "Abrir menu"}
        className="md:hidden bg-yellow-400 rounded p-1 focus:outline-none hover:bg-yellow-300"
        onClick={handleToggle}
      >
        <img
          src={toggle ? "icons/navbar/bx-x.svg" : "icons/navbar/bx-menu.svg"}
          alt={toggle ? "Cerrar menu" : "Abrir menu"}
          className="w-6 h-6"
        />
      </button>

      {/* Mobile Navigation Links */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } flex-col items-center font-mono bg-black w-full absolute top-20 left-0 right-0 z-50 py-4`}
      >
        {navLinks.map((item) => renderLink(item))}
      </div>
    </div>
  );
};
