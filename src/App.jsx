
import { useState } from 'react';
function App() {
  
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
   
    <div>
          <nav className="bg-black text-white font-montserrat fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide uppercase">Bunny</div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#servicios" className="hover:text-purple-400 transition">Servicios</a>
          <a href="#sobre-nosotros" className="hover:text-purple-400 transition">Sobre nosotros</a>
          <a href="#contacto" className="hover:text-purple-400 transition">Contacto</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-3 text-sm font-medium">
          <a href="#servicios" className="block hover:text-purple-400 transition">Servicios</a>
          <a href="#sobre-nosotros" className="block hover:text-purple-400 transition">Sobre nosotros</a>
          <a href="#contacto" className="block hover:text-purple-400 transition">Contacto</a>
        </div>
      )}
    </nav>
    </div>
    <div>
      <section className="min-h-screen w-full bg-gradient-to-b from-[#fdbb2d] via-[#d84fe2] to-[#8a2be2] text-white font-montserrat flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32">
        <div className="text-center max-w-3xl">
          <div className="mb-8">
            <img
              src="img/bunnylogo.png" // Reemplazá con tu logo o ícono
              alt="Bunny Soluciones Tecnológicas"
              className="mx-auto w-72 h-72"
            />
            <h1 className="text-sm uppercase tracking-widest mt-2 font-semibold">Bunny Soluciones Tecnológicas</h1>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transformamos ideas en resultados digitales reales
          </h2>
        </div>
      </section>
    </div>

    </>


  )

  
  }

export default App
