import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="navbar bg-gray-100 z-10 relative">
      {/* Botón para menú móvil */}
      <div className="navbar-start">
        <button
          ref={buttonRef}
          type="button"
          className="btn btn-ghost lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="PcFayos" style={{ maxWidth: "150px" }} />
        </Link>

        {/* Menú móvil */}
        {isOpen && (
          <div
            className="absolute top-full left-0 w-full bg-gray-100 z-20 shadow-lg"
            ref={dropdownRef}
          >
            <ul className="menu menu-sm p-4">
              <li>
                <Link
                  to="/"
                  className="text-lg text-gray-500"
                  onClick={closeMenu}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/diseñoweb"
                  className="text-lg text-gray-500"
                  onClick={closeMenu}
                >
                  Web design
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="text-lg w-full text-left text-gray-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Redes sociales
                </button>
                <ul className="dropdown-menu bg-gray-100 pl-4">
                  <li>
                    <Link
                      to="/social-media/instagram"
                      className="text-lg"
                      onClick={closeMenu}
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/social-media/facebook"
                      className="text-lg"
                      onClick={closeMenu}
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/social-media/tiktok"
                      className="text-lg"
                      onClick={closeMenu}
                    >
                      Tiktok
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="text-lg text-gray-500"
                  onClick={closeMenu}
                >
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Menú de escritorio */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-lg" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/diseñoweb" className="text-lg" onClick={closeMenu}>
              Web design
            </Link>
          </li>
          <li>
            <details>
              <summary className="text-lg">Redes sociales</summary>
              <ul className="dropdown-menu bg-gray-100">
                <li>
                  <Link
                    to="/social-media/instagram"
                    className="text-lg"
                    onClick={closeMenu}
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to="/social-media/facebook"
                    className="text-lg"
                    onClick={closeMenu}
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    to="/social-media/tiktok"
                    className="text-lg"
                    onClick={closeMenu}
                  >
                    Tiktok
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/nosotros" className="text-lg" onClick={closeMenu}>
              Sobre nosotros
            </Link>
          </li>
        </ul>
      </div>

      {/* Botón de contacto */}
      <div className="navbar-end">
        <Link
          to="/contacto"
          className="btn text-xs m-4 lg:text-lg"
          onClick={closeMenu}
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
