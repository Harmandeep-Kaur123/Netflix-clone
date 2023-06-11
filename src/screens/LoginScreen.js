import React, { useState } from "react";
import './LoginScreen.css';
import SignupScreen from "./SignupScreen";

function LoginScreen() {
    const[signIn, setSignIn]= useState(false);

    return (
        <div className="loginScreen"> 
            <div className="loginScreen_background">
                <img className="loginScreen_logo" src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="loginScreen_logo"/>
                <button onClick={()=> setSignIn(true)} className="loginScreen_button"> Sign In</button>
                <div className="loginScreen_gradient"></div>
            </div>

            <div className="loginScreen_body">
                {signIn ? (
                    <SignupScreen />
                ):(
                    <>
                    <h1> Unlimited movies, Web Series, TV shows and More.</h1>
                    <h2>Watch anywhere. Cancel anytime</h2>
                    <h3>Ready to Watch? Enter your email to create/restart your membership.</h3>
                    <div className="loginScreen_input">
                        <form >
                            <input type="email" placeholder="Enter your email.."/>
                            <button onClick={()=>setSignIn(true)} className="loginScreen_getStarted">Get Started</button>
                        </form>
                    </div>
                     </>
                )}    
            </div>
        </div>
    )
}

export default LoginScreen
