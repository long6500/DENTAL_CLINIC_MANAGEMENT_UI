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
import RangHo from "./pages/rangho";
import Blogs from "./pages/blogs";
import Quytrinh from "./pages/quytrinh";

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
        <Route path="/pathological1" element={<Pathological />}></Route>
        <Route path="/rangho" element={<RangHo/>}></Route>
        <Route path="/rangmom" element={<Blogs/>}></Route>
        <Route path="/quytrinh" element={<Quytrinh/>}></Route>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
