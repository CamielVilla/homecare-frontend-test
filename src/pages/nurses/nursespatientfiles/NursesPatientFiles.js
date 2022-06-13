import React from "react";
import "./NursesPatientFiles.css";
import Page from "../../../components/Page/Page";
import Form from "../../../components/Form/Form";
import ScrollContent from "../../../components/scrollcontent/ScrollContent";
import {NavLink} from "react-router-dom";

function NursesPatientFiles(){
    const scrollBarStyle = {
        border: '1px solid red',
        width: '500px',
        height: '800px'
    };
    return(
        <Page>
            <ScrollContent
            name="Patiënten-overzicht"
            scrollBarStyle={scrollBarStyle}
            >
            </ScrollContent>
        </Page>
    )
}
export default NursesPatientFiles;