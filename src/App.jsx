import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="terms-and-conditions" element={<TermsAndConditions />}></Route>
      <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
    </Routes>
  );
}

export default App;