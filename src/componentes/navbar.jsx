import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FaHome, FaQuestion, FaPhone } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold">
              Alejandro Palacios Gomez
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline text-white gap-4 px-5 ">
              <NavLink
                to="/"
                activeClassName="font-bold"
                className="inline-flex items-center"
              >
                Home
                <FaHome className="ml-2 w-4 h-4" />
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="font-bold"
                className="inline-flex items-center"
              >
                About
                <FaQuestion className="ml-2 w-4 h-4" />
              </NavLink>
              <NavLink
                to="contact"
                activeClassName="font-bold"
                className="inline-flex items-center"
              >
                Contact
                <FaPhone className="ml-2 w-4 h-4" />
              </NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              {open ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${open ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link
            to="/"
            className="items-center block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300"
          >
            Home
            <FaHome className="ml-2 w-4 h-4" />
          </Link>
          <Link
            to="/about"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300"
          >
            About me
            <FaQuestion className="ml-2 w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300"
          >
            Contact me
            <FaPhone className="ml-2 w-4 h-4 text-center" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// <div class="flex flex-row justify-around bg-cyan-800 p-2 gap-4 w-full text-white">
//  <NavLink
//   to="/"
//   activeClassName="font-bold"
//   className="inline-flex items-center"
// >
//   Home
//   <FaHome className="ml-2 w-4 h-4" />
// </NavLink>
// <NavLink
//   to="/about"
//   activeClassName="font-bold"
//   className="inline-flex items-center"
// >
//   About
//   <FaQuestion className="ml-2 w-4 h-4" />
// </NavLink>
// <NavLink
//   to="contact"
//   activeClassName="font-bold"
//   className="inline-flex items-center"
// >
//   Contact
//   <FaPhone className="ml-2 w-4 h-4" />
// </NavLink>
// </div> *
