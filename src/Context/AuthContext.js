import React, {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({})

function AuthContextProvider({children}){

const [auth, toggleAuth] = useState({
    isAuth: false,
    user: null
});
const history = useHistory();

useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token)
    if(token){
        async function getUserData(){
            const decodedToken = jwtDecode(token);
            try{
                const result = await axios.get(`http://localhost:8080/users/${decodedToken.jti}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                console.log(result)
                toggleAuth( {
                    isAuth: true,
                    user: {
                        email: result.data.email,
                        id: result.data.id,
                        role: result.data.role,
                    }
                })
            }catch (e){
                console.error(e)
            }
        }getUserData();
    }
}, [])



function logIn (token){
    const decodedToken = jwtDecode(token)
    localStorage.setItem('token', token);
    toggleAuth({
        isAuth: true,
        user: {
            id: decodedToken.jti,
            email: decodedToken.sub,
        }
    })
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
        logOut: logOut,
        logIn: logIn,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;