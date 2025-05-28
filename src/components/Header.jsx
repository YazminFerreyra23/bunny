export const Header = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b  bg-[#23191A] text-white font-montserrat flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="text-center max-w-3xl">
        <div className="mb-8">
          <img
            src="img/bunnylogo.png" // Reemplazá con tu logo o ícono
            alt="Bunny Soluciones Tecnológicas"
            className="mx-auto w-72 h-72 border-green-500"
          />
          <h1 className="text-sm uppercase tracking-widest mt-2 font-semibold">
            Bunny Soluciones Tecnológicas
          </h1>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Transformamos ideas en resultados digitales reales
        </h2>
      </div>
    </section>
  );
};
