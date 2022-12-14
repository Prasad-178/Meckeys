import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className="footer-main">
            <div className="footer">
                <p className="headlog">POLICY</p>
                <ul>
                    <Link to="/terms-and-conditions" style={{color: "white", textDecoration: "none", width: "200px"}}> <li style={{width: 'auto', maxWidth: "180px"}}>Terms and Conditions</li> </Link>
                    <Link to="/privacy-policy" style={{color: "white", textDecoration: "none"}}><li style={{width: 'auto', maxWidth: "180px"}}>Privacy Policy</li></Link>
                    <li style={{width: 'auto', maxWidth: "180px"}}>Return and Cancellation</li>
                    <li style={{width: 'auto', maxWidth: "180px"}}>E-Waste Management</li>
                </ul>
            </div>
            <hr className="hrtag"></hr>
            <div className="crt">
                <h5 className="footmain">© ELITE GAMING LLC - MECHANICAL KEYBOARDS AND ESPORTS ACCESSORIES </h5>
                <p className="socials"> CONTACT US <a className="linkedinLink" target="_blank" href="https://www.linkedin.com/in/prasad-sankar-370362223/"><LinkedInIcon /></a></p>
            </div>
        </div>
    )
}

export default Footer