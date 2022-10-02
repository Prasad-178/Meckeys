import React from 'react'
import styled from "styled-components";
import { TextField } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Cart, Keyboard } from '../../data';
import { useNavigate } from 'react-router-dom';

const AddToCartContainerDiv = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    align-items: center;
    justify-content: space-between;
    margin-left: 15px;
    /* background-color: gold; */
    border: 1px solid rgba(255, 255, 255, 0.4);
    opacity: 0.9;
    padding: 15px;
    border-radius: 10px;

    &:hover {
        opacity: 1;
        transition: all 0.3s ease;
    }
`

const Button = styled.button`
    margin-left: 20px;
    cursor: pointer;
    background-color: black;
    color: white;
    border: none;
    width: 300px;
    padding: 10px;
    text-align: center;

    &:hover {
        opacity: 0.8;
    }
`

const AddToCartContainer = (props) => {
    const navigate = useNavigate()
    function addToCart() {
        console.log("props id is : " + props.id);
        Cart.push({
            id: Cart.length+1,
            title: props.title,
            type: props.type,
            img: props.img,
            price: props.price
        })
        navigate('/cart')
    }

  return (
    <AddToCartContainerDiv>
        <TextField
            id="outlined-number"
            label="Number"
            type="number"
            contentEditable="false"
            InputLabelProps={{
                shrink: true,
                style: {color: "blue"}
            }}
            InputProps={{
                inputProps: {
                    min: 1, max: 2
                },
                borderColor: {
                    color: "blue"
                }
            }}
            variant="filled"
            defaultValue={1}
            sx={{input: {color: "white", borderColor: "white", width: "300px", fontWeight: "400"}}}
        />
        <Button onClick={() => addToCart(props)}><AddShoppingCartIcon />ADD TO CART</Button>
    </AddToCartContainerDiv>
  )
}

export default AddToCartContainer