import React from "react";
import "./AdminMessages.css"
import ScrollContent from "../../../components/scrollcontent/ScrollContent";
import Page from "../../../components/Page/Page";

function AdminMessages (){
    const scrollBarStyle = {
        border: '1px solid red',
        width: '500px',
        height: '730px'
    };
    return (

        <Page>
        <ScrollContent
            scrollBarStyle={scrollBarStyle}
        name="Berichten overzicht"
        ></ScrollContent>
        </Page>
    )
}

export default AdminMessages;