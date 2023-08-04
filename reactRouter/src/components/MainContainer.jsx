import React from "react";
import { Routes, Route } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";
import Pink from "./Pink";
import Yellow from "./Yellow";

function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue/>} />
        <Route path="/red" element={<Red/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/pink" element={<Pink/>} />
        <Route path="/yellow" element={<Yellow/>} />
      </Routes>
    </div>
  );
}

export default MainContainer;
