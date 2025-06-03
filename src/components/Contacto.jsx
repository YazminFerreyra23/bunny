import React from 'react'

export const Contacto = () => {
  return (
    <div>
     <section class="w-full bg-[#000000] text-white font-montserrat py-20 px-4 text-center">
    <div class="max-w-4xl mx-auto">
      <div class="mb-12">
        <img src="img/bunnylogo1.png" alt="Logo Bunny" className="mx-auto  w-48 h-48"/>
       
        <p class="text-sm font-semibold">SOLUCIONES TECNOLÓGICAS</p>
      </div>
  

  
      <button class="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#23191A] transition">
        COMUNICÁTE CON NOSOTROS
      </button>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
        <div>
          <h3 class="font-bold text-white mb-2">CORREO</h3>
          <p class="text-gray-300">bunnyproducciones24@gmail.com</p>
        </div>
        <div>
          <h3 class="font-bold text-white mb-2">TELÉFONO</h3>
          <p class="text-gray-300">(55) 1234 5678</p>
        </div>
        <div>
          <h3 class="font-bold text-white mb-2">REDES SOCIALES</h3>
          <div class="flex justify-center items-center gap-4 text-2xl">
            <a href="#" class="text-white hover:text-[#D9A5D7]"><i class="fab fa-facebook"></i></a>
            <a href="#" class="text-white hover:text-[#D9A5D7]"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
  );
};

