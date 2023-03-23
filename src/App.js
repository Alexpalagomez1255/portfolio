import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Layout from "./componentes/layout";
import {React} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
