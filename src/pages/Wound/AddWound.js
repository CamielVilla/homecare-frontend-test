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
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [file, setFile] = useState("");
    const [previewUrl, setPreviewUrl] = useState("");

    function handleImageChange (e){
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile)
        setFile(uploadedFile);
        setPreviewUrl(URL.createObjectURL(uploadedFile));
    }

    async function sendImage(e){
        const formData = new formData();
        formData.append("file", file)

        try {
            // verstuur ons formData object en geef in de header aan dat het om een form-data type gaat
            // Let op: we wijzigen nu ALTIJD de afbeelding voor student 1001, als je een andere student wil kiezen of dit dynamisch wil maken, pas je de url aan!
            const result = await axios.post('http://localhost:8080/patients/1002/wound', formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                })
            console.log(result.data);
        } catch (e) {
            console.error(e)
        }
    }


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

            {/*<label htmlFor="wound-image">*/}
            {/*    <input type="file"*/}
            {/*           id="wound-image"*/}
            {/*           name="image-field"*/}
            {/*           onChange={handleImageChange}*/}
            {/*    />*/}
            {/*</label>*/}
            {previewUrl &&
                <label>
                    Preview:
                    <img
                        src={previewUrl}
                        alt="voorbeeld van de afbeelding" className="image-preview" />
                </label>
            }
            <div className="button-container">
                <Button buttonType="reset">Reset</Button>
                <Button buttonType="submit">Voeg toe</Button>
            </div>
        </Form>
        </Page>
    )
}

export default AddWound;