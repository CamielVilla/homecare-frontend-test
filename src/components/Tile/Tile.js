import React from "react";
import './Tile.css'
import person from "../../assets/symbols/person.png";
import Button from "../Button/Button";

function Tile ({image, children, title, text}) {
    return(

            <div className={title}>
                <img alt={title} src={image}/>
                <h3>{title}</h3>
                <p>{text}</p>
                <Button onClick="" buttonType="button">
                    {children}
                </Button>
            </div>
    )
}

export default Tile;