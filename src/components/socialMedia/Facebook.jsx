import React from "react";
import { Link } from "react-router-dom";
const Facebook = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary leading-tight ml-2 mr-2">
            ¿Quieres una cuenta de Facebook que haga crecer tu negocio?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Consigue un perfil de Facebook que genere resultados y demuestre la
            calidad de tu marca.
          </p>
        </div>
      </div>

      <section id="intro" className="mt-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <img
            className="object-cover object-center w-full max-h-96 rounded-xl"
            alt="hero"
            src="https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Estrategia</h3>
              <p className="text-gray-600">
                Definimos los objetivos, deseos y necesidades de tu marca para
                su presencia en Facebook.
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
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Público objetivo</h3>
              <p className="text-gray-600">
                Concretar el público al que te diriges junto con lo que
                necesitan en Facebook.
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
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Creación de contenido</h3>
              <p className="text-gray-600">
                El diseño del feed de la cuenta de Facebook, donde puedes
                realizar las modificaciones que consideres oportunas.
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
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">
                Imágenes de banco de imágenes
              </h3>
              <p className="text-gray-600">
                Imágenes de banco adecuadas a tus necesidades y las de tu marca
                en Facebook.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 mt-8">
        <div className="max-w-7xl mx-auto py-4 px-6 md:px-12 lg:px-24">
          <h3 className="text-4xl font-bold text-center text-primary mb-6">
            Sé que esto te va a gustar…
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Imagina tener una cuenta de Facebook que te haga ganar más y
                mejores clientes y genere comunidad entre tus clientes.
              </p>
              <p className="text-lg mb-6 font-bold text-secondary">
                ¿Sabes cómo esto haría crecer tu negocio?
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Si tu negocio no tiene una buena presencia en redes sociales, o
                no tiene presencia, tu público no podrá verte. Lo peor es que al
                buscarte a ti y no encontrarte, irán a la competencia.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Para evitar este problema tienes que tener una presencia en
                Facebook impecable y siento decirte que no vale con tener una
                “cuenta bonita” o un «feed bonito». Hay que desarrollar una
                estrategia para convertir a tus visitantes en clientes.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="object-cover object-center w-full max-h-96 rounded-xl shadow-md"
                alt="web design concept"
                src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="text-white bg-gray-900 my-10 w-full">
        <div className="flex flex-col items-stretch justify-between py-12 px-4 max-w-7xl mx-auto lg:flex-row lg:py-20 lg:px-6">
          <div className="mb-8 lg:mb-0">
            <h2 className=" max-w-3xl text-2xl font-semibold text-center sm:text-3xl lg:text-left lg:text-4xl">
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
              className="btn  text-lg flex justify-center items-center bg-secondary text-white"
            >
              Contacta con nosotros
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Facebook;
