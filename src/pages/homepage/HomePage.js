import React from "react";
import './HomePage.css';
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Tile from "../../components/Tile/Tile";
import person from "../../assets/symbols/person.png";
import envelope from "../../assets/symbols/envelope.png";
import nurse from "../../assets/symbols/nurse.png";
import {NavLink} from "react-router-dom";

function Homepage(){
    return (
        <header className="header">
            <div className="header-container">
                <Nav>
                    <li><NavLink to ="/" exact activeClassName="active-link">Home</NavLink> </li>
                    <li><NavLink to ="/" exact activeClassName="active-link">Log in</NavLink> </li>
                    <li><NavLink to ="/" exact activeClassName="active-link">Contact</NavLink> </li>
                </Nav>
                <Header />
                <div className="tile-container">
                    <Tile
                        image={person}
                        title="inloggen"
                        text="log in bij uw Homecare account"
                    >inloggen </Tile>
                    <Tile
                        image={envelope}
                        title="contact"
                        text="neemt contact op via het contactformulier"
                    >naar het contactformulier </Tile>
                </div>
            </div>
            <img src={nurse} alt="nurse" className="nurse-image" />
        </header>
    )
}

export default Homepage;
