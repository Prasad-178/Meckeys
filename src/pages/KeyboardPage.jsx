import { useParams } from "react-router-dom";
import { Keyboard } from "../data";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddToCartContainer from "./components/AddToCartContainer";
import GoToTop from "./components/GoToTop";
import { Cart } from "../data";

function KeyboardPage() {
    const params = useParams()
    const keyboardId = params.keyboardId
    return (
        <div>
            <Navbar />
            <div className="prod-main">
                <div className="leftProductPage">
                    <img className="prodpagepic" src={Keyboard[keyboardId-1].img} alt={Keyboard[keyboardId-1].title} />
                </div>
                <div className="rightProductPage">
                    <h1 className="prodpagehead">{Keyboard[keyboardId-1].title}</h1>
                    <h2 className="prodpageprice">₹{Keyboard[keyboardId-1].price}</h2>
                    <div className="proddesc" style={{color: "white"}}>
                        <ul className="proddesclist">
                            {Keyboard[keyboardId-1].desc.map((i) => (
                                <li className="pdlist">{i.item}</li>
                            ))}
                        </ul>
                    </div>
                    <AddToCartContainer type={"Keyboard"} id={Cart.length} title={Keyboard[keyboardId-1].title} img={Keyboard[keyboardId-1].img} price={Keyboard[keyboardId-1].price} />
                </div>
            </div>
            <hr className="hrtag"/>
            <div className="proddescimg">
                <p className="deschead">DESCRIPTION</p>
                {Keyboard[keyboardId-1].descimg.map((i) => (
                    <img className="imgdesc" src={i.img} alt="descimg" />
                ))}
            </div>
            <hr className="hrtag" />
            <div className="specs">
                <p className="deschead">ADDITIONAL INFORMATION</p>
                {Keyboard[keyboardId-1].inf.map((i) => (
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

export default KeyboardPage