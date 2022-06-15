import React from "react";
import './Button.css'


function Button ({buttonType, handleClick, children, onChange, name}){

    return (
        <button
            className="button"
            type={buttonType}
            onClick={handleClick}
            onChange={onChange}
            name={name}
        >
            {children}
        </button>

    )
}

export default Button;