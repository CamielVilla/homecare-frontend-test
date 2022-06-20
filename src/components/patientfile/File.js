import React, {useEffect, useState} from "react";
import "./File.css";
import Page from "../Page/Page";
import Table from "../table/Table";
import Button from "../Button/Button";
import RadioInput from "../Form/RadioInput";
import { useForm } from "react-hook-form";
import WoundExamination from "../woundExamination/WoundExamination";
import {NavLink, useHistory} from "react-router-dom";
import axios from "axios";
import Nav from "../Nav/Nav";
import AddWoundPhoto from "../../pages/Wound/AddWoundPhoto";
import Form from "../Form/Form";



function File(){
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const [woundExaminations, setWoundExaminations] = useState([])
    const [examination, setExamination] = useState("")
    const [woundId, setWoundId] = useState("2000")
    const [patientId, setPatientId] = useState("1002")
    const [wounds, setWounds] = useState([])
    const [wound, setWound] = useState("")
    const [name, setName] = useState("");

    useEffect( () => {
        async function fetchPatientWounds(){
            try {
                const result = await axios.get(`http://localhost:8080/patients/${patientId}`)
                console.log(result.data)
                setWounds(result.data.wounds)
                setWound(result.data.wounds[0])
                setWoundExaminations(result.data.wounds[0].woundExaminations)
                setName(result.data.name)
            }catch (e) {
                console.error(e)
            }
        }fetchPatientWounds();
    } , [])

    return(
<Page>
            <h1>Dossier van {name}</h1>
            <h2>Overzicht van uw wonden</h2>
            <div className="patient-wound-container">
                    {wounds.map((wound) => {
                        return <div key={wound.id}><Button  buttonType="button" handleClick={() => {
                       setWoundExaminations(wound.woundExaminations); setWound(wound);}}
                   >
                       {wound.woundName + " " + wound.woundLocation }
                   </Button>
                        </div>
                 })}
            </div>

            <div className="table-container">
                <h1> {wound.woundName + " " + wound.woundLocation }</h1>
                <div className="add-photo-container">
                <AddWoundPhoto woundId={wound.id}/>
                </div>
                <Table className="photo-table">
                { woundExaminations &&
                    woundExaminations.map((woundExam, index) => {
                       return <tr key={woundExam.id}>
                                <td>{woundExam.photoDate}</td>
                                <td><img src={woundExam.file.url} alt={woundExam.id} /></td>
                                <td>{woundExam.nurseAssessment}</td>
                       </tr>
                    })}
            </Table>

            </div>
    <div className="treatment-plan-container">
        <h2>Behandelplan</h2>
        <p>{wound.treatmentPlan}</p>
    </div>
</Page>
    )
}

export default File;