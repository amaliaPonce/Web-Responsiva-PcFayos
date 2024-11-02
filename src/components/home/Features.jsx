import React, { useEffect, useState, useRef } from "react";
import CtaSection from "./Cta";
import img1 from "../../assets/Wavy_Tech-01_Single-11.jpg";
import img2 from "../../assets/Wavy_Bus-11_Single-12.jpg";
import img3 from "../../assets/20944202.jpg";
import img4 from "../../assets/20943599.jpg";

const FeatureSection = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [contractsCount, setContractsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const counterRef = useRef(null);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    // Función para iniciar contadores
    const incrementCounter = (setter, target) => {
      let count = 0;
      const increment = () => {
        if (count < target) {
          count++;
          setter(count);
          setTimeout(increment, 100);
        }
      };
      increment();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasCounted) {
          incrementCounter(setClientsCount, 30);
          incrementCounter(setContractsCount, 17);
          incrementCounter(setProjectsCount, 35);
          incrementCounter(setYearsCount, 4);
          setHasCounted(true);
        }
      });
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasCounted]);

  return (
    <div className="relative min-h-screen ">
      <div className="max-w-screen-xl p-4 px-4 mx-auto sm:px-6 lg:px-8 py-10 lg:my-24 bg-gray-100">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2 lg:max-w-2xl m-4">
            <h3 className="text-xl font-semibold leading-7 text-gray-900">
              ¿Qué ofrecemos como community manager?
            </h3>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Una estrategia integral de marketing digital, donde trabajaremos
              en la <strong>creación de contenido</strong>,{" "}
              <strong>diseño web</strong> y{" "}
              <strong>organización esencial</strong> para el crecimiento de tu
              marca. Ponemos a tu disposición todo lo necesario como community
              managers para <strong>destacar</strong> en tus proyectos.
            </p>

            <h3 className="mt-8 text-xl font-semibold leading-7 text-gray-900">
              NUESTROS SERVICIOS
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Desarrollamos una identidad de marca clara en Instagram con
                  contenido y un feed atractivo.
                </p>
              </li>
              <li className="mt-6 sm:mt-0 flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Creamos y producimos videos y contenido atractivo para las
                  plataformas sociales más populares y actuales.
                </p>
              </li>
              <li className="mt-6 sm:mt-0 flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Diseñamos y desarrollamos sitios web atractivos adaptados a tu
                  público objetivo y optimizados para mejorar la experiencia del
                  usuario.
                </p>
              </li>
              <li className="mt-6 sm:mt-0 flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Desarrollamos sitios web modernos y funcionales que atraen
                  clientes y cumplen con todas tus necesidades.
                </p>
              </li>
            </ul>
          </div>
          <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center space-x-4 lg:justify-start">
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={img1}
                  alt="1"
                />
                <img
                  className="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  src={img2}
                  alt="2"
                />
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <img
                  className="w-24 rounded-lg shadow-lg md:w-40"
                  width="170"
                  src={img3}
                  alt="3"
                />
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={img4}
                  alt="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-primary" ref={counterRef}>
        <div className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">{clientsCount}</span>
              <span className="text-secondary">+</span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
              Clientes satisfechos
            </p>
          </div>
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">{contractsCount}</span>
              <span className="text-secondary">+</span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
              Contratos en curso
            </p>
          </div>
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">{projectsCount}</span>
              <span className="text-secondary">+</span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
              Proyectos finalizados
            </p>
          </div>
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">{yearsCount}</span>
              <span className="text-secondary">+</span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
              Años en el negocio
            </p>
          </div>
        </div>
      </section>
      <CtaSection />
    </div>
  );
};

export default FeatureSection;
