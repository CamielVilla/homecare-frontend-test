import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({})

function AuthContextProvider({children}){

const [auth, toggleAuth] = useState({
    isAuth: false,
    user: null
});
const history = useHistory();


function logIn (token){
    console.log("huts")
    const decodedToken = jwtDecode(token);
    console.log(decodedToken)
    localStorage.setItem("token", token)
    toggleAuth({
        isAuth: true,
        user: {
            name: null,
            email: decodedToken.sub,
        }
    })
    console.log("logged in")
    history.push("/admin")
}

    function logOut () {
        toggleAuth({
            isAuth: false,
            user: null,
        })
        history.push("/home")
        console.log("logged out")
    }
    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        logOutFunction: logOut,
        logInFunction: logIn,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;