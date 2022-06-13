import React from "react";
import './HomePage.css';
import Header from "../../../components/Header/Header";
import Tile from "../../../components/Tile/Tile";
import person from "../../../assets/symbols/person.png";
import envelope from "../../../assets/symbols/envelope.png";
import {useHistory} from "react-router-dom";
import Button from "../../../components/Button/Button";
import Page from "../../../components/Page/Page";


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
            <header className="homepage">
            <div className="homepage-container">
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
                </div>
            </div>
        </header>
        </>
    )
}

export default Homepage;
