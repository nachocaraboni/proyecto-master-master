
import { useContext } from "react";
import { useState } from "react";
import { Custom } from "../Pages/Perfil/Custom"
import { LoginContext } from "./LoginContext";

export const Perfil =()=>{

    const {user} = useContext(LoginContext) 
    return(
            <div className="justify-content-start">
                <div>
                    <h1 className="text-black mt-3">Perfil</h1> 

                    <img src={user.img} alt={user.nombre} className="text-black my-5" />
                </div>   

                 <div className="d-flex flex-column align-items-start px-0 mx-0 mt-2">
                    <h4 className="text-black">Nombre del Usuario: {user.nombre}</h4>

                    <h4 className="text-black mt-4">Mail del Usuario: {user.email}</h4>
                </div>        
            </div>
        
    ) 
    
}
