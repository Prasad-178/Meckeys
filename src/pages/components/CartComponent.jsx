import React from 'react'
import EmptyCart from './EmptyCart'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import { Cart } from '../../data'
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { style } from '@mui/system'

const CartMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`

const CartComponentDiv = styled.div`
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    padding-left: 3%;
    padding-right: 3%;
    /* margin-left: 6.5%; */
    margin-right: 3.25%;
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
            <div className='cartcompmain'>
                <hr className="hrtag" />
                <CartComponentDiv>
                    {/* <br className="brtag"/> */}
                    <div  onClick={() => removeCart(i.id)} className='delcart'> <DeleteIcon/> </div>
                    <img className='imgcart' src={i.img} alt={i.title} />
                    <div className='namediv'>
                        <p>{i.title}</p>
                    </div>
                    <div className="pricesec">
                        <p className='pricehead'>PRICE</p>
                        <p className='priceval'>{i.price}</p>
                    </div>
                    <div className='qty'>
                        <p className='qtyhead'>QUANTITY</p>
                        <TextField
                            padding='0px'
                            className='quantity'
                            id="filled-number"
                            // label="Number"
                            type="number"
                            contentEditable="false"
                            InputLabelProps={{
                                shrink: true,
                                style: {color: "blue", padding: '0px'},
                                onKeyDown: false
                            }}
                            InputProps={{
                                inputProps: {
                                    min: 1, max: 2
                                },
                                style: {
                                    padding: 0
                                }
                            }}
                            variant="filled"
                            defaultValue={1}
                            sx={{input: {color: "white", borderColor: "white", width: "90%", fontWeight: "400", margin: "0px"}}}
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