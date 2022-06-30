import React, {useContext} from "react";
import "./AdminHome.css";
import Page from "../../../components/Page/Page";
import {AuthContext} from "../../../Context/AuthContext";




function AdminHome(){
    const { user: { name }  } = useContext(AuthContext)
    return(

            <Page>
                <h1>Welkom {name} </h1>
            </Page>
    )
}

export default AdminHome;