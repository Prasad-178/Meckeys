import { useParams } from "react-router-dom";
import { Mouse } from "../data";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddToCartContainer from "./components/AddToCartContainer";
import GoToTop from "./components/GoToTop";
import { Cart } from "../data";

function MousePage() {
    const params = useParams()
    const mouseId = params.mouseId
    return (
        <div>
            <Navbar />
            <div className="prod-main">
                <div className="leftProductPage">
                    <img src={Mouse[mouseId-1].img} alt={Mouse[mouseId-1].title} width={600} height={"auto"} />
                </div>
                <div className="rightProductPage">
                    <h1 className="prodpagehead">{Mouse[mouseId-1].title}</h1>
                    <h2 className="prodpageprice">₹{Mouse[mouseId-1].price}</h2>
                    <div className="proddesc" style={{color: "white"}}>
                        <ul className="proddesclist">
                            {Mouse[mouseId-1].desc.map((i) => (
                                <li className="pdlist">{i.item}</li>
                            ))}
                        </ul>
                    </div>
                    <AddToCartContainer type={"Mouse"} id={Cart.length} title={Mouse[mouseId-1].title} img={Mouse[mouseId-1].img} price={Mouse[mouseId-1].price} />
                </div>
            </div>
            <hr className="hrtag"/>
            <div className="proddescimg">
                <p className="deschead">DESCRIPTION</p>
                {Mouse[mouseId-1].descimg.map((i) => (
                    <img className="imgdesc" src={Mouse[mouseId-1].descimg[0].img} alt="descimg" />
                ))}
            </div>
            <hr className="hrtag" />
            <div className="specs">
                <p className="deschead">ADDITIONAL INFORMATION</p>
                {Mouse[mouseId-1].inf.map((i) => (
                    <div className="inf">
                        <p className="infkey">{i.key}</p>
                        <p className="infval">{i.value}</p>
                    </div>
                ))}
            </div>
            <div className="space"></div>
            <Footer />
            <GoToTop />
        </div>
    )
}

export default MousePage