import React from "react";
import './Log-in.css';
import Button from "../../../components/Button/Button";
import { useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";


function LogIn () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();


function onFormSubmit(data){
console.log(errors)
}



function forgetPassword (){
    history.push("/contact")
}

    return (
        <section className="login-page">
            <div className="login-container">
                <div className="login-form-container">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <h2>Log hier in bij uw Homecare account</h2>
                <label htmlFor="login-email">
                    <input
                        id="login-email"
                        type="email"
                        placeholder="email adres"
                        {...register("email", {
                            required: "email is verplicht"
                        })}
                        className="email-adres"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </label>
                <label htmlFor="login-password">
                    <input
                        id="login-password"
                        type="text"
                        placeholder="wachtwoord"
                        {...register("password", {
                            required: "wachtwoord is verplicht"
                        })}
                        className="password"
                    />
                    {errors.password && <p>{errors.password.message}</p>}
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