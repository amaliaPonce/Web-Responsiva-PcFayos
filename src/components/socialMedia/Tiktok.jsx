import React from "react";
import { Link } from "react-router-dom";

const TikTok = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary leading-tigh ml-2 mr-2 ">
            ¿Quieres una cuenta de Tiktok que haga crecer tu negocio?
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
            src="https://images.pexels.com/photos/5081921/pexels-photo-5081921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Estrategia en TikTok</h3>
              <p className="text-gray-600">
                Define una estrategia efectiva para aprovechar TikTok al máximo.
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
                <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">
                Público objetivo en TikTok
              </h3>
              <p className="text-gray-600">
                Conecta con tu audiencia ideal en TikTok y crea contenido
                relevante.
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
                <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">
                Contenido viral en TikTok
              </h3>
              <p className="text-gray-600">
                Crea contenido creativo y viral en TikTok que impulse el
                engagement.
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
                <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">
                Imágenes impactantes para TikTok
              </h3>
              <p className="text-gray-600">
                Utiliza imágenes y videos dinámicos para captar la atención en
                TikTok.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 mt-8">
        <div className="max-w-7xl mx-auto py-4 px-6 md:px-12 lg:px-24">
          <h3 className="text-4xl font-bold text-center text-primary mb-6">
            Aprovecha TikTok para hacer crecer tu negocio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Imagina tener una presencia impactante en TikTok que te ayude a
                ganar clientes y generar comunidad.
              </p>
              <p className="text-lg mb-6 font-bold text-secondary">
                ¿Sabes cómo esto puede impulsar tu negocio?
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Si tu marca no está en TikTok, estás perdiendo una oportunidad
                crucial para conectar con tu audiencia. No tener presencia en
                esta plataforma puede hacer que tus clientes potenciales se
                dirijan a la competencia.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Es esencial desarrollar una estrategia efectiva en TikTok para
                convertir visitantes en clientes y mejorar la visibilidad de tu
                marca.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="object-cover object-center w-full max-h-96 rounded-xl shadow-md"
                alt="diseño web"
                src="https://images.pexels.com/photos/5081920/pexels-photo-5081920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
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

export default TikTok;
