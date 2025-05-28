import React from "react";

export const OurServices = () => {
  return (
    <section class="w-full bg-[#23191A] text-white font-montserrat py-20 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 font-montserrat">
          QUÉ OFRECEMOS
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div class="flex flex-col items-center text-center">
            <img
              src="/images/code1.jpg"
              alt="Diseño web"
              class="w-full max-w-[220px] rounded-lg mb-4"
            />
            <h3 class="text-lg font-bold text-[#D9A5D7]">
              Diseño y desarrollo web
            </h3>
            <ul class="text-sm text-gray-300 mt-2 ">
              <li>- Sitios web institucionales y personales</li>
              <li>- Tiendas online (e-commerce)</li>
              <li>- Landing pages para campañas</li>
              <li>- Blogs y portfolios</li>
              <li>- Integraciones con redes sociales</li>
            </ul>
          </div>

          <div class="flex flex-col items-center text-center">
            <img
              src="/images/code2.jpg"
              alt="Automatización"
              class="w-full max-w-[220px] rounded-lg mb-4"
            />
            <h3 class="text-lg font-bold text-[#D9A5D7]">
              Automatización de negocios
            </h3>
            <ul class="text-sm text-gray-300 mt-2">
              <li>- Sistemas de reservas, turnos, pagos</li>
              <li>- Automatización de ventas y atención al cliente</li>
              <li>- CRM básicos y personalizados</li>
              <li>- Formularios inteligentes</li>
              <li>- Integración con herramientas externas (Zapier, APIs)</li>
            </ul>
          </div>

          <div class="flex flex-col items-center text-center">
            <img
              src="/images/code3.jpg"
              alt="Diseño gráfico"
              class="w-full max-w-[220px] rounded-lg mb-4"
            />
            <h3 class="text-lg font-bold text-[#D9A5D7]">
              Branding y diseño gráfico
            </h3>
            <ul class="text-sm text-gray-300 mt-2">
              <li>- Diseño de identidad visual</li>
              <li>- Diseño UX/UI para productos digitales</li>
              <li>- Diseño de material promocional digital</li>
            </ul>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-16">
          <div class="flex flex-col items-center text-center">
            <img
              src="/images/code1.jpg"
              alt="Soporte"
              class="w-full max-w-[220px] rounded-lg mb-4"
            />
            <h3 class="text-lg font-bold text-[#D9A5D7]">
              Soporte tecnológico y asesoría
            </h3>
            <ul class="text-sm text-gray-300 mt-2">
              <li>- Mantenimiento web</li>
              <li>- Hosting y dominios</li>
              <li>- Consultoría en digitalización y procesos internos</li>
            </ul>
          </div>

          <div class="flex flex-col items-center text-center">
            <img
              src="/images/code1.jpg"
              alt="Redes sociales"
              class="w-full max-w-[220px] rounded-lg mb-4"
            />
            <h3 class="text-lg font-bold text-[#D9A5D7]">
              Gestión de redes sociales (Instagram)
            </h3>
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
  );
};
