import React from "react";
import "./AdminPatients.css";
import OverviewPage from "../../overview/OverviewPage";
import Form from "../../../components/Form/Form";
import FormInput from "../../../components/Form/FormInput";
import Button from "../../../components/Button/Button";
import {useForm} from "react-hook-form";


function AdminPatients () {
    const { register, handleSubmit, formState: { errors } } = useForm();


    function onFormSubmit (data) {
        console.log(data)
    }
    return (
        <div className="admin-patients-page">
            <div className="admin-patients-container">
                <OverviewPage
                    name="Zorgverleners overzicht"
                >
                    <div className="patient-form-container">
                        <Form
                            handleSubmit={handleSubmit(onFormSubmit)}
                            title="voeg patiënt toe"
                        >
                            <FormInput
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
                            <FormInput
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
                            <FormInput
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
                            <FormInput
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
                            <div className="button-container-admin-nurses">
                                <Button buttonType="reset">Reset</Button>
                                <Button buttonType="submit">Voeg toe</Button>
                            </div>
                        </Form>
                    </div>
                </OverviewPage>

            </div>
        </div>
    )
}
export default AdminPatients;