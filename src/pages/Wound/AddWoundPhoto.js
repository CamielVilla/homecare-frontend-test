import React, {useEffect, useState} from "react";
import axios from "axios";
import {useForm} from "react-hook-form";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import "./AddWound.css"

function AddWoundPhoto({woundId}) {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [previewUrl, setPreviewUrl] = useState("");
    const [file, setFile] = useState([]);
    const [disabled, toggleDisabled] = useState(true);
    const [addSucces, toggleAddSucces] = useState(false);

    const history = useHistory();

    function handleImageChange(e) {
        e.preventDefault();
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile);
        console.log("bemmm")
        toggleDisabled(false)
        setFile(uploadedFile);
        setPreviewUrl(URL.createObjectURL(uploadedFile));
    }


    async function sendImage(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", file);
        try {
            const result = await axios.post(`http://localhost:8080/wounds/${woundId}/photo`,
               formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
            console.log(result.data);
            toggleAddSucces(true);
            // reset();
            // setPreviewUrl("")
            // setFile([])
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <form title="Voeg foto toe" className="wound-image-container" onSubmit={sendImage} >
            <label htmlFor="wound-image" className="wound-image">
                <input type="file"
                       id="wound-image"
                       name="image-field"
                       onChange={handleImageChange}
                />
            </label>
            {previewUrl &&
                <div className="image-preview-container">
                <label>
                    <img
                        src={previewUrl}
                        alt="voorbeeld van de afbeelding" className="image-preview" />
                </label>
                </div>
            }
            <Button disabled={disabled} buttonType="submit">Voeg foto toe</Button>
            {addSucces && <h3>Foto toegevoegd</h3>}
        </form>

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