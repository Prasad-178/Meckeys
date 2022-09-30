import { Add, Remove } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Mouse, Keyboard, Headphones } from "../data";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { TextField } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { margin } from "@mui/system";
 
// function ProductPage() {
//     const params = useParams()
//     const mouseId = params.mouseId
//     return (
//         <div>
//             Mouse id is : {Mouse[mouseId].title}
//         </div>
//     )
// }

const AddToCartContainer = styled.div`
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

const Quantity = styled.div``

const Amount = styled.span``

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

const Information = styled.div`
    color: white;
    padding-left: 150px;
    padding-bottom: 100px;
`

function ProductPage() {
    return (
        <div>
            <Navbar />
            <div className="prod-main">
                <div className="leftProductPage">
                    <img src="https://i.rtings.com/assets/products/zIPPnEOh/hyperx-cloud-2-cloud-ii-wireless/design-medium.jpg" alt="HyperX Cloud II Wireless" width={600} height={360} />
                </div>
                <div className="rightProductPage">
                    <h1 className="prodpagehead">HYPERX CLOUD STINGER</h1>
                    <h2>₹3,599</h2>
                    <div className="proddesc" style={{color: "white"}}>
                        <ul className="proddesclist">
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                    <AddToCartContainer>
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
                    </AddToCartContainer>
                </div>
            </div>
            <hr className="hrtag"/>
            <Information>
                <h2>ADDITIONAL INFORMATION</h2>

            </Information>
            <Footer />
        </div>
    )
}

export default ProductPage