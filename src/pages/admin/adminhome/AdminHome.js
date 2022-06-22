import React, {useContext} from "react";
import "./AdminHome.css";
import Page from "../../../components/Page/Page";
import {NavContext} from "../../../Context/NavContext";
import {AuthContext} from "../../../Context/AuthContext";




function AdminHome(){
    // const {setAdminNavBarFunction, navItems} = useContext(NavContext)
    const { user  } = useContext(AuthContext)
    console.log(user)
    return(

            <Page>
                {/*<h1>Welkom {user.id} </h1>*/}
                {/*<h2>{user.role}</h2>*/}
            </Page>
    )
}

export default AdminHome;