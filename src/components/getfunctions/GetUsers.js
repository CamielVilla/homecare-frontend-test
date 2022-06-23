import React, {useEffect, useState} from "react";
import "./GetUsers.css";
import axios from "axios";
import Scrollbars from 'react-scrollbar'
import Table from "../table/Table";
import {NavLink} from "react-router-dom";

function GetUsers ({name, toUser, userType, columnOne, columnTwo}) {

const [users, setUsers] = useState([]);
    const scrollBarStyle = {
        border: '1px solid red',
        width: '1200px',
        height: '400px'
    };


useEffect( () => {
    const token = localStorage.getItem('token');
    async function fetchPatients(){
        try {
            const result = await axios.get(`http://localhost:8080/admin/${userType}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            setUsers(result.data);
        }catch (e) {
            console.error(e)
        }
    }fetchPatients();
} , [])


    return (
        <div className="user-container">
                <h1>{name}</h1>
                <div className="scroll-content-container">

                <Scrollbars autoHide={false} style={scrollBarStyle} >
                    <Table>
                        <tr>
                            <th>{columnOne}</th>
                            <th>{columnTwo}</th>
                            <th></th>
                        </tr>
                    {users.map((user) => {
                        return <tr key={user.id}>
                            <td>{user.name}</td>
                            {user.role == "PATIENT"
                                ?<td>{user.dateOfBirth}</td>
                                : <td>{user.email}</td>
                            }
                            <td><NavLink to={`/${user.id}`}>{toUser}</NavLink></td>
                        </tr>
                    })}
                    </Table>
                </Scrollbars>
                </div>
                </div>

    )
}
export default GetUsers;