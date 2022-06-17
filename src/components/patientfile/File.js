import React, {useEffect, useState} from "react";
import "./File.css";
import Page from "../Page/Page";
import Table from "../table/Table";
import Button from "../Button/Button";
import RadioInput from "../Form/RadioInput";
import { useForm } from "react-hook-form";
import WoundExamination from "../woundExamination/WoundExamination";
import {useHistory} from "react-router-dom";
import axios from "axios";



function File(){
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const [woundExaminations, setWoundExaminations] = useState([])
    const [examination, setExamination] = useState("")
    const [treatmentplan, setTreatmentplan] = useState("")

    const history = useHistory();


    function addWound(){
        history.push("/nieuwe-wond")
    }

    function addWoundPhoto(){
        history.push("/wond-foto")
    }

// const click = index => e => {
//     let newArr = [...woundExaminations];
//     newArr[index].examination = "beoordeling"
//     console.log(newArr)
//         forceUpdate();
//     }

function onFormSubmit (data) {
setExamination(data)
}

    useEffect( () => {
        async function fetchPatientData(){
            try {
                const result = await axios.get("http://localhost:8080/wounds/2000")
                console.log(result.data.woundExamination);
                setWoundExaminations(result.data.woundExamination);
            }catch (e) {
                console.error(e)
            }
        }fetchPatientData();
    } , [])




    return(
<Page>
            <h1>Dossier van J. Pieters</h1>
            <div className="patient-wound-container">
                <h2>Overzicht van wonden</h2>
                <RadioInput checked="checked" htmlFor="woundOne" woundName="Schaafwond linker knie" />
                <RadioInput htmlFor="woundOne" woundName="Steekwond buik" />
                <Button buttonType="button" handleClick={addWound} >Voeg nieuwe wond toe</Button>
            </div>

            <div className="table-container">
           <Button handleClick={addWoundPhoto}>Voeg foto toe</Button>
            <Table className="photo-table">
                {
                    woundExaminations.map((wound, index) => {
                       return <tr key={wound.examinationId}>
                                <td>{wound.photoDate}</td>
                                <td><img src={wound.file.url} alt={wound.id} /></td>
                                <td>{wound.nurseAssessment}</td>
            {/*                    <td>*/}
            {/*                        <WoundExamination*/}
            {/*                            onFormSubmit={onFormSubmit}*/}
            {/*                            // handleClick={click(index)}*/}
            {/*                            className="examine-container"*/}
            {/*                            name={wound.examinationId}*/}
            {/*                            date={wound.date}*/}
            {/*                            placeHolder={"Beoordeel wond"}/>*/}
            {/*                    </td>*/}
            {/*               <td></td>*/}
                       </tr>
                    })}
            </Table>

            </div>
    <div className="treatment-plan-container">
        <h2>Behandplan</h2>
        <p>{treatmentplan}</p>
    </div>

</Page>

    )
}

export default File;