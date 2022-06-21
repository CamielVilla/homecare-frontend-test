import React, {useContext} from "react";
import './Log-in.css';
import Button from "../../../components/Button/Button";
import { useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import Form from "../../../components/Form/Form";
import TextInput from "../../../components/Form/TextInput";
import {AuthContext} from "../../../Context/AuthContext";
import Page from "../../../components/Page/Page";
import {NavContext} from "../../../Context/NavContext";
import axios from "axios";


function LogIn () {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const history = useHistory();
    const {logInFunction} = useContext(AuthContext)


    async function checkAuth(e) {
        console.log(e)
        try {
            const response = await axios.post(`http://localhost:8080/login`, {
                "email": e.loginEmail,
                "password": e.loginPassword
            });
            logInFunction(response.data)
        } catch (e) {
            console.error(e)
        }
    }

// console.log(e)
//     logInFunction();
// }

function handleLogin (){
}


function forgetPassword (){
    history.push("/contact")
}

    return (
        <Page>
                {/*<button type="button" onClick={logOutFunction}>Uit</button>*/}
                {/*<button type="button" onClick={setAdminNavBarFunction}>In</button>*/}
                {/*{loggedIn*/}
                {/*    ?<p>je bent ingelogd</p>*/}
                {/*    :<p>je bent uigelogd</p>}*/}

                <div className="login-form-container">
            <Form
                handleSubmit={handleSubmit(checkAuth)}
                title="Log in met uw Homecare gegevens"
            >
                <TextInput
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
                <TextInput
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
        </Page>
    )
}

export default LogIn;

