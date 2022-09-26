import React from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import HomePageSlides from "../../data";

const Container = styled.div`
    /* margin-top: 3px; */
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #229076;
    position: relative;
    /* border-radius: 10px; */
    overflow: hidden;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 0.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    // to center the arrows on the page : 
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    z-index: 2;
`

const Slide = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
`

const Image = styled.img`
    height: 80%;
`

const ImageContainer = styled.div`
    width: 100%;
`

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 2);
        }
        else {
            setSlideIndex(slideIndex<2 ? slideIndex+1 : 0);
        }
    }

    return (
        <Container className="slider">
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosNewIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {HomePageSlides.map((item) => (
                    <Slide>
                        <img src={item.img} alt={item.name} key={item.id} className="ImageClass" height={484} width={1536} />
                    </Slide>
                ))}
                
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIosIcon />
            </Arrow>
        </Container>
    );
}

export default Slider;