import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchField from "./SearchField";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MouseIcon from '@mui/icons-material/Mouse';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Link } from "react-router-dom";
import { Cart } from "../../data";

var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar-main").style.top = "0";
    }
    else {
        document.querySelector(".navbar-main").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

function Navbar() {
    return (
        <div className="navbar-main">
            <div className="navbar-div">
                <div className="left-navbar">
                    <Link to="/" style={{textDecoration: 'none'}}> <h1 className="heading"> MECKEYS </h1> </Link>
                </div>
                <div className="center-navbar">
                    <SearchField />
                </div>
                <div className="right-navbar">
                    <Link to="/keyboard-list"> <p className="right-nav-element"> <KeyboardIcon style={{color: "gold"}} /> </p> </Link>
                    <Link to="/mouse-list"> <p className="right-nav-element"> <MouseIcon style={{color: "gold"}} /> </p> </Link>
                    <Link to="/headphone-list"> <p className="right-nav-element"> <HeadphonesIcon style={{color: "gold"}} /> </p> </Link>
                    <Link to="/login-register"> <p className="right-nav-element"> <AccountCircleIcon style={{color: "gold"}} /> </p> </Link>
                    <Link to="/cart"> <Badge badgeContent={Cart.length} color="primary" className="right-nav-element cart">
                        <ShoppingCartOutlined style={{color: "gold"}} />
                        </Badge>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;