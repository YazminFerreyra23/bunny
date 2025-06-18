import { useState } from "react";

export default function ProjectCarousel () {
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      title: "Estudio Jurídico Pérez",
      image: "/images/proyecto1.jpg",
      link: "https://estudiojuridicoperez.com",
    },
    {
      title: "HealthyFit Suplementos",
      image: "/images/proyecto2.jpg",
      link: "https://healthyfit.com.ar",
    },
    {
      title: "Florería del Centro",
      image: "/images/proyecto3.jpg",
      link: "https://floreriadelcentro.com",
    },
  ];

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="px-6 py-10 bg-white">
      <h2 className="text-center text-xl font-bold mb-4 uppercase text-gray-800">
        Tu Página Web Profesional
      </h2>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative w-full max-w-3xl rounded-lg overflow-hidden shadow-lg">
          <img
            src={projects[current].image}
            alt={projects[current].title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-60 w-full p-4 text-white">
            <h3 className="text-lg font-semibold">{projects[current].title}</h3>
            <a
              href={projects[current].link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-sm text-fuchsia-300 hover:text-fuchsia-100"
            >
              Visitar sitio →
            </a>
          </div>
        </div>

        <div className="flex gap-4 mt-2">
          <button
            onClick={prev}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}