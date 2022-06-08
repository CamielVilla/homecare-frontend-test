import React from "react";
import "./Home.css";
import {NavLink, Route, Switch} from "react-router-dom";
import HomePage from "../homepage/HomePage";
import LogIn from "../log-in/LogIn";
import ContactPage from "../contactpage/ContactPage";
import Nav from "../../components/Nav/Nav";
import nurse from "../../assets/symbols/nurse.png";

function Home () {
    return (
        <>
            <Nav>
                <li><NavLink to ="/" exact activeClassName="active-link">Home</NavLink> </li>
                <li><NavLink to ="/login" exact activeClassName="active-link">Log in</NavLink> </li>
                <li><NavLink to ="/contact" exact activeClassName="active-link">Contact</NavLink> </li>
            </Nav>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LogIn />
                </Route>
                <Route exact path="/contact">
                    <ContactPage />
                </Route>
            </Switch>
            <img src={nurse} alt="nurse" className="nurse-image" />
        </>
    )
}
export default Home;
