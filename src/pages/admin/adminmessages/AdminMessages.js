import React from "react";
import "./AdminMessages.css"
import GetUsers from "../../../components/getfunctions/GetUsers";
import Page from "../../../components/Page/Page";

function AdminMessages (){
    const scrollBarStyle = {
        border: '1px solid red',
        width: '500px',
        height: '730px'
    };
    return (

        <Page>
        <GetUsers
            scrollBarStyle={scrollBarStyle}
        name="Berichten overzicht"
        ></GetUsers>
        </Page>
    )
}

export default AdminMessages;