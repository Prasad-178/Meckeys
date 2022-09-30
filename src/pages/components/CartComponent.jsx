import React from 'react'
import styled from 'styled-components'
// import AddToCartContainer from './AddToCartContainer'
import { TextField } from '@mui/material'

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

const CartComponent = () => {
  return (
    <CartMain>
        <hr className="hrtag" />
        <CartComponentDiv>
            <br className="brtag"/>
            <img className='imgcart' src="https://prosettings.net/wp-content/uploads/Ducky-One-3-Mini-Review-Featured.jpg" alt="Ducky One 3 Mini" width={240} height={144} />
            <div className='namediv'>
                <p>DUCKY ONE 3 MINI</p>
            </div>
            <div className="pricesec">
                <p style={{color: "gold", fontSize: "16px"}}>PRICE</p>
                <p style={{fontSize: "20px"}}>₹7,499</p>
            </div>
            {/* <AddToCartContainer /> */}
            <div className='qty'>
                <p style={{fontSize: "16px", marginTop: "12.5px", marginBottom: "5px"}}>QUANTITY</p>
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
            </div>
            <br className="brtag"/>
        </CartComponentDiv>
        <hr className="hrtag" />

    </CartMain>
  )
}

export default CartComponent