export const Footer = () =>  {
    return (
      <footer className="bg-gray-100 text-center text-xs py-6 mt-16">
        <div className="flex justify-center gap-10 mb-4">
          <img src="/img/bunnylogo1.png" alt="Bunny Logo" className="h-6" />
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div>
            <strong>CORREO</strong>
            <p>bunnyproducciones24@gmail.com</p>
          </div>
          <div>
            <strong>TELÉFONO</strong>
            <p>(55) 1234 5678</p>
          </div>
          <div>
            <strong>REDES SOCIALES</strong>
                                                                   <a href="https://www.instagram.com/bunnycreationsworld?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="></a>
          </div>
        </div>
      </footer>
    );
  }
  