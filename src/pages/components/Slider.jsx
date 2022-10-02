import React from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import HomePageSlides from "../../data";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #000000;
    position: relative;
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
    color: white;
    scale: 2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;

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
    z-index: 1;
    width: 100vw;
    display: flex;
    align-items: center;
    animation: fadeIn 5s;
`

const Button = styled.div`
    background-color: transparent;
    color: white;
    border: 1px solid gold;
    margin: 300px auto 0px 700px;
    padding: 15px;
    position: absolute;
    border: 2px solid black;
    transition: ease-in 0.2s;
    z-index: 2;

    &:hover {
        background-color: black;
        opacity: 0.9;
    }
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

    const navigate = useNavigate()
    const openPage = () => {
        navigate('/keyboard/1')
    }

    return (
        <Container className="slider">
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosNewIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {HomePageSlides.map((item) => (
                    <Slide className="fade-in-text">
                        <p className="feathead">KEYCHRON K8 PRO</p>
                        <p className="feattxt">QMK / VIA COMPATIBLE WIRELESS MECHANICAL KEYBOARD</p>
                        <Button className="sliderButton" onClick={openPage}>BUY NOW</Button>
                        <div className="fade-in-image">
                            <img src={item.img} alt={item.name} key={item.id} className="ImageClass" height={484} width={"auto"} />
                        </div>
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