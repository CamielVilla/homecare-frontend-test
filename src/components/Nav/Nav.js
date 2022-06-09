import React, {useState} from "react";
import './Nav.css';
import {NavLink} from "react-router-dom";

function Nav ({navItems, basePage}) {

    return (
        <nav className="nav">
            <div className="nav-container">
            <ul>
                {navItems.map((nav) => {
                    return<li key={nav}><NavLink
                        to={nav} exact activeClassName="active-link">{nav}</NavLink></li>
                })}
            </ul>
            </div>
        </nav>

    )
}

export default Nav;