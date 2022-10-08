import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductsList from "./pages/ProductsList";
import A404Page from "./pages/A404Page";
import ReturnAndCancellation from "./pages/ReturnAndCancellation";
import ProductPage from "./pages/MousePage";
import LoginRegister from "./pages/LoginRegister";
import ShoppingCart from "./pages/ShoppingCart";
import MousePage from "./pages/MousePage";
import KeyboardPage from "./pages/KeyboardPage";
import HeadphonePage from "./pages/HeadphonePage";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import Account from "./pages/Account";
import ProtectedRoute from "./pages/components/ProtectedRoute";

function App() {
  return (
    <UserAuthContextProvider>
      
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="keyboard-list" element={<ProductsList categoryHeading="Keyboard"/>}></Route>
        <Route path="mouse-list" element={<ProductsList categoryHeading="Mouse"/>} />
        <Route path="mouse/:mouseId" element={<MousePage />} />
        <Route path="keyboard/:keyboardId" element={<KeyboardPage />} />
        <Route path="headphone/:headphoneId" element={<HeadphonePage />} />
        <Route path="headphone-list" element={<ProductsList/>}></Route>
        <Route path="terms-and-conditions" element={<TermsAndConditions />}></Route>
        <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="return-and-cancellation" element={<ReturnAndCancellation />}></Route>
        <Route path="product-page" element={<ProductPage />}></Route>
        <Route path="login-register" element={<LoginRegister />}></Route>
        <Route path="cart" element={<ShoppingCart />}></Route>
        <Route path="account" element={<ProtectedRoute> <Account></Account> </ProtectedRoute>}> </Route>
        <Route path="*" element={<A404Page />}></Route>
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;