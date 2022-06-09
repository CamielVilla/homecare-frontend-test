import React from "react";
import './Button.css'


function Button ({buttonType, handleClick, children}){

    return (
        <div className={buttonType}>
        <button
            className="button"
            type={buttonType}
            onClick={handleClick}
        >
            {children}
        </button>
        </div>
    )
}

export default Button;