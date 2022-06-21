import React, {useEffect, useState} from "react";
import "./ProfilePage.css"
import Form from "../../components/Form/Form";
import {useForm} from "react-hook-form";
import TextInput from "../../components/Form/TextInput";
import Button from "../../components/Button/Button";
import Page from "../../components/Page/Page";
import axios from "axios";

function ProfilePage(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [userId, setUserId] = useState("1002");
    const [role, setRole] = useState("patients");
    const [user, setUser] = useState("");
    function onFormSubmit (data) {
        console.log(data)

    }

    useEffect( () => {
        async function getUserInfo (){
            try{ const result = await axios.get(`http://localhost:8080/${role}/${userId}`)
                console.log(result.data)
                setUser(result.data)
            }catch (e) {
                console.error(e)
            }
        }getUserInfo();
    }, [])
    return(
        <Page>
            <div className="nurses-home-container">
                <div className="nurses-info-container">
                <h1>Uw gegevens</h1>
                <h2>Naam: {user.name}</h2>
                <h2>Email: {user.email}</h2>
                <h2>Wachtwoord wijzigen:</h2>
                </div>
                <Form
                handleSubmit={onFormSubmit}
                >
                    <TextInput
                        htmlFor="patient-old-password"
                        type="text"
                        placeholder="Oud wachtwoord"
                        fieldName="patientOldPassword"
                        register={register}
                        errors={errors}
                        minimLength={3}
                        maximLength={50}
                        isRequired={true}
                    />
                    <TextInput
                        htmlFor="patient-new-password"
                        type="text"
                        placeholder="Nieuw wachtwoord"
                        fieldName="patientNewPassword"
                        register={register}
                        errors={errors}
                        minimLength={3}
                        maximLength={50}
                        isRequired={true}
                    />
                    <TextInput
                        htmlFor="patient-new-password-confirm"
                        type="text"
                        placeholder="Herhaal nieuw wachtwoord"
                        fieldName="patientNewPasswordConfirm"
                        register={register}
                        errors={errors}
                        minimLength={3}
                        maximLength={50}
                        isRequired={true}
                    />
                    <div className="button-container-patient-password">
                        <Button buttonType="reset">Reset</Button>
                        <Button buttonType="submit">Wijzig</Button>

                    </div>
                </Form>
            </div>
        </Page>
    )
}

export default ProfilePage;