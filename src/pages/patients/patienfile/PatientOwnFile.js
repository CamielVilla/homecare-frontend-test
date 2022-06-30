import React, {useContext} from "react";
import Page from "../../../components/Page/Page";
import PatientFile from "../../../components/patientfile/PatientFile";
import {AuthContext} from "../../../Context/AuthContext";


function PatientOwnFile(){
    const { user: { id }  } = useContext(AuthContext)
    return(
        <Page>
            <PatientFile id={id}
            />
        </Page>
    )
}

export default PatientOwnFile;