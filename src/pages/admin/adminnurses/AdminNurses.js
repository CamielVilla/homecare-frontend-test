import React from "react";
import "./AdminNurses.css"
import OverviewPage from "../../overview/OverviewPage";
import Form from "../../../components/Form/Form";
import {useForm} from "react-hook-form";
import FormInput from "../../../components/Form/FormInput";
import Button from "../../../components/Button/Button";

function AdminNurses() {
    const { register, handleSubmit, formState: { errors } } = useForm();


    function onFormSubmit (data) {
    console.log(data)
    }
    return (
        <div className="admin-nurses-page">
            <div className="admin-nursers-container">
        <OverviewPage
            name="Zorgverleners overzicht"
        >
            <div className="nurses-form-container">
            <Form
                handleSubmit={handleSubmit(onFormSubmit)}
                title="voeg zorgverlener toe"
            >
                <FormInput
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
                <FormInput
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
                <FormInput
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
                <FormInput
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
                    <Button buttonType="submit">Verzend</Button>
                </div>
            </Form>
            </div>
        </OverviewPage>

            </div>
        </div>
    )
}
export default AdminNurses;