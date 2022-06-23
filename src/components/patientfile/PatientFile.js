import React, {useContext, useEffect, useState} from "react";
import "./PatientFile.css";
import Page from "../Page/Page";
import Table from "../table/Table";
import Button from "../Button/Button";
import axios from "axios";
import AddWoundPhoto from "../../pages/Wound/AddWoundPhoto";
import {AuthContext} from "../../Context/AuthContext";
import ScrollBar from "react-perfect-scrollbar";





function PatientFile({id}){

    const [woundExaminations, setWoundExaminations] = useState([])
    const [wounds, setWounds] = useState([])
    const [wound, setWound] = useState("")
    const [patient, setPatient] = useState("")
    const { user: { role }  } = useContext(AuthContext)


    useEffect( () => {
        const token = localStorage.getItem('token')
        async function fetchPatientWounds(){
            try {
                const result = await axios.get(`http://localhost:8080/patients/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })
                console.log(result.data)
                setPatient(result.data.name)
                setWounds(result.data.wounds)
                if (wounds.length === 1){
                    setWoundExaminations(result.data.wounds[0].woundExaminations)
                }

            }catch (e) {
                console.error(e)
            }
        }fetchPatientWounds();
    } , [])

    return(
<Page>
            <h1>Dossier van {patient}</h1>
    {!wound.woundName && <h2>Selecteer een wond</h2>}
            <div className="patient-wound-container">
                    {wounds && wounds.map((wound) => {
                        return <div key={wound.id}><Button  buttonType="button" handleClick={() => {
                       setWoundExaminations(wound.woundExaminations); setWound(wound);}}
                   >
                       {wound.woundName + " " + wound.woundLocation }
                   </Button>
                        </div>
                 })}
            </div>
    {wound.woundName &&
        <div className="optional-container">
            <div className="table-container">

                <h1> {wound.woundName + " " + wound.woundLocation }</h1>

                <div className="add-photo-container">
                <AddWoundPhoto woundId={wound.id}/>
                </div>
                <Table className="photo-table">
                    <tr>
                        <th>Datum</th>
                        <th>Foto</th>
                        <th>Beoordeling</th>
                    </tr>
                { woundExaminations &&
                    woundExaminations.map((woundExam, index) => {
                       return <tr key={woundExam.file.url}>
                                <td>{woundExam.photoDate}</td>
                                <td><img src={woundExam.file.url} alt={woundExam.id} /></td>
                           {role === 'PATIENT'
                               ?
                               <td>{woundExam.nurseAssessment}</td>
                               : <td>
                                   <button>Voeg beoordeling toe</button>
                               </td>
                           }
                       </tr>
                    })}
            </Table>

            </div>

    <div className="treatment-plan-container">
        <h2>Behandelplan</h2>
        <p>{wound.treatmentPlan}</p>
    </div>
        </div>
    }
</Page>
    )
}

export default PatientFile;