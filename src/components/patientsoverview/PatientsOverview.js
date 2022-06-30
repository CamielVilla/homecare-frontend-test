import React, {useContext, useState} from "react";
import "./PatientsOverview.css";
import GetUsers from "../getfunctions/GetUsers";
import Form from "../Form/Form";
import TextInput from "../Form/TextInput";
import Button from "../Button/Button";
import {useForm} from "react-hook-form";
import Page from "../Page/Page";
import axios from "axios";
import {AuthContext} from "../../Context/AuthContext";


function PatientsOverview () {
    const [addSucces, toggleAddSucces] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);



    async function addPatient (e) {
        const token = localStorage.getItem('token')
       try {
           const response = await axios.post('http://localhost:8080/admin/addpatient',  {
               name: e.patientName,
               dateOfBirth: e.patientDob,
               email: e.patientEmail,
               password: e.patientPassword,
               role: "PATIENT",
               enabled: 1,
           }, {
               headers: {
                   "Content-Type": "application/json",
                   Authorization: `Bearer ${token}`,
               }
           })
           toggleAddSucces(true)
       }catch (e) {
           console.error(e)
       }
    }

    return (
        <Page>
           <GetUsers
               name="Patiënten overzicht"
               toUser="Naar Patiënt"
               userType="patients"
               columnOne="Naam"
               columnTwo="Geboorte datum"
               columnThree=""
           >

           </GetUsers>
            {user.role === "ADMIN" &&
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
            }
        </Page>
    )
}
export default PatientsOverview;