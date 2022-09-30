import React from 'react'
import styled from "styled-components";
import { TextField } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const AddToCartContainerDiv = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    align-items: center;
    justify-content: space-between;
    margin-left: 15px;
    /* background-color: rgb(83, 81, 201); */
    background-color: gold;
    opacity: 0.7;
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

const AddToCartContainer = () => {
  return (
    <AddToCartContainerDiv>
        <TextField
            id="filled-number"
            label="Number"
            type="number"
            contentEditable="false"
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{
                inputProps: {
                    min: 0, max: 2
                }
            }}
            variant="filled"
            defaultValue={1}
            sx={{input: {color: "white", borderColor: "white", width: "300px", fontWeight: "400"}}}
        />
        <Button><AddShoppingCartIcon />ADD TO CART</Button>
    </AddToCartContainerDiv>
  )
}

export default AddToCartContainer