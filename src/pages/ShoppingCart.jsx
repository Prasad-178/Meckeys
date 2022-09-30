import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styled from "styled-components";

const CartMain = styled.div`
    
`

function ShoppingCart() {
    return (
        <div>
            <Navbar />
            <CartMain>
                <p></p>
            </CartMain>
            <Footer />
        </div>
    )
}

export default ShoppingCart