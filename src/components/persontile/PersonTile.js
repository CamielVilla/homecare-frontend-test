import React from "react";
import "./PersonTile.css"

import {NavLink} from "react-router-dom";


function PersonTile ({name, id}){
    return (
        <div className= "person-tile-container">
            <div className="person-tile">
                <h3><NavLink to="" exact activeClassName="active-person-link">
                    {name}</NavLink></h3>
                <h3><NavLink to="" exact activeClassName="active-person-link">
                    {id}</NavLink></h3>
            </div>
        </div>
    )
}

export default PersonTile