import React, {useEffect, useState} from "react";
import "./Form.css";
import Button from "../Button/Button";
import {useForm} from "react-hook-form";
import {useHistory, useLocation} from "react-router-dom";

function Form({title, children, handleClikButtonOne, handleClickButtonTwo, buttonTypeOne, buttonTypeTwo}) {

        const { register, handleSubmit, formState: { errors } } = useForm();
        const history = useHistory();


        function onFormSubmit(data){
            console.log(data)
        }

        function forgetPassword (){
            history.push("/contact")
        }



    return(
        <div className="login-container">
            <div className="login-form-container">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <h2>{title}</h2>
                    {children}
                    <div className="button-container-login">
                        <Button buttonType={buttonTypeOne} handleClick={handleClikButtonOne}>Wachtwoord vergeten</Button>
                        <Button buttonType={buttonTypeTwo} handleClick={handleClickButtonTwo}>Log in</Button>
                    </div>
                </form>
            </div>

        </div>

    )
}
export default Form;