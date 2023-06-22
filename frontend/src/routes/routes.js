import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import SecurityError from "../pages/errors/ErrorSecurity";
import RGPDError from "../pages/errors/ErrorRgpd";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/securityerror" element={<SecurityError />} />
      <Route path="/rgpderror" element={<RGPDError />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
