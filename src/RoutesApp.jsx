import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import WebDesign from "./components/webDesign/WebDesign";
import Instagram from "./components/socialMedia/Instagram";
import Facebook from "./components/socialMedia/Facebook";
import Tiktok from "./components/socialMedia/Tiktok";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diseñoweb" element={<WebDesign />} />
      <Route path="/social-media/instagram" element={<Instagram />} />
      <Route path="/social-media/facebook" element={<Facebook />} />
      <Route path="/social-media/tiktok" element={<Tiktok />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
}

export default RoutesApp;
