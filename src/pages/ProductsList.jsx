import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Mouse, Keyboard, Headphones } from "../data";
import styled from "styled-components";
import CategoryContentBox from "./components/CategoryContentBox";
import Category from "./components/Category";
import GoToTop from "./components/GoToTop";

const CategoryDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;
`

const BuyNow = styled.div`
    background-color: transparent;
    position: absolute;
    border: 2px solid black;
    margin-left: 150px;
    margin-top: 110px;
`

function ProductsList(props) {
    var ch = props.categoryHeading
    var id = props.id
    if (ch === "Keyboard") {
        return (
            <div>
                <Navbar />
                <div className="space"></div>
                <Category categoryHeading = "Keyboard"/>
                <Footer />
                <GoToTop />
            </div>
        )
    }
    else if (ch === "Mouse") {
        return (
            <div>
                <Navbar />
                <div className="space"></div>
                <Category categoryHeading = "Mouse"/>
                <Footer />
                <GoToTop />
            </div>
        )
    }
    else {
        return (
            <div>
                <Navbar />
                <div className="space"></div>
                <Category categoryHeading ="Headphones"/>
                <Footer />
                <GoToTop />
            </div>
        )
    }
}

export default ProductsList