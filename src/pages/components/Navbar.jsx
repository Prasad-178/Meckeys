import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchField from "./SearchField";

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
                    <h1 className="heading">ELECTRONIX</h1>
                </div>
                <div className="center-navbar">
                    <SearchField />
                </div>
                <div className="right-navbar">
                    <p className="right-nav-element">REGISTER</p>
                    <p className="right-nav-element">LOGIN</p>
                    <Badge badgeContent={4} color="primary" className="right-nav-element">
                        <ShoppingCartOutlined />
                    </Badge>
                </div>
            </div>
        </div>
    );
}

export default Navbar;