import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 h-12">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6  lg:px-8">
          <p className="text-left text-white">
            © {new Date().getFullYear()} Alejandro Palacios Gomez. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
  );
}
export default Footer;
