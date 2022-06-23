import React, {useContext, useEffect, useState} from "react";
import "./ProfilePage.css"
import Form from "../../components/Form/Form";
import {useForm} from "react-hook-form";
import TextInput from "../../components/Form/TextInput";
import Button from "../../components/Button/Button";
import Page from "../../components/Page/Page";
import axios from "axios";
import authContext, {AuthContext} from "../../Context/AuthContext";

function ProfilePage(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user  } = useContext(AuthContext)
    function onFormSubmit (data) {
        console.log(data)

    }

    return(
        <Page>
            <div className="profile-page">
                <div className="profile-page-container">
                <h1>Uw gegevens</h1>
                <h2>Naam: {user.name}</h2>
                <h2>Email: {user.email}</h2>
                <h2>Wachtwoord wijzigen:</h2>
                </div>
                <Form
                handleSubmit={onFormSubmit}
                >
                    <TextInput
                        htmlFor="old-password"
                        type="text"
                        placeholder="Oud wachtwoord"
                        fieldName="oldPassword"
                        register={register}
                        errors={errors}
                        minimLength={3}
                        maximLength={50}
                        isRequired={true}
                    />
                    <TextInput
                        htmlFor="new-password"
                        type="text"
                        placeholder="Nieuw wachtwoord"
                        fieldName="NewPassword"
                        register={register}
                        errors={errors}
                        minimLength={3}
                        maximLength={50}
                        isRequired={true}
                    />
                    <TextInput
                        htmlFor="new-password-confirm"
                        type="text"
                        placeholder="Herhaal nieuw wachtwoord"
                        fieldName="newPasswordConfirm"
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