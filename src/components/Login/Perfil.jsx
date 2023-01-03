
import { useContext } from "react";
import { useState } from "react";
import { Custom } from "../Pages/Perfil/Custom"
import { LoginContext } from "./LoginContext";

export const Perfil =()=>{

    const {user} = useContext(LoginContext) 
    return(
            <div className="d-flex flex-column">
            <h1 className="text-white">Perfil</h1> 

                <img src={user.img} alt={user.nombre} className="text-white" />   

                 <div className="d-flex align-items-start flex-column mx-0 ">
                    <h4 className="text-white">Nombre del Usuario:{user.nombre}</h4>

                    <h4 className="text-white">Mail del Usuario:{user.email}</h4>
                </div>        
            </div>
        
    ) 
    
}
