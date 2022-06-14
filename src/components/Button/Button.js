import React from "react";
import './Button.css'


function Button ({buttonType, handleClick, children, onChange}){

    return (
        <button
            className="button"
            type={buttonType}
            onClick={handleClick}
            onChange={onChange}
        >
            {children}
        </button>

    )
}

export default Button;