import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-[url('../src/assets/high-angle-desk-arrangement-with-laptop.jpg')] bg-cover bg-center bg-no-repeat mt-1 z-0">
      <div className="absolute inset-0 bg-gray-900/85 lg:bg-gray-900/80"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-20 md:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl mx-auto text-center lg:text-left lg:mx-0 flex flex-col items-center lg:items-start justify-center h-full">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white">
            Un community manager para potenciar tu{" "}
            <strong className="block font-extrabold text-secondary">
              presencia online.
            </strong>
          </h1>

          <p className="m-4 max-w-lg text-white sm:text-lg">
            Creamos <strong>sitios web efectivos</strong> y{" "}
            <strong>gestionamos</strong> tus <strong>redes sociales</strong>,
            ofreciendo servicios adicionales como community managers para
            optimizar tu <strong>presencia online</strong>.
          </p>

          <div className="mt-8 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/contacto"
              className="block w-full lg:w-auto rounded bg-primary px-8 py-3 text-lg text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-secondary font-bold text-center"
            >
              Contacta
            </Link>

            <Link
              to="/nosotros"
              className="block w-full lg:w-auto rounded bg-white px-8 py-3 text-lg font-medium text-primary shadow hover:text-secondary focus:outline-none focus:ring active:text-secondary text-center"
            >
              Más sobre nosotros
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
