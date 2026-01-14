import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export const User = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Icono de usuario */}
      <div onClick={toggleDropdown} className="-m-1 cursor-pointer">
        <img
          src="icons/navbar/bx-user.svg"
          alt="Usuario"
          className="w-6 h-6 invert"
        />
      </div>

      {/* Desplegable */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-5 w-56 bg-white rounded-lg shadow-lg z-10">
          <ul className="p-4 text-sm text-black font-mono">
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to="/login">Iniciar sesion</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer mt-2">
              <Link to="/registro">Registrarme</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
