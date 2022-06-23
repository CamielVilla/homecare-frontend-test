import React, {useContext} from "react";
import "./AdminHome.css";
import Page from "../../../components/Page/Page";
import {AuthContext} from "../../../Context/AuthContext";




function AdminHome(){
    // const {setAdminNavBarFunction, navItems} = useContext(NavContext)
    const { user: { name }  } = useContext(AuthContext)
    // console.log(user)
    return(

            <Page>
                <h1>Welkom {name} </h1>
            </Page>
    )
}

export default AdminHome;