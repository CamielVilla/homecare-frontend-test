import React from "react";
import './Log-in.css';
import Button from "../../../components/Button/Button";
import { useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import Form from "../../../components/Form/Form";


function LogIn () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();


function onFormSubmit(data){
console.log(data)
}

function handleLogin (){

}


function forgetPassword (){
    history.push("/contact")
}

    return (
        <section className="login-page">
            <Form
                title="Log in bij uw Homecare account"
                handleClikButtonOne={forgetPassword}
                handleClickButtonTwo={handleLogin}
                buttonTypeOne="submit"
                buttonTypeTwo="submit"
            >
            <label htmlFor="email">
                <input
                    id="email"
                    type="email"
                    placeholder="email"
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
            </Form>
        </section>
    )
}

export default LogIn;