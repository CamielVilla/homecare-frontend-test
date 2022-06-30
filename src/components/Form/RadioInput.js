import React from "react";
import "./Form.css";

function RadioInput({htmlFor, woundName, checked, onChange}) {
    return (

        <label className="radio-container" htmlFor={htmlFor}>
            <input checked={checked} type="radio" name="radio" id={htmlFor} onInput={onChange}/>
            {woundName}
        </label>

    )
}

export default RadioInput;