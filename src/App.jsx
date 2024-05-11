import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from './components/Inicio';
import AboutUs from './components/AboutUs';
import Prestamo from './components/Prestamo';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar /> {/* Renderiza el componente Navbar */}
        {/* Agrega las rutas aquí */}
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='quienessomos' element={<AboutUs />} />
          <Route path='prestamo' element={<Prestamo />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default App;
