import React, { useState } from "react";
import { createBrowserRouter, Link } from "react-router-dom";



export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">

    <div className="flex items-center gap-2">
      <img src="/img/bunnylogo1.png" alt="Bunny Logo" className="h-6" />
     
    </div>
    <ul className="flex gap-4 font-semibold text-sm">
      <li><Link to="/nosotros" className="hover:text-pink-500">SOBRE NOSOTROS</Link></li>
     <li><Link to="/servicios" className="hover:text-pink-500">SERVICIOS</Link></li>
      <li><a href="#" className="bg-pink-400 text-white px-4 py-1 rounded-full hover:bg-pink-500">CANTÁCTANOS AHORA</a></li>
    </ul>
    
  </nav>
  );
};
