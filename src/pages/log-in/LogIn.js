import React from "react";
import './Log-in.css';
import nurse from "../../assets/symbols/nurse.png";
import Nav from "../../components/Nav/Nav";
import {NavLink} from "react-router-dom";
import Button from "../../components/Button/Button";



function LogIn () {
    return (
        <>
            <Nav>
                <li><NavLink to ="/" exact activeClassName="active-link">Home</NavLink> </li>
                <li><NavLink to ="/login" exact activeClassName="active-link">Log in</NavLink> </li>
                <li><NavLink to ="/" exact activeClassName="active-link">Contact</NavLink> </li>
            </Nav>
        <article className="login-page">
            <div className="article-container">
                <div className="form-container">
            <form>
                <h2>Log hier in bij uw Homecare account</h2>
                <input
                    type="text"
                    placeholder="email adres"
                    name="email-adres"
                    className="email-adres"
                />
                <input
                    type="text"
                    placeholder="wachtwoord"
                    name="password"
                    className="password"
                />
            </form>
                <Button
                    buttonType="submit">Log in</Button>
                </div>
            <img src={nurse} alt="nurse" className="nurse-image" />
            </div>
        </article>
        </>
    )
}

export default LogIn;