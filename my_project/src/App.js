import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/products";
import Services from "./pages/services";
import Pathological from "./pages/pathological";
import Teams from "./pages/team";
import Footer from "./components/Footer/Footer";
import "./App.css";
import BasicExample from "./components/BasicNavbar/BasicExample";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <BasicExample></BasicExample>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/team" element={<Teams />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/pathological" element={<Pathological />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
