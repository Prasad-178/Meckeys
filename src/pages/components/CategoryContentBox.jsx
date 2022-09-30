import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    /* width: 15%; */
    height: auto;
    padding-left: 40px;
    padding-bottom: 30px;
    line-height: 5px;
`

function CategoryContentBox(props) {
    const navigate = useNavigate();
    const control = () => {
        const holder = props.extractId(props.key);
        if (props.type === "mouse") {
            navigate("/mouse/" + holder)
        }
        else if (props.type === "keyboard") {
            navigate("/keyboard/" + holder)
        }
        else {
            navigate("/headphone/" + holder)
        }
    }

    return (
        <Container className="productBox">
            <img src={props.url} key={props.id} onClick={control} mouseId={props.key} width={300} height={180} className="imageProductBox"/>
            <h5>{props.title}</h5>
            <p>₹{props.price}</p>
        </Container>
    )
}

export default CategoryContentBox;