import React from "react";
import './Button.css'


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