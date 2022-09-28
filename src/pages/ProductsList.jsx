import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Mouse, Keyboard, Headphones } from "../data";
import styled from "styled-components";
import CategoryContentBox from "./components/CategoryContentBox";
import Category from "./components/Category";

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
    if (ch === "Keyboard") {
        return (
            <div className="kbpage">
                <Navbar />
                <div className="space"></div>
                <Category categoryHeading = "Keyboard"/>
                <Footer />
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
            </div>
        )
    }
}

// function ProductsList(props) {
//     var ch = props.category;
//     if (ch === "Mouse") {
//         return (
//             <div>
//                 <Navbar />
//                 <div className="cat mouseCategory">
//                     <h1 className="CategoryHeading">MICE</h1>
//                     <CategoryDiv>
//                         {Mouse.map((item) => (
//                             <div className="divproductbox">
//                                 <BuyNow className="buynowButton">BUY NOW</BuyNow>
//                                 <CategoryContentBox className="catconbox" url={item.img} key={item.id} title={item.title} price={item.price}></CategoryContentBox>
//                             </div>
//                         ))}
//                     </CategoryDiv>
//                     <button className="seeProducts">SEE ALL PRODUCTS</button>
//                 </div>
//                 <Footer />
//             </div>
//         )
//     }
//     else if (ch === "Keyboard") {
//         return (
//             <div>
//                 <Navbar />
//                 <div className="cat keyboardCategory">
//                     <h1 className="CategoryHeading">KEYBOARDS</h1>
//                     <CategoryDiv>
//                         {Keyboard.map((item) => (
//                             <div className="divproductbox">
//                                 <BuyNow className="buynowButton">BUY NOW</BuyNow>
//                                 <CategoryContentBox className="catconbox" url={item.img} key={item.id} title={item.title} price={item.price}></CategoryContentBox>
//                             </div>
//                         ))}
//                     </CategoryDiv>
//                     <button className="seeProducts">SEE ALL PRODUCTS</button>
//                 </div>
//                 <Footer />
//             </div>
//         )
//     }
//     else {
//         return (
//             <div className="cat headphoneCategory">
//                 <h1 className="CategoryHeading">HEADPHONES</h1>
//                 <CategoryDiv>
//                     {Headphones.map((item) => (
//                         <div className="divproductbox">
//                             <BuyNow className="buynowButton">BUY NOW</BuyNow>
//                             <CategoryContentBox className="catconbox" url={item.img} key={item.id} title={item.title} price={item.price}></CategoryContentBox>
//                         </div>
//                     ))}
//                 </CategoryDiv>
//                 <button className="seeProducts">SEE ALL PRODUCTS</button>
//             </div>
//         )
//     }
// }

export default ProductsList