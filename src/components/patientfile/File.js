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



function File(){
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const [woundExaminations, setWoundExaminations] = useState([])
    const [examination, setExamination] = useState("")
    const [treatmentplan, setTreatmentplan] = useState("")
    const [woundId, setWoundId] = useState("2000")
    const [patientId, setPatientId] = useState("1002")
    const [wounds, setWounds] = useState([])
    const [wound, setWound] = useState("")

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
        async function fetchWoundData(){
            try {
                const result = await axios.get(`http://localhost:8080/wounds/${woundId}`)
                setWound(result.data)
                setWoundExaminations(result.data.woundExaminations)
            }catch (e) {
                console.error(e)
            }
        }fetchWoundData();
    } , [])


    useEffect( () => {
        async function fetchPatientWounds(){
            try {
                const result = await axios.get(`http://localhost:8080/patients/${patientId}/wounds`)
                console.log(result.data)
                setWounds(result.data)
            }catch (e) {
                console.error(e)
            }
        }fetchPatientWounds();
    } , [])



    return(
<Page>
            <h1>Dossier van {wound.patient.name}</h1>
            <div className="patient-wound-container">
                <AddWoundPhoto woundId={wound.id}/>
                <h2>Overzicht van wonden</h2>
                {wounds.map((wound) => {
                    return <div key={wound.id}><Button  buttonType="button" handleClick={() => {
                       setWoundExaminations(wound.woundExaminations); setWound(wound);}}
                   >
                       {wound.woundName + " " + wound.woundLocation }
                   </Button></div>
                 })}
                <Button buttonType="button" handleClick={addWound} >Voeg nieuwe wond toe</Button>
            </div>

            <div className="table-container">
                <h2> {wound.woundName + " " + wound.woundLocation }</h2>
           <Button handleClick={addWoundPhoto}>Voeg foto toe</Button>
            <Table className="photo-table">
                { woundExaminations &&
                    woundExaminations.map((wound, index) => {
                       return <tr key={wound.id}>
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
        <h2>Behandelplan</h2>
        <p>{wound.treatmentPlan}</p>
    </div>

</Page>

    )
}

export default File;