import React from "react";
import "./Form.css";

function RadioInput({htmlFor, woundName, checked}) {
    return (

        <label className="radio-container" htmlFor={htmlFor}>
            <input checked={checked} type="radio" name="radio" id={htmlFor}/>
            {woundName}
        </label>

    )
}

export default RadioInput;