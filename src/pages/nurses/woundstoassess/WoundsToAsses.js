import React, {useEffect, useState} from "react";
import "./WoundsToAssess.css";
import Page from "../../../components/Page/Page";
import Form from "../../../components/Form/Form";
import GetUsers from "../../../components/getfunctions/GetUsers";
import {NavLink} from "react-router-dom";
import axios from "axios";
import Table from "../../../components/table/Table";
import Button from "../../../components/Button/Button";

function WoundsToAsses(){
    const [wounds, setWounds] = useState([]);

    useEffect( () => {
        async function fetchPatients(){
            try {
                const result = await axios.get("http://localhost:8080/wounds/toassess")
                console.log(result.data)
                setWounds(result.data);
            }catch (e) {
                console.error(e)
            }
        }fetchPatients();
    } , [])


    const scrollBarStyle = {
        border: '1px solid red',
        width: '500px',
        height: '800px'
    };
    return(
        <Page>
            {wounds.length > 0 ?
                 <Table className="wounds-to-assess">
                    <tr>
                        <th>Naam</th>
                        <th>Geboorte datum</th>
                        <th>Wond</th>
                        <th></th>
                    </tr>
                     {wounds.map((wound) => {
                     return <tr key={wound.id}>
                                <td>{wound.patient.name}</td>
                         <td>{wound.patient.dateOfBirth}</td>
                         <td>{wound.woundName}</td>
                         <td><NavLink to={`/${wound.patient.id}`}>Naar patiënt</NavLink> </td>
                     </tr>
                     })}
                </Table>
            : <h2>Geen foto's om te beoordelen</h2>}


        </Page>
    )
}
export default WoundsToAsses;