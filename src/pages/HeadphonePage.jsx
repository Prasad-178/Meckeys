import { useParams } from "react-router-dom";
import { Headphones } from "../data";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddToCartContainer from "./components/AddToCartContainer";
import GoToTop from "./components/GoToTop";
import { Cart } from "../data";

function HeadphonePage() {
    console.log(Cart.length)
    const params = useParams()
    const headphoneId = params.headphoneId
    return (
        <div>
            <Navbar />
            <div className="prod-main">
                <div className="leftProductPage">
                    <img src={Headphones[headphoneId-1].img} alt={Headphones[headphoneId-1].title} width={600} height={360} />
                </div>
                <div className="rightProductPage">
                    <h1 className="prodpagehead">{Headphones[headphoneId-1].title}</h1>
                    <h2 className="prodpageprice">₹{Headphones[headphoneId-1].price}</h2>
                    <div className="proddesc" style={{color: "white"}}>
                        <ul className="proddesclist">
                            {Headphones[headphoneId-1].desc.map((i) => (
                                <li className="pdlist">{i.item}</li>
                            ))}
                        </ul>
                    </div>
                    <AddToCartContainer type={"Headphones"} id={Cart.length} title={Headphones[headphoneId-1].title} img={Headphones[headphoneId-1].img} price={Headphones[headphoneId-1].price} />
                </div>
            </div>
            <hr className="hrtag"/>
            <div className="proddescimg">
                <p className="deschead">DESCRIPTION</p>
                {Headphones[headphoneId-1].descimg.map((i) => (
                    <img className="imgdesc" src={i.img} alt="descimg" />
                ))}
            </div>
            <hr className="hrtag" />
            <div className="specs">
                <p className="deschead">ADDITIONAL INFORMATION</p>
                {Headphones[headphoneId-1].inf.map((i) => (
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

export default HeadphonePage