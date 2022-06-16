import React from "react";
import "./AdminNurses.css"
import GetUsers from "../../../components/getfunctions/GetUsers";
import Form from "../../../components/Form/Form";
import {useForm} from "react-hook-form";
import TextInput from "../../../components/Form/TextInput";
import Button from "../../../components/Button/Button";
import Page from "../../../components/Page/Page";

function AdminNurses() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const scrollBarStyle = {
        border: '1px solid red',
        width: '500px',
        height: '400px'
    };

    function onFormSubmit (data) {
    console.log(data)
    }
    return (
        <Page>
        <GetUsers
            name="Zorgverleners overzicht"
            scrollBarStyle={scrollBarStyle}
        >
            <div className="nurses-form-container">
            <Form
                handleSubmit={handleSubmit(onFormSubmit)}
                title="voeg zorgverlener toe"
            >
                <TextInput
                    htmlFor="nurse-name"
                    type="text"
                    placeholder="Naam"
                    fieldName="nurseName"
                    register={register}
                    errors={errors}
                    minimLength={3}
                    maximLength={50}
                    isRequired={true}
                />
                <TextInput
                    htmlFor="nurse-email"
                    type="email"
                    placeholder="email adres"
                    fieldName="nurseEmail"
                    register={register}
                    errors={errors}
                    minimLength={3}
                    maximLength={50}
                    isRequired={true}
                />
                <TextInput
                    htmlFor="nurse-password"
                    type="text"
                    placeholder="Wachtwoord"
                    fieldName="nursePassword"
                    register={register}
                    errors={errors}
                    minimLength={3}
                    maximLength={50}
                    isRequired={true}
                />
                <TextInput
                    htmlFor="nurse-big"
                    type="text"
                    placeholder="Big-nummer"
                    fieldName="nurseBig"
                    register={register}
                    errors={errors}
                    minimLength={3}
                    maximLength={50}
                    isRequired={true}
                />
                <div className="button-container-admin-nurses">
                    <Button buttonType="reset">Reset</Button>
                    <Button buttonType="submit">Voeg toe</Button>
                </div>
            </Form>
            </div>
        </GetUsers>
        </Page>
    )
}
export default AdminNurses;