import React, {useState} from "react";
import './Log-in.css';
import Button from "../../../components/Button/Button";
import { useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";


function LogIn () {
    const { register, handleSubmit } = useForm();
    const history = useHistory();


function onFormSubmit(e){
        e.preventDefault();
        console.log("submitted")
}


function forgetPassword (){
    history.push("/contact")
}

    return (
        <section className="login-page">
            <div className="login-container">
                <div className="login-form-container">
                    <h2>Log hier in bij uw Homecare account</h2>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="login-email">
                    <input
                        id="login-email"
                        type="email"
                        placeholder="email adres"
                        {...register("login-email-adres")}
                        className="email-adres"
                    />
                </label>
                <label htmlFor="login-password">
                    <input
                        id="login-password"
                        type="text"
                        placeholder="wachtwoord"
                        {...register("login-password")}
                        className="password"
                    />
                </label>
                <div className="button-container-login">
                    <Button buttonType="button" handleClick={forgetPassword}>Wachtwoord vergeten</Button>
                    <Button buttonType="submit">Log in</Button>
                </div>
            </form>
                </div>
            </div>
        </section>
    )
}

export default LogIn;