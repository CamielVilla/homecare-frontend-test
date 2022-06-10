import React, {useEffect, useState} from "react";
import "./Form.css";


function Form({title, handleSubmit, children}) {

    return(
        <div className="form-container">
            <div className="form-inner-container">
                <form
                    onSubmit={handleSubmit}>
                    <h2>{title}</h2>
                    <div className="form-children">
                    {children}
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Form;
