import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SecurityError from "../pages/errors/ErrorSecurity";
import PrivacyPolicy from "../pages/Privacypolicy";
import CookiesPolicy from "../pages/Cookiespolicy";
import TermsConditions from "../pages/Terms&Conditions";
import RGPD from "../pages/Rgpd";

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<SecurityError />} />
      <Route path="/" element={<Home />} />
      <Route path="/rgpd" element={<RGPD />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookies-policy" element={<CookiesPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
    </Routes>
  );
}

export default AppRoutes;
