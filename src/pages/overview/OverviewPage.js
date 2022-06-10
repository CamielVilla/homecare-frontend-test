import React, {useEffect, useState} from "react";
import "./OverviewPage.css";
import axios from "axios";
import Scrollbars from 'react-scrollbar'
import PersonTile from "../../components/persontile/PersonTile";

function OverviewPage ({name}) {
    const scrollBarStyle = {
        border: '1px solid red',
        width: '500px',
        height: '400px',
    };
const [person, setPerson] = useState("");

useEffect( () => {
    async function fetchPatients(){
        try {
            const result = await axios.get("https://pokeapi.co/api/v2/pokemon/")
            console.log(result.data);
            setPerson(result.data);
        }catch (e) {
            console.error(e)
        }
    }fetchPatients();
} , [])


    return (
        <section className="overview-page">
            <div className="overview-container">
                <h1>{name}</h1>
                <Scrollbars autoHide={false} style={scrollBarStyle} >
                    {person.results && person.results.map((person) => {
                        return <PersonTile name={person.name} />
                    })}
                </Scrollbars>
            </div>
        </section>

    )
}
export default OverviewPage;