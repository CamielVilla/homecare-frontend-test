import React from "react";
import "./NursesPatientFiles.css";
import Page from "../../../components/Page/Page";
import Form from "../../../components/Form/Form";
import GetUsers from "../../../components/getfunctions/GetUsers";
import {NavLink} from "react-router-dom";

function NursesPatientFiles(){
    const scrollBarStyle = {
        border: '1px solid red',
        width: '500px',
        height: '800px'
    };
    return(
        <Page>
            <GetUsers
            name="Patiënten-overzicht"
            scrollBarStyle={scrollBarStyle}
            >
            </GetUsers>
        </Page>
    )
}
export default NursesPatientFiles;