import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2dno7xi",
        "template_px4o05i",
        formData,
        "tFySpVVghg9lWf5sE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setError(null);
        },
        (error) => {
          console.log(error.text);
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="relative bg-[url('../src/assets/high-angle-desk-arrangement-with-laptop.jpg')] bg-cover bg-center bg-no-repeat mt-1 z-0">
      <div className="absolute inset-0 bg-gray-900/85 lg:bg-gray-900/80"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-20 md:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center lg:text-left bg-white bg-opacity-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8">
            Contacta con nosotros
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-semibold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                placeholder="Introduce tu nombre"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                placeholder="Introduce tu email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-semibold mb-2"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none bg-white"
                placeholder="Cuéntanos tu idea"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out transform hover:scale-105 w-full lg:w-full"
            >
              Enviar
            </button>
          </form>
          {isSent && (
            <p className="text-green-500 text-center text-lg mt-4">
              Mensaje enviado correctamente 🫶🏻
            </p>
          )}
          {error && (
            <p className="text-red-500 text-center text-lg mt-4">{error}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
