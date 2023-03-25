import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FaHome, FaQuestion, FaPhone } from "react-icons/fa";
import logo from "../img/Marco.jpg"

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-22">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold">
              <img className="h-20 w-64 rounded-full py-2" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline text-white gap-4 px-5  ">
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
          <div className="-mr-1 flex sm:hidden">
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
      <div className={`md:hidden ${open ? "block" : "hidden"} `}>
        <div className="flex flex-col mx-auto px-2 pt-2 pb-3 sm:px-3">
          <Link
            to="/"
            className=" inline-flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300"
          >
            Home
            <FaHome className="ml-4 w-4 h-4" />
          </Link>
          <Link
            to="/about"
            className="mt-1 inline-flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300"
          >
            About me
            <FaQuestion className="ml-4 w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="mt-1 inline-flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300"
          >
            Contact me
            <FaPhone className="ml-4 w-4 h-4 " />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
