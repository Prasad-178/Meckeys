import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { auth, firebaseConfig } from "../firebase";
import { signOut } from "firebase/auth";

function Account() {
    const { user, logOut } = useUserAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!(auth.currentUser)) {
            navigate('/login-register')
        }
        else {}
    })

    if (auth.currentUser) {
        console.log(auth.currentUser.email)
    }
    else {
        console.log("No one logged in right now")
    }

    const handleLogOut = async (e) => {
        console.log(auth.currentUser.email)
        e.preventDefault()
        try{
            await auth.signOut()
            alert("Successfully logged out!!")
        }
        catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div>
            <Navbar />
            <div className="mainmainlogreg">
                <div className="headinglogreg">
                    <p className="myacc">MY ACCOUNT</p>
                </div>
                <hr className='hrtag'/>
                <div className="mainaccdet">
                    <p className="deschead">ACCOUNT DETAILS</p>
                    <div className="inf">
                        <p className="infkey">EMAIL ADDRESS</p>
                        <p className="infkey">{auth.currentUser ? auth.currentUser.email : "NOT FOUND"}</p>
                    </div>
                    <div className="inf">
                        <p className="infkey">EMAIL ADDRESS</p>
                        <p className="infkey">{auth.currentUser ? auth.currentUser.email : "NOT FOUND"}</p>
                    </div>
                    <button className="logout" onClick={handleLogOut}>LOG OUT</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Account