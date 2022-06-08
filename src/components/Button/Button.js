import React from "react";
import './Button.css'

function Button ({buttonType, onClick, children}){
    return (
        <button
            className="button"
            type={buttonType}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;