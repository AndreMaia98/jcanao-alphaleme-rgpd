import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import SecurityError from "../pages/errors/ErrorSecurity";
import Cookies from "../components/cookies";
import RGPD from "../pages/Rgpd";

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<SecurityError />} />
      <Route path="/" element={<Home />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/rgpd" element={<RGPD />} />
    </Routes>
  );
}

export default AppRoutes;
