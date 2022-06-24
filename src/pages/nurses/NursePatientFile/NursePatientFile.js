import React, {useContext} from "react";
import Page from "../../../components/Page/Page";
import PatientFile from "../../../components/patientfile/PatientFile";
import {useParams} from "react-router-dom";
import AddWound from "../../Wound/AddWound";


function NursePatientFile(){
let { id } = useParams();
    return(
        <Page>
            <PatientFile id={id}
            />
        </Page>
    )
}

export default NursePatientFile;