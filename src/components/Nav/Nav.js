import React, {useContext, useEffect, useState} from "react";
import './Nav.css';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../Context/AuthContext";

function Nav () {

    const { logOut, user } = useContext(AuthContext)
    const [navItems, setNavItems] = useState(["home", "login"])
    const home = ["home", "login"]
    const admin = ["admin", "zorgverleners", "patiënten"]
    const nurses= ["nieuwe-foto's", "profiel", "patiënten-overzicht"]
    const patients= ["dossier-overzicht", "profiel"]

    useEffect(() => {
           if(user) {
               if (user.role === 'ADMIN') {
                   setNavItems(admin)
               } else if (user.role === 'NURSE') {
                   setNavItems(nurses)
               } else if (user.role === 'PATIENT') {
                   setNavItems(patients)
               }
           }
    },[])
    return (
        <nav className="nav">
            <div className="nav-container">
            <ul>
                {navItems.map((nav) => {
                    return<li key={nav}><NavLink
                        to={nav} exact activeClassName="active-link">{nav}</NavLink></li>
                })}
                {user && <button onClick={(e) => {logOut(e); setNavItems(home)}}>Log uit</button> }
            </ul>
            </div>
        </nav>

    )
}

export default Nav;