import React from "react";
import "./AdminPatients.css";
import ScrollContent from "../../../components/scrollcontent/ScrollContent";
import Form from "../../../components/Form/Form";
import TextInput from "../../../components/Form/TextInput";
import Button from "../../../components/Button/Button";
import {useForm} from "react-hook-form";
import TextAreaInput from "../../../components/Form/TextAreaInput";


function AdminPatients () {
    const { register, handleSubmit, formState: { errors } } = useForm();


    function onFormSubmit (data) {
        console.log(data)
    }

    function addPhoto(){
        console.log("photo added")
    }
    return (
        <div className="admin-patients-page">
            <div className="admin-patients-container">
                <ScrollContent
                    name="Patiënten overzicht"
                >
                    <div className="patient-form-container">
                        <Form
                            handleSubmit={handleSubmit(onFormSubmit)}
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
                            <TextInput
                                htmlFor="patient-wound"
                                type="text"
                                placeholder="Naam wond"
                                fieldName="patientWound"
                                register={register}
                                errors={errors}
                                minimLength={3}
                                maximLength={50}
                                isRequired={true}
                            />
                            <TextInput
                                htmlFor="patient-wound-location"
                                type="text"
                                placeholder="Locatie wond"
                                fieldName="patientWoundLocation"
                                register={register}
                                errors={errors}
                                minimLength={3}
                                maximLength={50}
                                isRequired={true}
                            />
                            <TextAreaInput
                                htmlFor="wound-plan"
                                placeholder="Behandelplan"
                                fieldName="woundPlan"
                                register={register}
                                errors={errors}
                                minimLength={3}
                                maximLength={1000}
                                isRequired={true}
                                cols={40}
                                rows={30}
                            />
                            <div className="button-container-admin-patients">
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
export default AdminPatients;