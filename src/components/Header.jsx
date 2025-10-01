

import React from "react";


import "bootstrap-icons/font/bootstrap-icons.css";
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mi Landing Page</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#main" className="hover:text-gray-300 transition-colors">
              Inicio
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-300 transition-colors">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


