import React, {useState} from "react";
import "./AddWound.css";
import {useForm} from "react-hook-form";
import Form from "../../components/Form/Form";
import TextInput from "../../components/Form/TextInput";
import TextAreaInput from "../../components/Form/TextAreaInput";
import Button from "../../components/Button/Button";
import Page from "../../components/Page/Page";
import axios from "axios";

function AddWound() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [addSucces, toggleAddSucces] = useState(false)

    async function addNewWound(e){
       try{
           const response = await axios.post("http://localhost:8080/admin/1002/addwound", {
               woundName: e.patientWound,
               woundLocation: e.patientWoundLocation,
               treatmentPlan: e.woundPlan,
           })
           console.log(response.data)
           toggleAddSucces(true)
           reset()
       }catch (e){
           console.error(e)
       }
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
            {/*<TextInput*/}
            {/*    htmlFor="wound-image"*/}
            {/*    type="file"*/}
            {/*    register={register}*/}
            {/*    errors={errors}*/}
            {/*    isRequired={true}*/}
            {/*/>*/}


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
            {addSucces && <h3>Wond toegevoegd</h3>}
        </Form>
        </Page>
    )
}

export default AddWound;