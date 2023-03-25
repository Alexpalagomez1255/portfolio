import React from "react";
import { Outlet } from 'react-router-dom'
import Footer from "./footer";
import Navbar from "./navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col flex-grow">
        <Outlet/>
      </div>
      <footer className="bg-gray-800 text-white py-4 px-6 flex-shrink-0  bottom-0 w-full sm:py-4 sm:px-6 sm:fixed">
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
