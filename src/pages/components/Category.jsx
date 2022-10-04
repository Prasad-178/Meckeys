import React from "react";
import { Mouse, Keyboard, Headphones } from "../../data";
import CategoryContentBox from "./CategoryContentBox";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CategoryDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;
`

const BuyNow = styled.div`
    color: white;
    font-size: 12px;
    background-color: black;
    padding: 10px;
    position: absolute;
    border: 2px solid black;
    margin-left: 150px;
    margin-top: 110px;
`

function Category(props) {
    var idClicked;
    function extractId(id) {
        idClicked = id
        console.log("props id is : " + idClicked);
        return idClicked + "";
    }

    var ch = props.categoryHeading;
    
    const location = useLocation()
    const path = location.pathname
    console.log(path)

    function url() {
        if (path === "/") {
            return true;
        }
        else {
            return false;
        }
    }

    if (ch === "Mouse") {
        return (
            <div className="cat mouseCategory">
                <h1 className="CategoryHeading">MICE</h1>
                {!url() ? <div>
                        <hr className="hrtag" />
                        <div className="spacepage"></div></div>
                       :<p></p> }
                <CategoryDiv>
                    {Mouse.map((item) => (
                        <div className="divproductbox">
                            <BuyNow><button className="buynowButton">BUY NOW</button></BuyNow>
                            <CategoryContentBox className="catconbox" type="mouse" link={idClicked} extractId = {() => extractId(item.id)} url={item.img} key={item.id} title={item.title} price={item.price}></CategoryContentBox>
                        </div>
                    ))}
                </CategoryDiv>
                {url() ? <Link to="mouse-list"> <button className="seeProducts">SEE ALL MICE</button> </Link> : null}
            </div>
        )
    }
    else if (ch === "Keyboard") {
        return (
            <div className="cat keyboardCategory">
                <h1 className="CategoryHeading">KEYBOARDS</h1>
                {!url() ? <div>
                        <hr className="hrtag" />
                        <div className="spacepage"></div></div>
                       :<p></p> }
                <CategoryDiv>
                    {Keyboard.map((item) => (
                        <div className="divproductbox">
                            <BuyNow className="buynowButton">BUY NOW</BuyNow>
                            <CategoryContentBox className="catconbox" type="keyboard" link={idClicked} extractId = {() => extractId(item.id)} url={item.img} key={item.id} title={item.title} price={item.price}></CategoryContentBox>
                        </div>
                    ))}
                </CategoryDiv>
                {url() ? <Link to="mouse-list"> <button className="seeProducts">SEE ALL KEYBOARDS</button> </Link> : null}
            </div>
        )
    }
    else {
        return (
            <div className="cat headphoneCategory">
                <h1 className="CategoryHeading">HEADPHONES</h1>
                {!url() ? <div>
                        <hr className="hrtag" />
                        <div className="spacepage"></div></div>
                       :<p></p> }
                <CategoryDiv>
                    {Headphones.map((item) => (
                        <div className="divproductbox">
                            <BuyNow className="buynowButton">BUY NOW</BuyNow>
                            <CategoryContentBox className="catconbox" type="headphone"link={idClicked} extractId = {() => extractId(item.id)} url={item.img} key={item.id} title={item.title} price={item.price} props={item}></CategoryContentBox>
                        </div>
                    ))}
                </CategoryDiv>
                {url() ? <Link to="mouse-list"> <button className="seeProducts">SEE ALL HEADPHONES</button> </Link> : null}
            </div>
        )
    }
}

export default Category