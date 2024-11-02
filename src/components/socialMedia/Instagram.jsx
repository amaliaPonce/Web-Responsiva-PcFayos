import React from "react";
import instagramImage from "../../assets/instagram-1474231-2048x1366.jpg";
import { Link } from "react-router-dom";

const Instagram = () => {
  return (
    <section className="py-12 bg-gray-100 ">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary leading-tight ml-2 mr-2">
            ¿Quieres una cuenta de Instagram que haga crecer tu negocio?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Consigue un perfil de Instagram que genere resultados y demuestre la
            calidad de tu marca.
          </p>
        </div>
      </div>

      <section id="intro" className="mt-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <img
            className="object-cover object-center w-full max-h-96 rounded-xl"
            alt="hero"
            src={instagramImage} // Usando la imagen importada
          />
        </div>
      </section>

      <section className="mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center px-4 py-8 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="60"
                viewBox="0 0 64 64"
              >
                <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Estrategia</h3>
              <p className="text-gray-600">
                Definimos los objetivos, deseos y necesidades de tu marca para
                su presencia en Instagram.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-4 py-8 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="60"
                viewBox="0 0 64 64"
              >
                <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
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
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="60"
                viewBox="0 0 64 64"
              >
                <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Creación de contenido</h3>
              <p className="text-gray-600">
                El diseño del feed de la cuenta, sobre el que puedas realizar
                las modificaciones que consideres oportunas.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-4 py-8 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="60"
                viewBox="0 0 64 64"
              >
                <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Desarrollo del perfil</h3>
              <p className="text-gray-600">
                Potenciamos el perfil de tu empresa, optimizando la bio, foto de
                perfil, historias destacadas, y más.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white bg-gray-900 my-10 w-full">
        <div className="flex flex-col items-stretch justify-between py-12 px-4 max-w-7xl mx-auto lg:flex-row lg:py-20 lg:px-6">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold text-center sm:text-3xl lg:text-left lg:text-4xl">
              Cada momento que pasas sin presencia en redes sociales es una
              pérdida de clientes, deja de poner excusas y actúa.
            </h2>
            <p className="mt-4 text-lg font-normal text-center text-gray-200 sm:text-xl lg:text-left">
              ¡Pide información sin compromiso!
            </p>
          </div>
          <div className="btn text-lg bg-primary flex justify-center lg:mt-10 items-center">
            <Link
              to="/contacto"
              className="btn text-lg flex justify-center items-center bg-secondary text-white"
            >
              Contacta con nosotros LightWidget
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Instagram;
