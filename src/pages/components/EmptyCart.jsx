import React from "react";
import styled from "styled-components"

const CartComponentDiv = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    padding-left: 3%;
    padding-right: 3%;
    margin-left: 6.5%;
    margin-right: 3.25%;
    margin-top: 20px;
    margin-bottom: 20px;
`

function EmptyCart() {
    return (
        <div>
            <hr className="hrtag" />
                <CartComponentDiv>
                    <p className="emptycart">YOUR CART IS CURRENTLY EMPTY.</p>
                </CartComponentDiv>
                <hr className="hrtag" />
        </div>
    )
}

export default EmptyCart