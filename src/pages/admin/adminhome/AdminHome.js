import React, {useContext} from "react";
import "./AdminHome.css";
import Page from "../../../components/Page/Page";
import {NavContext} from "../../../components/Context/NavContext";



function AdminHome(){
    // const {setAdminNavBarFunction, navItems} = useContext(NavContext)


    return(

            <Page>
                <h1>Welkom admin</h1>
            </Page>
    )
}

export default AdminHome;