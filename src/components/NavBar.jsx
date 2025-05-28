import React, { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black text-white font-montserrat fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide uppercase">Bunny</div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#servicios" className="hover:text-purple-400 transition">
            Servicios
          </a>
          <a
            href="#sobre-nosotros"
            className="hover:text-purple-400 transition"
          >
            Sobre nosotros
          </a>
          <a href="#contacto" className="hover:text-purple-400 transition">
            Contacto
          </a>
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
          <a
            href="#servicios"
            className="block hover:text-purple-400 transition"
          >
            Servicios
          </a>
          <a
            href="#sobre-nosotros"
            className="block hover:text-purple-400 transition"
          >
            Sobre nosotros
          </a>
          <a
            href="#contacto"
            className="block hover:text-purple-400 transition"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};
