import React from "react";
import "../../styles/auth.css";

import catIllustration from "../../img/cat-illustration.png"; // The turquoise cat illustration
import petCircles from "../../img/pet-circles-right.png"; // The right side image with pet circles


export const Login = () => {
    return (
        <div className="auth-wrapper">
            <div className="auth-container">
                <div className="auth-left">
                    <div className="illustration-container">
                     <img src={catIllustration} alt="Cat Illustration" className="cat-illustration" /> 
                    </div>
                    <div className="auth-form">
                        <h2>Sign In</h2>
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="Enter your password" />
                            </div>
                            <button type="submit" className="auth-button">Sign In</button>
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </form>
                    </div>
                </div>
                <div className="auth-right">
                   <img src={petCircles} alt="Pet Circles" className="pet-circles" /> 
                </div>
            </div>
        </div>
    );
};