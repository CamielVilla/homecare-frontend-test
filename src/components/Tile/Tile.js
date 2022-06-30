import React from "react";
import './Tile.css'


function Tile ({image, children, title, text}) {

    return(

            <div className={title}>
                <img alt={title} src={image}/>
                <h3>{title}</h3>
                <p>{text}</p>
                {children}
            </div>
    )
}

export default Tile;