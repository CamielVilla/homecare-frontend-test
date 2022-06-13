import React from "react";
import './Log-in.css';
import Button from "../../../components/Button/Button";
import { useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import Form from "../../../components/Form/Form";
import FormInput from "../../../components/Form/FormInput";


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
            <div className="login-page-container">
                <div className="login-form-container">
            <Form
                handleSubmit={handleSubmit(onFormSubmit)}
                title="Log in met uw Homecare gegevens"
            >
                <FormInput
                    htmlFor="login-email"
                    type="email"
                    placeholder="Email adres"z
                    fieldName="loginEmail"
                    register={register}
                    errors={errors}
                    minimLength={3}
                    maximLength={100}
                    isRequired={true}
                />
                <FormInput
                htmlFor="login-password"
                type="text"
                placeholder="Wachtwoord"
                fieldName="loginPassword"
                register={register}
                errors={errors}
                minimLength={3}
                maximLength={100}
                isRequired={true}
                />
                <div className="button-container-login">

                    <Button buttonType="button" handleClick={forgetPassword}>Wachtwoord vergeten</Button>
                    <Button buttonType="submit">Log in</Button>
                </div>
            </Form>
                </div>
            </div>
        </section>
    )
}

export default LogIn;

