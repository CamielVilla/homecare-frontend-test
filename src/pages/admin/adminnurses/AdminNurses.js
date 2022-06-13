import React from "react";
import "./AdminNurses.css"
import ScrollContent from "../../../components/scrollcontent/ScrollContent";
import Form from "../../../components/Form/Form";
import {useForm} from "react-hook-form";
import TextInput from "../../../components/Form/TextInput";
import Button from "../../../components/Button/Button";

function AdminNurses() {
    const { register, handleSubmit, formState: { errors } } = useForm();


    function onFormSubmit (data) {
    console.log(data)
    }
    return (
        <div className="admin-nurses-page">
            <div className="admin-nursers-container">
        <ScrollContent
            name="Zorgverleners overzicht"
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
        </ScrollContent>

            </div>
        </div>
    )
}
export default AdminNurses;