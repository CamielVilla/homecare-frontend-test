import React, {useEffect, useState} from "react";
import "./AdminNurses.css";
import axios from "axios";
import Scrollbars from 'react-scrollbar'


function AdminNurses () {
    const scrollBarStyle = {
        border: '1px solid red',
        width: '500px',
        height: '400px',
    };
    const itemElements = [];
    for (let i = 0; i < 20; i++) {
        itemElements.push(<div className="item" key={i}>item {i}</div>);
    }
const [patient, setPatient] = useState("");

useEffect( () => {
    async function fetchPatients(){
        try {
            const result = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
            console.log(result.data);
            setPatient(result.data);
        }catch (e) {
            console.error(e)
        }
    }fetchPatients();
} , [])


    return (
        <section className="admin-nurses-page">
            <div className="admin-nurses-container">
                <h1>zorgverleners overzicht</h1>
                <Scrollbars autoHide={false} style={scrollBarStyle} >
                <div className= "nurses-container">
                    <div className="nurse-tile">
                    <h2>{patient.name}</h2>
                    <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>
                    <div className="patient-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>
                    <div className="patient-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>

                    <div className="patient-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>
                    <div className="nurse-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>
                    <div className="patient-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>
                    <div className="patient-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>

                    <div className="patient-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>
                    <div className="nurse-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>
                    <div className="patient-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>
                    <div className="patient-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>

                    <div className="patient-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>
                    <div className="nurse-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>
                    <div className="patient-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>
                    <div className="patient-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>

                    <div className="patient-tile">
                        <h2>{patient.name}</h2>
                        <h2>{patient.name + "@homecare.nl"}</h2>
                    </div>
                </div>
                </Scrollbars>
            </div>
        </section>

    )
}
export default AdminNurses;