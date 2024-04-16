import "./App.css";
import Navbar from "./Navbar";
import Searchtext from "./inputtext";
import React from "react";
import About from "./about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        
        <Routes>
          <Route path="/" element={<Searchtext />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        
      </Router>
      
    </>
  );
}

export default App;
