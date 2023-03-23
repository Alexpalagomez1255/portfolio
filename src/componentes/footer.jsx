import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-left text-white">
            © {new Date().getFullYear()} Alejandro Palacios Gomez. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
  );
}

export default Footer;
