import React from 'react'
import EmptyCart from './EmptyCart'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import { Cart } from '../../data'
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const CartMain = styled.div`
    display: flex;
    flex-direction: column;
`

const CartComponentDiv = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: 100px;
    margin-right: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
`

const CartSummary = styled.div`
    
`

const CartComponent = () => {
    const navigate = useNavigate()
    function removeCart(id) {
        console.log("index delete is : " + id-1)
        Cart.splice(id-1, 1)
        for (let i=0; i<Cart.length; i++) {
            Cart[i].id = i+1;
        }
        {Cart.map((item) => (
            console.log(item.id)
        ))}
        navigate('/cart')
    }

    function cartIsEmpty() {
        if (Cart.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

  return (
    cartIsEmpty() ? <EmptyCart /> : 
    <CartMain>
        {Cart.map((i) => (
            <div>
                <hr className="hrtag" />
                <CartComponentDiv>
                    <br className="brtag"/>
                    <div className="delcart" onClick={() => removeCart(i.id)}> <DeleteIcon /> </div>
                    <img className='imgcart' src={i.img} alt={i.title} width={240} height={144} />
                    <div className='namediv'>
                        <p>{i.title}</p>
                    </div>
                    <div className="pricesec">
                        <p style={{color: "gold", fontSize: "16px"}}>PRICE</p>
                        <p style={{fontSize: "20px"}}>{i.price}</p>
                    </div>
                    <div className='qty'>
                        <p style={{fontSize: "16px", marginTop: "12.5px", marginBottom: "5px"}}>QUANTITY</p>
                        <TextField
                            id="filled-number"
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
                                }
                            }}
                            variant="filled"
                            defaultValue={1}
                            sx={{input: {color: "white", borderColor: "white", width: "300px", fontWeight: "400"}}}
                        />
                    </div>
                    <br className="brtag"/>
                </CartComponentDiv>
                <CartSummary>

                </CartSummary>
                <hr className="hrtag" />
            </div>
        ))}
    </CartMain>
  )
}

export default CartComponent