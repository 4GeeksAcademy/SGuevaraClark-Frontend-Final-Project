import React from "react";
import "../../styles/auth.css";
import catIllustration from "../../img/cat-illustration.png";
import petCircles from "../../img/pet-circles-left.png"; // Left side image with pet circles


export const Register = () => {
    return (
        <div className="auth-wrapper">
            <div className="auth-container">
                <div className="auth-left">
                    <img src={petCircles} alt="Pet Circles" className="pet-circles" /> 
                </div>
                <div className="auth-right register-form">
                    <div className="illustration-container">
                        <img src={catIllustration} alt="Cat Illustration" className="cat-illustration" /> 
                    </div>
                    <div className="auth-form">
                        <h2>Register</h2>
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="Create a password" />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="Confirm your password" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id="terms" />
                                <label htmlFor="terms">I accept the privacy policy and terms of use.</label>
                            </div>
                            <button type="submit" className="auth-button">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};