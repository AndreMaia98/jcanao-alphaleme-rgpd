import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SecurityError from "../pages/errors/ErrorSecurity";
import PrivacyPolicy from "../pages/Privacypolicy";
import RGPD from "../pages/Rgpd";

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<SecurityError />} />
      <Route path="/" element={<Home />} />
      <Route path="/rgpd" element={<RGPD />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default AppRoutes;
