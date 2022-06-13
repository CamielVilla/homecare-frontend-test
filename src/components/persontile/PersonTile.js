import React from "react";
import "./PersonTile.css"


function PersonTile ({name}){
    return (
        <div className= "person-tile-container">
            <div className="person-tile">
                <h2>{name}</h2>
                <h2>{name + "@homecare.nl"}</h2>
            </div>
        </div>
    )
}

export default PersonTile