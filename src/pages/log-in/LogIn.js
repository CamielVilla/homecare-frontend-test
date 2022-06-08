import React from "react";
import './Log-in.css';
import Button from "../../components/Button/Button";



function LogIn () {
    return (
        <>
        <section className="login-page">
            <div className="login-container">
                <div className="login-form-container">
            <form>
                <h2>Log hier in bij uw Homecare account</h2>
                <input
                    type="email"
                    placeholder="email adres"
                    name="email-adres"
                    className="email-adres"
                />
                <input
                    type="text"
                    placeholder="wachtwoord"
                    name="password"
                    className="password"
                />

            </form>
                <Button
                    buttonType="submit">Log in</Button>
                </div>
            </div>
        </section>
        </>
    )
}

export default LogIn;