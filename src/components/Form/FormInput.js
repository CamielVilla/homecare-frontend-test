import React from "react";

function FormInput ({isRequired, id, name,  rules, errors, register, fieldName, htmlFor, type, placeholder, minimLength, maximLength}) {


    return (
             <label htmlFor={htmlFor}>
                <input
                    name={htmlFor}
                    type={type}
                    placeholder={placeholder}
                    className={htmlFor}
                    id={htmlFor}
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
export default FormInput;


