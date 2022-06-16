import React, {useEffect, useState} from "react";
import "./GetUsers.css";
import axios from "axios";
import Scrollbars from 'react-scrollbar'
import PersonTile from "../persontile/PersonTile";

function GetUsers ({name, children, scrollBarStyle}) {

const [users, setUsers] = useState([]);

useEffect( () => {
    async function fetchPatients(){
        try {
            const result = await axios.get("http://localhost:8080/patients")
            setUsers(result.data);
        }catch (e) {
            console.error(e)
        }
    }fetchPatients();
} , [])


    return (
        <section className="overview-page">
            <div className="overview-container">
                <h1>{name}</h1>
                <div className="scroll-content-container">
                <Scrollbars autoHide={false} style={scrollBarStyle} >
                    {users.map((user) => {
                        return  <PersonTile key={user.id} name={user.name} id={user.id} />
                    })}
                </Scrollbars>
                </div>
                {children}
            </div>
        </section>

    )
}
export default GetUsers;