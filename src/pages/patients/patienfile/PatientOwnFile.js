import React, {useContext} from "react";
import Page from "../../../components/Page/Page";
import PatientFile from "../../../components/patientfile/PatientFile";
import {useParams} from "react-router-dom";
import {AuthContext} from "../../../Context/AuthContext";


function PatientOwnFile(){
    const { user: { id }  } = useContext(AuthContext)
    console.log(id)
    return(
        <Page>
            <PatientFile id={id}
            />
        </Page>
    )
}

export default PatientOwnFile;