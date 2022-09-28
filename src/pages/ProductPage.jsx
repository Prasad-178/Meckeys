import { Announcement } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Mouse, Keyboard, Headphones } from "../data";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
 
// function ProductPage() {
//     const params = useParams()
//     const mouseId = params.mouseId
//     return (
//         <div>
//             Mouse id is : {Mouse[mouseId].title}
//         </div>
//     )
// }

function ProductPage() {
    return (
        <div>
            <Navbar />
            <div className="prod-main">
                <div className="leftProductPage">
                    <img src="https://i.rtings.com/assets/products/zIPPnEOh/hyperx-cloud-2-cloud-ii-wireless/design-medium.jpg" alt="HyperX Cloud II Wireless" width={650} height={390} />
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
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage