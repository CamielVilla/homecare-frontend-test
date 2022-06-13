import React from "react";
import "./PatientFile.css";
import Page from "../Page/Page";
import Table from "../table/Table";

function PatientFile(){
    return(
        <Page>
            <h1>Foto overzicht</h1>
            <div className="table-container">
        <Table
        >
            <td>Schaafwond</td>
            <td>Linker knie</td>
            <td>15-15-2022</td>
        </Table>
            </div>
        </Page>
    )
}

export default PatientFile;