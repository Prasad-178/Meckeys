import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styled from "styled-components";
import CartComponent from "./components/CartComponent";
import GoToTop from "./components/GoToTop";

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
                <CartComponent />
                <div className="space"></div>
            </div>
            <Footer />
            <GoToTop />
        </div>
    )
}

export default ShoppingCart