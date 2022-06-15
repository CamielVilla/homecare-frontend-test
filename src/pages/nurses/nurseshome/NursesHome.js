import React from "react";
import "./NursesHome.css"
import Form from "../../../components/Form/Form";
import {useForm} from "react-hook-form";
import TextInput from "../../../components/Form/TextInput";
import Button from "../../../components/Button/Button";
import Page from "../../../components/Page/Page";

function NursesHome(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    function onFormSubmit (data) {
        console.log(data)
    }
    return(
        <Page>
            <div className="nurses-home-container">
                <div className="nurses-info-container">
                <h1>Uw gegevens</h1>
                <h2>Naam:</h2>
                <h2>Email adres:</h2>
                <h2>Big nummer:</h2>
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

export default NursesHome;