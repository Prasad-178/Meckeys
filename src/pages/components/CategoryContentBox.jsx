import React from "react";
import styled from "styled-components";

const Container = styled.div`
    /* width: 15%; */
    height: auto;
    padding-left: 40px;
    padding-bottom: 30px;
    line-height: 5px;
`

function CategoryContentBox(props) {
    return (
        <Container className="productBox">
            <img src={props.url} width={300} height={180} className="imageProductBox"/>
            <h5>{props.title}</h5>
            <p>₹{props.price}</p>
        </Container>
    )
}

export default CategoryContentBox;