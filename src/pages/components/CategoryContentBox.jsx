import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Container = styled.div`
    /* width: 15%; */
    height: auto;
    padding-left: 40px;
    padding-bottom: 30px;
    line-height: 5px;
`

function CategoryContentBox(props) {

    function handleClick(e) {
        console.log(e.target);
    }

    const params = useParams()
    const mouseId = params.mouseId
    console.log(mouseId)
    return (
        <Container className="productBox">
            <Link to={"/mouse/"}> <img src={props.url} onClick={handleClick} mouseId={props.key} width={300} height={180} className="imageProductBox"/> </Link>
            <h5>{props.title}</h5>
            <p>₹{props.price}</p>
        </Container>
    )
}

export default CategoryContentBox;