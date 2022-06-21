import React, {useContext} from "react";
import "./AdminHome.css";
import Page from "../../../components/Page/Page";
import {NavContext} from "../../../Context/NavContext";
import {AuthContext} from "../../../Context/AuthContext";




function AdminHome(){
    // const {setAdminNavBarFunction, navItems} = useContext(NavContext)
    const { user: { email} } = useContext(AuthContext)

    return(

            <Page>
                <h1>Welkom {email} </h1>
            </Page>
    )
}

export default AdminHome;