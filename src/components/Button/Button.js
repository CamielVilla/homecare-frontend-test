import React from "react";
import './Button.css'


function Button ({key, buttonType, handleClick, children, onChange, name, disabled}){

    return (
        <button
            className="button"
            type={buttonType}
            onClick={handleClick}
            onChange={onChange}
            name={name}
            key={key}
            disabled={disabled}
        >
            {children}
        </button>

    )
}

export default Button;