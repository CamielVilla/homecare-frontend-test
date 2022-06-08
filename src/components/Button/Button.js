import React from "react";
import './Button.css'
import {useHistory} from "react-router-dom";

function Button ({buttonType, handleClick, children}){

    return (
        <button
            className="button"
            type={buttonType}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button;