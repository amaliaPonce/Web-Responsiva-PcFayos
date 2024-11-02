import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-gray-800">Enlaces rápidos</p>
            <div className="flex flex-col items-center mt-5 space-y-2">
              <Link
                to="/"
                className="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Inicio
              </Link>
              <Link
                to="/diseñoweb"
                className="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Web design
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-semibold text-gray-800">Más información</p>
            <div className="flex flex-col items-center mt-5 space-y-2">
              <Link
                to="/nosotros"
                className="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                Sobre nosotros
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-semibold text-gray-800">Contáctanos</p>
            <div className="flex flex-col items-center mt-5 space-y-2">
              <a
                href="tel:689565770"
                className="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                689 56 57 70
              </a>

              <a
                href="mailto:pcfayos@gmail.com"
                className="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500"
              >
                pcfayos@gmail.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <Link to="/">
            <img className="w-auto h-7" src={logo} alt="Logo" />
          </Link>
          <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0">
            © Copyright 2024. Todos los derechos reservados PcFayos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
