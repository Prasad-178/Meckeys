import React from "react";
import { Mouse, Keyboard, Headphones } from "../../data";
import CategoryContentBox from "./CategoryContentBox";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

function Category(props) {
    var ch = props.categoryHeading;
    if (ch === "Mouse") {
        return (
            <div className="cat mouseCategory">
                <h1 className="CategoryHeading">MICE</h1>
                <CategoryDiv>
                    {Mouse.map((item) => (
                        <div className="divproductbox">
                            <BuyNow className="buynowButton">BUY NOW</BuyNow>
                            <CategoryContentBox className="catconbox" url={item.img} key={item.id} title={item.title} price={item.price}></CategoryContentBox>
                        </div>
                    ))}
                </CategoryDiv>
                <Link to="mouse-list"> <button className="seeProducts">SEE ALL PRODUCTS</button> </Link>
            </div>
        )
    }
    else if (ch === "Keyboard") {
        return (
            <div className="cat keyboardCategory">
                <h1 className="CategoryHeading">KEYBOARDS</h1>
                <CategoryDiv>
                    {Keyboard.map((item) => (
                        <div className="divproductbox">
                            <BuyNow className="buynowButton">BUY NOW</BuyNow>
                            <CategoryContentBox className="catconbox" url={item.img} key={item.id} title={item.title} price={item.price}></CategoryContentBox>
                        </div>
                    ))}
                </CategoryDiv>
                <Link to="keyboard-list"> <button className="seeProducts">SEE ALL PRODUCTS</button> </Link>
            </div>
        )
    }
    else {
        return (
            <div className="cat headphoneCategory">
                <h1 className="CategoryHeading">HEADPHONES</h1>
                <CategoryDiv>
                    {Headphones.map((item) => (
                        <div className="divproductbox">
                            <BuyNow className="buynowButton">BUY NOW</BuyNow>
                            <CategoryContentBox className="catconbox" url={item.img} key={item.id} title={item.title} price={item.price}></CategoryContentBox>
                        </div>
                    ))}
                </CategoryDiv>
                <Link to="headphone-list"> <button className="seeProducts">SEE ALL PRODUCTS</button> </Link>
            </div>
        )
    }
}

export default Category