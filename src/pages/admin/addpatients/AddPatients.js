import React, {useState} from "react";
import "./AddPatients.css";
import GetUsers from "../../../components/getfunctions/GetUsers";
import Form from "../../../components/Form/Form";
import TextInput from "../../../components/Form/TextInput";
import Button from "../../../components/Button/Button";
import {useForm} from "react-hook-form";
import TextAreaInput from "../../../components/Form/TextAreaInput";
import Page from "../../../components/Page/Page";
import axios from "axios";
import Table from "../../../components/table/Table";


function AddPatients () {
    const [addSucces, toggleAddSucces] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();




    async function addPatient (e) {
       try {
           const response = await axios.post('http://localhost:8080/patients',  {
               name: e.patientName,
               dateOfBirth: e.patientDob,
               email: e.patientEmail,
               password: e.patientPassword,
               role: "PATIENT",
               enabled: 1,
           });
           console.log(response.data)
           toggleAddSucces(true)
       }catch (e) {
           console.error(e)
       }
    }

    function addPhoto(){
        console.log("photo added")
    }
    return (
        <Page>
           <GetUsers
               name="Patiënten overzicht"
               toUser="Naar Patiënt"
               userType="patients"
               columnOne="Naam"
               columnTwo="Geboorte datum"
           >

           </GetUsers>

                    <div className="patient-form-container">
                            <Form
                                handleSubmit={handleSubmit(addPatient)}
                                title="voeg patiënt toe"
                            >
                                <TextInput
                                    htmlFor="patient-name"
                                    type="text"
                                    placeholder="Naam"
                                    fieldName="patientName"
                                    register={register}
                                    errors={errors}
                                    minimLength={3}
                                    maximLength={50}
                                    isRequired={true}
                                />
                                <TextInput
                                    htmlFor="patient-email"
                                    type="email"
                                    placeholder="email adres"
                                    fieldName="patientEmail"
                                    register={register}
                                    errors={errors}
                                    minimLength={3}
                                    maximLength={50}
                                    isRequired={true}
                                />
                                <TextInput
                                    htmlFor="patient-password"
                                    type="text"
                                    placeholder="Wachtwoord"
                                    fieldName="patientPassword"
                                    register={register}
                                    errors={errors}
                                    minimLength={3}
                                    maximLength={50}
                                    isRequired={true}
                                />
                                <TextInput
                                    htmlFor="patient-dob"
                                    type="text"
                                    placeholder="Geboortedatum"
                                    fieldName="patientDob"
                                    register={register}
                                    errors={errors}
                                    minimLength={3}
                                    maximLength={50}
                                    isRequired={true}
                                />
                                <div className="button-container-admin-patients">
                                    <Button buttonType="reset">Reset</Button>
                                    <Button buttonType="submit">Voeg toe</Button>
                                </div>
                                {addSucces && <h3>Patiënt toegevoegd</h3>}
                            </Form>
                    </div>
        </Page>
    )
}
export default AddPatients;