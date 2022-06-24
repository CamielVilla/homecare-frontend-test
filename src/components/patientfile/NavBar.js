import React from "react";
import "./PatientFile.css";
import Button from "../Button/Button";

function NavBar({navItems, handleClick}){
    return(
        <div className="patient-nav">
        <div className="patient-nav-container">
        <ul>
            {navItems.map((wound) => {
                return<li key={wound}><Button handleClick={handleClick}></Button></li>
            })}
            <li>wonden overzicht</li>
            <li>voeg foto toe</li>
            <li>voe</li>
        </ul>
        </div>
        </div>
    )
}

export default NavBar;