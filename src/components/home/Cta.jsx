import React from "react";
import ctaImage from "../../assets/pexels-wdnet-230544.jpg";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="overflow-hidden bg-gray-50 grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex items-center">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            <strong>Impulsa tu negocio con nosotros</strong>
          </h2>
          <p className="hidden text-gray-500 md:mt-4 md:block">
            Descubre el poder de las{" "}
            <strong>soluciones digitales estratégicas</strong> diseñadas para
            mejorar el alcance e impacto de tu marca. Nos especializamos en
            crear contenido <strong>convincente</strong> y experiencias de
            usuario que impulsan el <strong>crecimiento</strong> y el{" "}
            <strong>compromiso</strong>.
          </p>
          <div className="mt-4 md:mt-8 flex justify-center sm:justify-start">
            <Link
              to="/contacto"
              className="inline-block w-full lg:w-auto rounded bg-primary px-8 py-3 text-lg text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-secondary font-bold text-center"
            >
              <strong>Comienza hoy </strong>
            </Link>
          </div>
        </div>
      </div>
      <img
        alt="Imagen de Call to Action"
        src={ctaImage}
        className="h-72 w-full object-cover sm:h-full"
      />
    </section>
  );
};

export default CtaSection;
