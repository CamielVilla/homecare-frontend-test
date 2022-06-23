import React, {useState} from "react";
import "./AddNurses.css"
import GetUsers from "../../../components/getfunctions/GetUsers";
import Form from "../../../components/Form/Form";
import {useForm} from "react-hook-form";
import TextInput from "../../../components/Form/TextInput";
import Button from "../../../components/Button/Button";
import Page from "../../../components/Page/Page";
import axios from "axios";


function AddNurses() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [addSucces, toggleAddSucces] = useState(false)
    const scrollBarStyle = {
        border: '1px solid red',
        width: '500px',
        height: '400px'
    };

    async function addPatient (e) {
        try {
            const response = await axios.post('http://localhost:8080/admin/addpatient',  {
                name: e.nurseName,
                email: e.nurseEmail,
                password: e.nursePassword,
                bigNumber: e.nurseBig,
                role: "NURSE",
                enabled: 1,
            });
            console.log(response.data)
            toggleAddSucces(true)
        }catch (e) {
            console.error(e)
        }
    }
    return (
        <Page>
        <GetUsers
            name="Zorgverleners overzicht"
            toUser="naar zorverlener"
            userType="nurses"
            columnOne="Naam"
            columnTwo="email"
         />

            <div className="nurses-form-container">
            <Form
                handleSubmit={handleSubmit(addPatient)}
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
        </Page>
    )
}
export default AddNurses;