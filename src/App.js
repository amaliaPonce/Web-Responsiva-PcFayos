import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navegador/Nav";
import Footer from "./components/home/Footer";
import RoutesApp from "./RoutesApp";

function App() {
  return (
    <Router>
      <Navbar />
      <RoutesApp />
      <Footer />
    </Router>
  );
}

export default App;
