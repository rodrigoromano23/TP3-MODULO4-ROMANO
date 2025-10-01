

import React from "react";


import "bootstrap-icons/font/bootstrap-icons.css";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto text-center font-sans">
        <p className="text-sm mb-2">
          &copy; 2025 Mi Landing Page. Todos los derechos reservados.
        </p>
        <div className="flex justify-center gap-4 text-lg">
          <a href="#" className="hover:text-blue-400">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="hover:text-sky-400">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="hover:text-pink-400">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

