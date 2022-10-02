import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartComponent from "./components/CartComponent";
import GoToTop from "./components/GoToTop";
import { Cart } from "../data";

function ShoppingCart() {
    return (
        <div>
            <Navbar />
            <div>
                <div className="space"></div>
                <div className="headingcart">
                    <p className="carthead">CART</p>
                </div>
                <CartComponent />
                <div className="space"></div>
            </div>
            <Footer />
            <GoToTop />
        </div>
    )
}

export default ShoppingCart