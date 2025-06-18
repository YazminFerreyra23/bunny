export default function Services() {
    return (
      <section className="px-6 py-10">
        <h2 className="text-center text-xl font-bold mb-4">TU PÁGINA WEB PROFESIONAL</h2>
        <h3 className="text-center text-2xl font-bold text-fuchsia-700 mb-6">QUÉ OFRECEMOS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div>
            <h4 className="font-bold mb-1">Sitios y diseño web</h4>
            <ul className="list-disc ml-4">
              <li>Webs institucionales y personales</li>
              <li>E-commerce y tiendas online</li>
              <li>Landing pages para campañas</li>
              <li>Integración con redes sociales</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-1">Automatización y herramientas</h4>
            <ul className="list-disc ml-4">
              <li>Formularios inteligentes</li>
              <li>CRM personalizados</li>
              <li>Reservas, turnos y pagos</li>
              <li>Conexión con APIs externas (Zapier, etc.)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-1">Marketing y contenidos</h4>
            <ul className="list-disc ml-4">
              <li>Diseño de identidad visual</li>
              <li>Calendario de publicaciones</li>
              <li>Feed visual coherente</li>
              <li>Material promocional digital</li>
              <li>Análisis y estrategia de crecimiento</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  