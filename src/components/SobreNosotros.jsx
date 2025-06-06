import React from 'react'

export const SobreNosotros = () => {
  return (
    <div>
        <section id="sobreNosotros" className="w-full bg-[#23191A] text-white font-[Montserrat] py-20 px-4">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex justify-center items-center gap-2">
      <span role="img" aria-label="conejo">🐰</span> Sobre Nosotros
    </h2>
    <p className="text-lg text-gray-200 mb-12">
      En Bunny Creations World damos vida a ideas con creatividad, diseño y pasión. Nos especializamos en la creación de contenido visual, desarrollo de páginas web, invitaciones personalizadas, material publicitario y diseños exclusivos para redes sociales. Nuestro compromiso es ofrecer soluciones originales, funcionales y con identidad propia, adaptadas a las necesidades de cada cliente. Transformamos lo que imaginás en algo visualmente impactante y profesional.
    </p>

    <div className="grid md:grid-cols-3 gap-10 text-left">
      {/* Misión */}
      <div>
        <h3 className="text-[#D9A5D7] font-bold mb-2">MISIÓN:</h3>
        <p className="text-sm text-gray-300">
          Crear soluciones tecnológicas creativas, accesibles y eficientes que impulsen la digitalización, automatización y crecimiento de negocios y emprendimientos en el entorno digital.
        </p>
      </div>

      {/* Visión */}
      <div>
        <h3 className="text-[#D9A5D7] font-bold mb-2">VISIÓN:</h3>
        <p className="text-sm text-gray-300">
          Ser un estudio de desarrollo y diseño de referencia en Latinoamérica, reconocido por su innovación, calidad humana y capacidad de adaptación a los cambios tecnológicos.
        </p>
      </div>

      {/* Valores */}
      <div>
        <h3 className="text-[#D9A5D7] font-bold mb-2">VALORES CLAVE:</h3>
        <ul className="text-sm text-gray-300 list-disc list-inside">
          <li>Trabajo en equipo</li>
          <li>Compromiso con el cliente</li>
          <li>Creatividad + Tecnología</li>
          <li>Transparencia</li>
          <li>Mejora continua</li>
        </ul>
      </div>
    </div>

    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { nombre: "Fernando Osorio", autor: "Yazmin Ferreyra" },
        { nombre: "Yazmin Ferreyra", autor: "Yazmin Ferreyra" },
        { nombre: "Arturo Prado", autor: "Yazmin Ferreyra" },
        { nombre: "Sofia Pericas", autor: "Yazmin Ferreyra" },
      ].map((persona, index) => (
        <div key={index} className="bg-[#4E474C] p-4 rounded-md flex items-center gap-4">
          <div className="w-16 h-16 bg-green-400 rounded-md flex items-center justify-center text-white text-2xl">
            🌄
          </div>
          <div>
            <p className="font-semibold">{persona.nombre}</p>
            <p className="text-sm text-gray-300">{persona.autor}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}
