import React from "react";
import { Link } from "react-router-dom";

const Webdesign = () => {
  return (
    <section className="pt-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl font-bold text-primary leading-tight">
            ¿Quieres una web que te haga ser el mejor de tu sector?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Consigue un diseño web que genere buenos resultados y demuestre la
            calidad de tu marca en internet.
          </p>
        </div>
      </div>

      <section id="intro" className="mt-12 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center">
          <img
            className="object-cover object-center w-full max-h-96 rounded-xl"
            alt="hero"
            src="https://images.pexels.com/photos/669609/pexels-photo-669609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </section>

      <section className="text-white bg-gray-900 my-10 w-full">
        <div className="flex flex-col items-stretch justify-between py-20 max-w-7xl mx-auto lg:flex-row px-4">
          <div>
            <h2 className="mb-1 text-xl font-semibold text-left sm:text-2xl sm:text-center lg:text-left">
              Esto es lo que va a marcar la diferencia entre tu marca y tu
              competencia.
            </h2>
            <p className="mb-6 text-lg font-normal text-left text-gray-200 sm:text-xl sm:text-center lg:text-left">
              ¡Pide información sin compromiso, antes de que sea demasiado
              tarde!
            </p>
          </div>
          <div className="flex flex-col mt-4 space-y-4 sm:flex-row sm:justify-center sm:items-center sm:space-x-4 sm:space-y-0">
            <div className="flex justify-center items-center lg:mt-10">
              <Link
                to="/contacto"
                className="text-lg font-semibold px-8 py-3 bg-secondary text-white rounded-lg shadow-md
                 hover:bg-secondary-dark hover:shadow-lg focus:outline-none focus:ring-2 
                 focus:ring-secondary focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
                aria-label="Contacta con nosotros"
              >
                Contacta con nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col justify-center px-4 py-8 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4 mx-auto">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="w-10 h-10 text-neutral-600"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" />
                <line x1="3.6" y1="15" x2="14.15" y2="15" />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(72 12 12)"
                />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(144 12 12)"
                />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(216 12 12)"
                />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(288 12 12)"
                />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Estrategia</h3>
              <p className="text-gray-600">
                Una estrategia para definir los objetivos, deseos y necesidades
                de tu negocio para su presencia en internet.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-4 py-8 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4 mx-auto">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="w-10 h-10 text-neutral-600"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" />
                <line x1="3.6" y1="15" x2="14.15" y2="15" />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(72 12 12)"
                />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(144 12 12)"
                />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(216 12 12)"
                />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(288 12 12)"
                />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Público objetivo</h3>
              <p className="text-gray-600">
                Concretar el público al que te diriges junto con lo que
                necesitan.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-4 py-8 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4 mx-auto">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="w-10 h-10 text-neutral-600"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" />
                <line x1="3.6" y1="15" x2="14.15" y2="15" />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(72 12 12)"
                />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(144 12 12)"
                />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(216 12 12)"
                />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(288 12 12)"
                />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Contenido web</h3>
              <p className="text-gray-600">
                La redacción de contenido SEO de tu página web para que conecte
                con tu público y pasen a contactar contigo.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-4 py-8 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4 mx-auto">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="w-10 h-10 text-neutral-600"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" />
                <line x1="3.6" y1="15" x2="14.15" y2="15" />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(72 12 12)"
                />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(144 12 12)"
                />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(216 12 12)"
                />
                <line
                  x1="3.6"
                  y1="15"
                  x2="14.15"
                  y2="15"
                  transform="rotate(288 12 12)"
                />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">
                Fotografías de banco de imágenes
              </h3>
              <p className="text-gray-600">
                Fotografías adecuadas a cómo quieres que se muestre tu marca.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h3 className="text-4xl font-bold text-center text-primary mb-6">
            Solo piensa en esto…
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Imagina tener un <strong>diseño web</strong> que te haga ganar
                más clientes y dé la <strong>confianza</strong> para que tu
                público invierta en ti.
              </p>
              <p className="text-2xl mb-6 font-bold text-secondary">
                ¿Sabes cómo esto haría crecer tu negocio?
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Si tu marca no tiene una{" "}
                <strong>buena presencia en internet</strong>, tu público no
                podrá verte ni contactarte. Lo peor es que, al buscarte a ti y
                no encontrarte, <strong>verá y acudirá a tu competencia</strong>
                .
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Para evitar este problema, tienes que tener una{" "}
                <strong>presencia web diferente</strong> que denote el valor de
                tu marca. Siento decirte que para esto ya no vale con tener un{" "}
                <strong>diseño web «bonito»</strong>; hay que desarrollar una
                estrategia para convertir a tus visitantes en clientes.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="object-cover object-center w-full max-h-96 rounded-xl shadow-md"
                alt="web design concept"
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Webdesign;
