import React from "react";
import { Mouse, Keyboard, Headphones } from "../../data";
import CategoryContentBox from "./CategoryContentBox";
import styled from "styled-components";

const CategoryDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;
`

function Category(props) {
    var ch = props.categoryHeading;
    if (ch === "Mouse") {
        return (
            <div className="cat">
                <h1 className="CategoryHeading">MICE</h1>
                <CategoryDiv>
                    {Mouse.map((item) => (
                        <CategoryContentBox url={item.img} key={item.id} title={item.title} price={item.price}/>
                    ))}
                </CategoryDiv>
            </div>
        )
    }
    else if (ch === "Keyboard") {
        return (
            <div className="cat">
                <h1 className="CategoryHeading">KEYBOARDS</h1>
                <CategoryDiv>
                    {Keyboard.map((item) => (
                        <CategoryContentBox url={item.img} key={item.id} title={item.title} price={item.price}/>
                    ))}
                </CategoryDiv>
            </div>
        )
    }
    else {
        return (
            <div className="cat">
                <h1 className="CategoryHeading">HEADPHONES</h1>
                <CategoryDiv>
                    {Mouse.map((item) => (
                        <CategoryContentBox url={item.img} key={item.id} title={item.title} price={item.price}/>
                    ))}
                </CategoryDiv>
            </div>
        )
    }
    // return (
    //     <div className="cat">
    //         <h1 className="CategoryHeading">{props.categoryHeading}</h1>
    //         <CategoryDiv>
    //             {Categories.map((item) => (
    //                 <CategoryContentBox url={item.img} key={item.id} title={item.title} price={item.price}/>
    //             ))}
    //         </CategoryDiv>
    //     </div>
    // )
}

export default Category