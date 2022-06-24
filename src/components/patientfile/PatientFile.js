import React, {useContext, useEffect, useState} from "react";
import "./PatientFile.css";
import Page from "../Page/Page";
import Table from "../table/Table";
import Button from "../Button/Button";
import axios from "axios";
import AddWoundPhoto from "../../pages/Wound/AddWoundPhoto";
import {AuthContext} from "../../Context/AuthContext";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";






function PatientFile({id}){

    const [woundExaminations, setWoundExaminations] = useState([])
    const [wounds, setWounds] = useState([])
    const [wound, setWound] = useState("")
    const [patient, setPatient] = useState("")
    const { user: { role }  } = useContext(AuthContext)
    const history = useHistory();
    const { register, handleSubmit, formState: { errors} } = useForm();
    const [assessment, setAssessment] = useState();
    const token = localStorage.getItem('token')

    useEffect( () => {
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


                if (wounds.length >= 0){
                    setWoundExaminations(result.data.wounds[0].woundExaminations);
                    setWounds(result.data.wounds);
                    setWound(result.data.wounds[0]);
                }

            }catch (e) {
                console.error(e)
            }
        }fetchPatientWounds();
    } , [])


        async function addAssessment(id){

            try{
                const result = await axios.put(`http://localhost:8080/woundexaminations/${id}/assessment`, {
                    nurseAssessment: assessment,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })
                console.log(result)
            }catch (e){
                console.error(e)
            }
        }

        function handleClick(){
        setWound(wound)
        }



    return(
        <>
            <div className="patient-nav">
                <div className="patient-nav-container">
                    {wounds && wounds.map((wound) => {
                        return <div key={wound.id}><Button  buttonType="button" handleClick={() => {
                            setWoundExaminations(wound.woundExaminations); setWound(wound);}}
                        >
                            {wound.woundName + " " + wound.woundLocation }
                        </Button>
                        </div>
                    })}
                    {role != "PATIENT" &&
                        <button className="add-wound-button" onClick={() => history.push(`/nieuwe-wond/${id}`)}>Voeg wond toe</button>
                    }

                </div>
            </div>


<Page>
       <h1>Dossier van {patient}</h1>
            <div className="table-container">
                {wound.woundName &&
                <div className="add-photo-container">
                <h1> {wound.woundName + " " + wound.woundLocation }</h1>
                    {role === "PATIENT" &&
                        <AddWoundPhoto woundId={wound.id}  handleClick={handleClick}/>
                    }
                </div>
                }

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
                           {role === 'PATIENT' || role === "ADMIN"
                               &&
                               <td>{woundExam.nurseAssessment}</td>
                           }
                           {!woundExam.nurseAssessment && role != 'PATIENT' ?
                               <td>
                                   <form>
                                       <label htmlFor="nurse-assessment">
                                       <textarea
                                           id="nurse-assessment"
                                           name="nurse-assessment-field"
                                           cols={40}
                                           rows={10}
                                           onChange={(e) => setAssessment(e.target.value)}
                                       >
                                       </textarea>
                                       </label>
                                       <Button buttonType="submit" handleClick={(e) => {e.preventDefault(); addAssessment(woundExam.id)}}>Voeg beoordeling toe</Button>
                                   </form>
                               </td>
                               :<td>{woundExam.nurseAssessment}</td>
                           }
                       </tr>
                    })}
            </Table>
                </div>
    {wound.woundName &&
    <div className="treatment-plan-container">
        <h2>Behandelplan</h2>
        <p>{wound.treatmentPlan}</p>
    </div>
    }
</Page>
        </>
    )
}

export default PatientFile;