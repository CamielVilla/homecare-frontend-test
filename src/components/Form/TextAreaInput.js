import React from "react";
import "./Form.css";

function TextAreaInput({isRequired, errors, register, fieldName, htmlFor,
                           placeholder, minimLength, maximLength, cols, rows, onChange}) {


    return (
        <label htmlFor={htmlFor}>
            <textarea
                name={htmlFor}
                placeholder={placeholder}
                className={htmlFor}
                id={htmlFor}
                onChange={onChange}
                cols={cols}
                rows={rows}
                {...(register && register(fieldName,
                    {
                        required: {
                            value: {isRequired},
                            message: "veld is verplicht"
                        },
                        minLength: {
                            value: minimLength,
                            message: `voer minimaal ${minimLength} karakters in`
                        },
                        maxLength: {
                            value: maximLength,
                            message: `voer maximaal ${maximLength} karakters in`
                        }
                    }
                ))}
            />
            <p> {
                errors[fieldName] && errors[fieldName].message
            } </p>
        </label>
    )
}

export default TextAreaInput;