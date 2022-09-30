// import { Add, Remove } from "@mui/icons-material";
import { useParams } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import { Headphones } from "../data";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { TextField } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddToCartContainer from "./components/AddToCartContainer";
import GoToTop from "./components/GoToTop";
 
// function ProductPage() {
//     const params = useParams()
//     const headphoneId = params.headphoneId
//     return (
//         <div>
//             Headphones id is : {Headphones[headphoneId].title}
//         </div>
//     )
// }

const Information = styled.div`
    color: white;
    padding-left: 150px;
    padding-bottom: 100px;
`

function HeadphonePage() {
    const params = useParams()
    const headphoneId = params.headphoneId
    // console.log("mid is : " + headphoneId)
    // console.log(Headphones[0].desc)
    return (
        <div>
            <Navbar />
            <div className="prod-main">
                <div className="leftProductPage">
                    <img src={Headphones[headphoneId-1].img} alt={Headphones[headphoneId-1].title} width={600} height={360} />
                </div>
                <div className="rightProductPage">
                    <h1 className="prodpagehead">{Headphones[headphoneId-1].title}</h1>
                    <h2>₹{Headphones[headphoneId-1].price}</h2>
                    <div className="proddesc" style={{color: "white"}}>
                        <ul className="proddesclist">
                            {Headphones[headphoneId-1].desc.map((i) => (
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

export default HeadphonePage