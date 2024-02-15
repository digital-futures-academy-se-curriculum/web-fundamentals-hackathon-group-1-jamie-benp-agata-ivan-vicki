import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import WhatsOn from "./pages/WhatsOn";
import Navbar from "./components/Navbar";

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="./pages/WhatsOn" element={<WhatsOn />} />
        <Route path="./pages/Signup" element={<Signup />} />
      </Routes>
    </Router>

  );
};

export default App;
