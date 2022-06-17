import React, {useEffect, useState} from "react";
import axios from "axios";
import Page from "../../components/Page/Page";
import Form from "../../components/Form/Form";
import {useForm} from "react-hook-form";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";

function AddWoundPhoto() {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [file, setFile] = useState([]);
    const [addSucces, toggleAddSucces] = useState(false);
    const [previewUrl, setPreviewUrl] = useState("");


    const history = useHistory();

    function handleImageChange(e) {
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile);

        setFile(uploadedFile);

        setPreviewUrl(URL.createObjectURL(uploadedFile));
    }

    async function sendImage(comment) {
        console.log(comment.patientComment)
        const formData = new FormData();
        formData.append("file", file);
        try {
            const result = await axios.post('http://localhost:8080/wounds/2000/upload',
               formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
            console.log(result.data);
            toggleAddSucces(true);
            reset();
            setPreviewUrl("")
            setFile([])
        } catch (e) {
            console.error(e)
        }
    }
    return (

        <Page>
            <Form title="Voeg foto toe" handleSubmit={handleSubmit(sendImage)}>
                <label htmlFor="wound-image" className="wound-image">
                    <input type="file"
                           id="wound-image"
                           name="image-field"
                           onChange={handleImageChange}
                    />
                </label>
                {previewUrl &&
                    <label>
                        Preview:
                        <img
                            src={previewUrl}
                            alt="voorbeeld van de afbeelding" className="image-preview" />
                    </label>
                }
                <Button buttonType="submit">Voeg foto toe</Button>
                {addSucces && <h3>Foto toegevoegd</h3>}
            </Form>
        </Page>
    )
}

export default AddWoundPhoto;

// async function addComment(comment) {
//     console.log(comment)
//     try {
//         const response = await axios.put("http://localhost:8080/woundexamination/1/comment", {
//             patientComment: comment
//         })
//         console.log(response.data)
//     } catch (e) {
//         console.error(e)
//     }
// }