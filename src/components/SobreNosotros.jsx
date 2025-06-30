
export default function MiComponenteSpline() {
  return (

    <main>
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold secund-color mb-6 uppercase">Sobre Nosotros:</h2>
        <p className="text-lg mb-4">
          En <strong>Bunny Creation World</strong> somos un equipo creativo y multidisciplinario formado por estudiantes de Ingeniería en Sistemas con pasión por la tecnología, el diseño y la comunicación digital.
        </p>
        <p className="text-lg mb-4">
          Nos une el entusiasmo por crear, desarrollar y acompañar marcas en el mundo digital. Contamos con programadores, diseñadores gráficos y una community manager, lo que nos permite ofrecer soluciones completas: desde el desarrollo de páginas web hasta la creación de contenido visual y estrategias para redes sociales.
        </p>
        <p className="text-lg mb-8">
          Creemos en el trabajo colaborativo, el aprendizaje constante y en el poder de las ideas bien ejecutadas.
        </p>

        <div className="bg-primary-color bg- text-white py-3 text-center text-xl font-bold mb-4 rounded">
          Nuestro Equipo
        </div>
        <p className="text-center text-xl mb-10 max-w-xl mx-auto">
          Nuestro equipo está conformado por programadores, diseñadores y una community manager, que combinan sus talentos para dar vida a cada proyecto.
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {/* Primer fila: 3 tarjetas */}
          <div className="flex flex-col items-center border-2 border-primary-color border-pink-400 rounded-xl p-4 w-52">
            <img
              src="/img/yazmin.JPG"
              alt="Yazmin Ferreyra"
              className="w-30 h-30 rounded-full mb-2"
            />
            <h3 className="font-semibold text-xl text-center">Yazmin Ferreyra</h3>
            <p className="italic text-lg mb-2 text-center">programadora</p>
            <a href="www.linkedin.com/in/yazmin-ferreyra" target="_blank" rel="noopener noreferrer">
              <i
                class=
                "fi fi-brands-linkedin text-3xl "
              ></i>
            </a>
          </div>

          <div className="flex flex-col items-center border-2 border-pink-400 rounded-xl p-4 w-52">
          <img
              src="/img/yazmin.JPG"
              alt="Yazmin Ferreyra"
              className="w-30 h-30 rounded-full mb-2"
            />
            <h3 className="font-semibold text-xl text-center">Yazmin Ferreyra</h3>
            <p className="italic text-lg mb-2 text-center">programadora</p>
            <a href="www.linkedin.com/in/yazmin-ferreyra" target="_blank" rel="noopener noreferrer">
              <i
                class=
                "fi fi-brands-linkedin text-3xl "
              ></i>
            </a>
          </div>

          <div className="flex flex-col items-center border-2 border-pink-400 rounded-xl p-4 w-52">
          <img
              src="/img/yazmin.JPG"
              alt="Yazmin Ferreyra"
              className="w-30 h-30 rounded-full mb-2"
            />
            <h3 className="font-semibold text-xl text-center">Yazmin Ferreyra</h3>
            <p className="italic text-lg mb-2 text-center">programadora</p>
            <a href="www.linkedin.com/in/yazmin-ferreyra" target="_blank" rel="noopener noreferrer">
              <i
                class=
                "fi fi-brands-linkedin text-3xl "
              ></i>
            </a>
          </div>

          {/* Segunda fila: 2 tarjetas centradas */}
          <div className="col-span-1 md:col-start-2 flex flex-col items-center border-2 border-pink-400 rounded-xl p-4 w-52">
            {/* Miembro 4 */}
          </div>

          <div className="col-span-1 flex flex-col items-center border-2 border-pink-400 rounded-xl p-4 w-52">
            {/* Miembro 5 */}
          </div>
        </div>
      </section>
    </main>
  );
}
