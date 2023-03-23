import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen">
        <Outlet />
        
      </div>
      <Footer />
    </>
  );
}

export default Layout;
