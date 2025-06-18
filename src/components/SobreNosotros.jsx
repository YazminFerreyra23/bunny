import React from 'react';
import { FaLinkedin } from 'react-icons/fa';



export const SobreNosotros = () => {
  return (
    <div>
    

      <section className="w-full bg-gray-100 font-[Montserrat] py-10 px-4">
        <div className="max-w-6xl mx-auto border-4 border-pink-500 p-6 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            ¿POR QUÉ INVERTIR EN EL DISEÑO Y DESARROLLO DE UNA PÁGINA WEB EN ARGENTINA?
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Tener presencia online es fundamental para cualquier negocio o emprendimiento en la actualidad. En Argentina, un sitio web profesional no solo valida tu marca, sino que también te permite alcanzar una audiencia más amplia, ofrecer tus productos o servicios las 24/7 y establecer un canal de comunicación directo con tus clientes. Invertir en diseño y desarrollo web localmente asegura un conocimiento profundo del mercado y las tendencias argentinas, optimizando tu estrategia digital para el éxito.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {[
              {
                name: 'FLOYD MILES',
                title: 'PRINCIPAL DESIGNER',
                image: 'https://via.placeholder.com/150', // Replace with actual image paths
                linkedin: '#',
              },
              {
                name: 'FLOYD MILES',
                title: 'PRINCIPAL DESIGNER',
                image: 'https://via.placeholder.com/150', // Replace with actual image paths
                linkedin: '#',
              },
              {
                name: 'FLOYD MILES',
                title: 'PRINCIPAL DESIGNER',
                image: 'https://via.placeholder.com/150', // Replace with actual image paths
                linkedin: '#',
              },
              {
                name: 'FLOYD MILES',
                title: 'PRINCIPAL DESIGNER',
                image: 'https://via.placeholder.com/150', // Replace with actual image paths
                linkedin: '#',
              },
            ].map((person, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h4 className="font-bold text-gray-800">{person.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{person.title}</p>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-700 text-2xl" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};
