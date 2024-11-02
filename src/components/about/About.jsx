import React, { useState } from "react";
import imagePablo from "../../assets/image00003.jpeg";
import imageAmalia from "../../assets/Amalia.png";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Sección de equipo */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
              Nuestro equipo
            </h2>
            <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
              En PcFayos, nos enorgullecemos no solo de nuestra tecnología
              innovadora, sino también del talento y dedicación de nuestro
              equipo.
            </p>
          </div>
          <div className="grid gap-8 items-center md:grid-cols-2">
            <div className="space-y-4 text-center">
              <img
                className="w-80 h-80 mx-auto object-cover rounded-xl"
                src={imagePablo}
                alt="Pablo Cabezuelo"
                loading="lazy"
                width="800"
                height="800"
              />
              <div>
                <h4 className="text-2xl font-semibold">
                  Pablo Cabezuelo Fayos
                </h4>
                <span className="block text-sm text-gray-500">CEO</span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="w-80 h-80 mx-auto object-cover rounded-xl"
                src={imageAmalia}
                alt="Amalia Ponce Toledo"
                loading="lazy"
                width="800"
                height="800"
              />

              <div>
                <h4 className="text-2xl font-semibold">Amalia Ponce Toledo</h4>
                <span className="block text-sm text-gray-500">
                  Desarrolladora web
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-neutral-700 m-2 lg:m-32">
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h3 className="mb-6 text-3xl font-bold">
            Qué dicen nuestros clientes de nosotros
          </h3>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0">
            Nuestro trabajo en redes sociales y desarrollo web ha dejado huella
            en muchos de nuestros clientes. Descubre cómo hemos transformado su
            presencia digital.
          </p>
        </div>

        <div className="grid gap-6 text-center md:grid-cols-3">
          <div>
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="h-28 overflow-hidden rounded-t-lg bg-primary"></div>
              <div className="mx-auto -mt-12 w-36 overflow-hidden rounded-full border-2 border-white bg-white">
                <img
                  src="https://cdn.pixabay.com/photo/2020/04/15/16/58/smile-5047506_1280.jpg"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Carlos Gómez</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                  </span>
                  "El equipo de PcFayos mejoró nuestras redes sociales con una
                  estrategia efectiva que incrementó notablemente nuestro
                  alcance."
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="h-28 overflow-hidden rounded-t-lg bg-primary"></div>
              <div className="mx-auto -mt-12 w-36 overflow-hidden rounded-full border-2 border-white bg-white">
                <img
                  src="https://img.freepik.com/foto-gratis/joven-empresaria-posando-espacio-copia_23-2148826478.jpg?t=st=1725833759~exp=1725837359~hmac=2bf3203b69f55c692a43e6fc9bbab91ebfccedeab88b584dbf5b098a820fa1c1&w=2000"
                  alt="Ana Martínez"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Ana Martínez</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                  </span>
                  "El diseño de nuestra nueva web superó todas las expectativas.
                  Se logró captar nuestra visión y convertirla en una
                  experiencia de usuario intuitiva y atractiva."
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="h-28 overflow-hidden rounded-t-lg bg-primary"></div>
              <div className="mx-auto -mt-12 w-36 overflow-hidden rounded-full border-2 border-white bg-white">
                <img
                  src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_1280.jpg"
                  alt="Luis Pérez"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Luis Pérez</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                  </span>
                  "La atención al detalle en nuestra campaña de redes sociales
                  fue impresionante. PcFayos no solo entregó resultados, sino
                  que superó nuestras expectativas."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de FAQ */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="w-full flex justify-between items-center py-4 px-6 bg-white text-gray-900 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium">{item.question}</span>
                  <span
                    className={`transition-transform transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-2 px-6 pb-4 text-gray-700">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const faqItems = [
  {
    question: "¿Qué servicios ofrece PcFayos?",
    answer:
      "En PcFayos, nos especializamos en el diseño y desarrollo de sitios web a medida, así como en la gestión y optimización de redes sociales. Creamos soluciones digitales personalizadas para ayudar a tu negocio a destacar en línea.",
  },
  {
    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    answer:
      "El tiempo de desarrollo de un sitio web varía según la complejidad del proyecto. En general, un sitio web básico puede tomar entre 4 y 6 semanas, mientras que proyectos más complejos pueden requerir más tiempo. Proporcionamos un cronograma detallado antes de comenzar el trabajo.",
  },
  {
    question: "¿Cómo puedo mejorar mi presencia en redes sociales?",
    answer:
      "Ofrecemos servicios de gestión de redes sociales que incluyen la creación de contenido atractivo, la planificación de publicaciones y el análisis de rendimiento. Trabajamos contigo para desarrollar una estrategia personalizada que aumente tu visibilidad y engagement.",
  },
  {
    question: "¿Qué tipo de sitios web pueden desarrollar?",
    answer:
      "Desarrollamos una amplia gama de sitios web, desde sitios web corporativos y de comercio electrónico hasta blogs y portafolios personales. Cada proyecto es adaptado a las necesidades y objetivos específicos de tu negocio.",
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento del sitio web?",
    answer:
      "Sí, ofrecemos soporte continuo después del lanzamiento del sitio web. Esto incluye mantenimiento, actualizaciones y asistencia técnica para asegurarnos de que tu sitio web siga funcionando sin problemas.",
  },
  {
    question: "¿Cuál es el proceso para iniciar un proyecto con PcFayos?",
    answer:
      "Para iniciar un proyecto, primero te invitamos a una consulta inicial para discutir tus necesidades y objetivos. Luego, creamos una propuesta detallada y un plan de acción. Una vez que apruebes la propuesta, comenzamos el desarrollo y mantenemos una comunicación constante a lo largo del proyecto.",
  },
];

export default About;
