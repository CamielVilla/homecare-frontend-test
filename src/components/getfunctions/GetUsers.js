import React, {useEffect, useState} from "react";
import "./GetUsers.css";
import axios from "axios";
import Table from "../table/Table";
import {NavLink} from "react-router-dom";

function GetUsers ({name, toUser, userType, columnOne, columnTwo, columnThree}) {

const [users, setUsers] = useState([]);


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
                    <Table className="user-table">
                        <tr>
                            <th>{columnOne}</th>
                            <th>{columnTwo}</th>
                            <th>{columnThree}</th>
                        </tr>
                    {users.map((user) => {
                        return <tr key={user.id}>
                            <td>{user.name}</td>
                            {user.role == "PATIENT"
                                ?<td>{user.dateOfBirth}</td>
                                : <td>{user.email}</td>
                            }
                            {user.role === "PATIENT"
                                ? <td><NavLink to={`/${user.id}`}>{toUser}</NavLink></td>
                                : <td>{user.bigNumber}</td>
                            }
                        </tr>
                    })}
                    </Table>
                </div>
                </div>

    )
}
export default GetUsers;