import React from "react";
import {useForm} from "react-hook-form";
import Form from "../../components/Form/Form";
import TextInput from "../../components/Form/TextInput";
import TextAreaInput from "../../components/Form/TextAreaInput";
import Button from "../../components/Button/Button";
import Page from "../../components/Page/Page";

function AddWound() {
    const { register, handleSubmit, formState: { errors } } = useForm();


    function addNewWound(){
        console.log(("nieuwe wond toegevoegd!"))
    }
    return (
        <Page>
        <Form
        title="Voeg nieuwe wond toe"
        handleSubmit={handleSubmit(addNewWound)}
        >
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
            <div className="button-container">
                <Button buttonType="reset">Reset</Button>
                <Button buttonType="submit">Voeg toe</Button>
            </div>
        </Form>
        </Page>
    )
}

export default AddWound;