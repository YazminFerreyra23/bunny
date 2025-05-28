
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
              className="mx-auto w-72 h-72 border-green-500"
            />
            <h1 className="text-sm uppercase tracking-widest mt-2 font-semibold">Bunny Soluciones Tecnológicas</h1>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transformamos ideas en resultados digitales reales
          </h2>
        </div>
      </section>

      <div>
      <section class="w-full bg-[#23191A] text-white font-[Montserrat] py-20 px-4">
  <div class="max-w-7xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-12">¿Por qué contratarnos?</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
     
      <div class="flex flex-col items-center text-center">
        <div class="bg-[#37292A] rounded-full p-6 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h4l3-3 4 4 3-3 4 4M4 20h16M4 16h16" />
          </svg>
        </div>
        <h3 class="text-lg font-bold mb-1 text-white">RED AMPLIA</h3>
        <p class="text-sm text-gray-300">Te atendemos sin importar donde te encuentres.</p>
      </div>

    
      <div class="flex flex-col items-center text-center">
        <div class="bg-[#37292A] rounded-full p-6 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold mb-1 text-white">ATENCIÓN INIGUALABLE</h3>
        <p class="text-sm text-gray-300">Asistencia virtual. Hablá con nosotros sobre cualquier inquietud, 24/7.</p>
      </div>

    
      <div class="flex flex-col items-center text-center">
        <div class="bg-[#37292A] rounded-full p-6 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 3v18m4.5-18v18M3 9.75h18m-18 4.5h18" />
          </svg>
        </div>
        <h3 class="text-lg font-bold mb-1 text-white">UNA IU FÁCIL Y APTA PARA PRINCIPIANTES</h3>
        <p class="text-sm text-gray-300">Nuestra interfaz es sencilla y fácil de usar.</p>
      </div>
    </div>
  </div>
</section>


<section class="w-full bg-[#23191A] text-white font-[Montserrat] py-20 px-4">
  <div class="max-w-7xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-12">QUÉ OFRECEMOS</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
    
      <div class="flex flex-col items-center text-center">
        <img src="/images/code1.jpg" alt="Diseño web" class="w-full max-w-[220px] rounded-lg mb-4"/>
        <h3 class="text-lg font-bold text-[#D9A5D7]">Diseño y desarrollo web</h3>
        <ul class="text-sm text-gray-300 mt-2">
          <li>- Sitios web institucionales y personales</li>
          <li>- Tiendas online (e-commerce)</li>
          <li>- Landing pages para campañas</li>
          <li>- Blogs y portfolios</li>
          <li>- Integraciones con redes sociales</li>
        </ul>
      </div>

    
      <div class="flex flex-col items-center text-center">
        <img src="/images/code2.jpg" alt="Automatización" class="w-full max-w-[220px] rounded-lg mb-4"/> 
        <h3 class="text-lg font-bold text-[#D9A5D7]">Automatización de negocios</h3>
        <ul class="text-sm text-gray-300 mt-2">
          <li>- Sistemas de reservas, turnos, pagos</li>
          <li>- Automatización de ventas y atención al cliente</li>
          <li>- CRM básicos y personalizados</li>
          <li>- Formularios inteligentes</li>
          <li>- Integración con herramientas externas (Zapier, APIs)</li>
        </ul>
      </div>

   
      <div class="flex flex-col items-center text-center">
        <img src="/images/code3.jpg" alt="Diseño gráfico" class="w-full max-w-[220px] rounded-lg mb-4"/>
        <h3 class="text-lg font-bold text-[#D9A5D7]">Branding y diseño gráfico</h3>
        <ul class="text-sm text-gray-300 mt-2">
          <li>- Diseño de identidad visual</li>
          <li>- Diseño UX/UI para productos digitales</li>
          <li>- Diseño de material promocional digital</li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-16">
  
      <div class="flex flex-col items-center text-center">
        <img src="/images/code1.jpg" alt="Soporte" class="w-full max-w-[220px] rounded-lg mb-4"/>
        <h3 class="text-lg font-bold text-[#D9A5D7]">Soporte tecnológico y asesoría</h3>
        <ul class="text-sm text-gray-300 mt-2">
          <li>- Mantenimiento web</li>
          <li>- Hosting y dominios</li>
          <li>- Consultoría en digitalización y procesos internos</li>
        </ul>
      </div>

      <div class="flex flex-col items-center text-center">
        <img src="/images/code1.jpg" alt="Redes sociales" class="w-full max-w-[220px] rounded-lg mb-4"/>
        <h3 class="text-lg font-bold text-[#D9A5D7]">Gestión de redes sociales (Instagram)</h3>
        <ul class="text-sm text-gray-300 mt-2">
          <li>- Creación de contenido visual y textual</li>
          <li>- Calendario de publicaciones</li>
          <li>- Diseño de feed atractivo y coherente con la marca</li>
          <li>- Estrategia de crecimiento y engagement</li>
          <li>- Análisis básico de estadísticas</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      </div>
    </div>

    </>


  )

  
  }

export default App
