// import { Add, Remove } from "@mui/icons-material";
import { useParams } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import { Keyboard } from "../data";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { TextField } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddToCartContainer from "./components/AddToCartContainer";
import GoToTop from "./components/GoToTop";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
 
// function ProductPage() {
//     const params = useParams()
//     const mouseId = params.mouseId
//     return (
//         <div>
//             Mouse id is : {Mouse[mouseId].title}
//         </div>
//     )
// }

const Information = styled.div`
    color: white;
    padding-left: 150px;
    padding-bottom: 100px;
`

function KeyboardPage() {
    const params = useParams()
    const keyboardId = params.keyboardId
    // console.log("mid is : " + mouseId)
    // console.log(Mouse[0].desc)
    return (
        <div>
            <Navbar />
            <div className="prod-main">
                <div className="leftProductPage">
                    <img src={Keyboard[keyboardId-1].img} alt={Keyboard[keyboardId-1].title} width={600} height={360} />
                </div>
                <div className="rightProductPage">
                    <h1 className="prodpagehead">{Keyboard[keyboardId-1].title}</h1>
                    <h2>₹{Keyboard[keyboardId-1].price}</h2>
                    <div className="proddesc" style={{color: "white"}}>
                        <ul className="proddesclist">
                            {Keyboard[keyboardId-1].desc.map((i) => (
                                <li>{i.item}</li>
                            ))}
                        </ul>
                    </div>
                    <AddToCartContainer />
                </div>
            </div>
            <hr className="hrtag"/>
            {/* <Information>
                <h2>ADDITIONAL INFORMATION</h2>
            </Information> */}
            <Footer />
            <GoToTop />
        </div>
    )
}

export default KeyboardPage