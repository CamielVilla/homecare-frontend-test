import React from "react";
import './HomePage.css';
import Header from "../../components/Header/Header";
import Tile from "../../components/Tile/Tile";
import person from "../../assets/symbols/person.png";
import envelope from "../../assets/symbols/envelope.png";
import nurse from "../../assets/symbols/nurse.png";
import tel from "../../assets/symbols/telephone.png"
import Nav from "../../components/Nav/Nav";
import {NavLink, useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";


function Homepage(){
    const history = useHistory();

    function handleClickLogIn() {
        history.push("/login");
    }

    function handleClickContact(){
        history.push("/contact")
    }
    return (
        <>
        <Nav>
            <li><NavLink to ="/" exact activeClassName="active-link">Home</NavLink> </li>
            <li><NavLink to ="/login" exact activeClassName="active-link">Log in</NavLink> </li>
            <li><NavLink to ="/" exact activeClassName="active-link">Contact</NavLink> </li>
        </Nav>
        <header className="header">
            <div className="header-container">

                <Header />
                <div className="tile-container">
                    <Tile
                        image={person}
                        title="inloggen"
                        text="log in bij uw Homecare account"
                    ><Button  buttonType="button" handleClick={handleClickLogIn}>
                        Naar inloggen
                    </Button> </Tile>
                    <Tile
                        image={envelope}
                        title="contact"
                        text="neemt contact op via het contactformulier"
                    ><Button  buttonType="button" handleClick={handleClickContact}>
                        Naar het contactformulier
                    </Button> </Tile>
                    {/*<Tile*/}
                    {/*    image={tel}*/}
                    {/*    title="contactgegevens"*/}
                    {/*    text="wij zijn bereikbaar op ma t/m vr van 09.00 tot 17.00 uur"*/}
                    {/*><p>030 - 12345678</p>*/}
                    {/*</Tile>*/}
                </div>
            </div>
            <img src={nurse} alt="nurse" className="nurse-image" />
        </header>
        </>
    )
}

export default Homepage;
