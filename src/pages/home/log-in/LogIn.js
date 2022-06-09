import React, {useState} from "react";
import './Log-in.css';
import Button from "../../../components/Button/Button";
import { useForm} from "react-hook-form";


function LogIn () {

function handleLogin(){
    console.log("aaaaah doe het")
}

function onFormSubmit(e){
        e.preventDefault();
        console.log("submitted")
}

function log() {
    console.log("submitted")
}
    return (
        <>
        <section className="login-page">
            <div className="login-container">
                <div className="login-form-container">
                    <h2>Log hier in bij uw Homecare account</h2>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="login-email">
                    <input
                    type="email"
                    placeholder="email adres"
                    name="email-adres"
                    className="email-adres"
                    />
                </label>
                <label htmlFor="password">
                <input
                    type="text"
                    placeholder="wachtwoord"
                    name="password"
                    className="password"
                />
                </label>
                <Button handleClick={handleLogin} buttonType="submit">Log in</Button>
            </form>
                </div>

            </div>

        </section>

        </>
    )
}

export default LogIn;