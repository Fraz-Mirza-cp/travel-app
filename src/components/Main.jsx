import React from 'react'
import './Main.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Travel from "../pages/Travel";
import Umrah from "../pages/Umrah";
import Hajj from "../pages/Hajj";
import Customer from "../pages/Customer"
import Contact from "../pages/Contact";

import Header from "../components/Header"

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={< About />} />
        <Route path="/Travel" element={< Travel />} />
        <Route path="/Umrah" element={< Umrah />} />
        <Route path="/Hajj" element={< Hajj />} />
        <Route path="/Customer" element={< Customer />} />
        <Route path="/Contact" element={< Contact />} />
      </Routes>
    </Router>
  )
}