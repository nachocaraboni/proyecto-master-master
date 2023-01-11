import { useContext } from "react";
import { useState } from "react";
import { Custom } from "../Pages/Perfil/Custom"
import { LoginContext } from "./LoginContext";
import styles from "./Login.module.css"

export const Perfil =()=>{

    const {user} = useContext(LoginContext) 
    return(
            <div className={` mt-4 p-3 justify-content-start ${styles.fondoNaranja}`}>
                <div>
                    <h1 className="text-white">Perfil</h1> 

                    <img src={user.img} alt={user.nombre} className="text-white my-5" />
                </div>   

                 <div className="d-flex flex-column align-items-start px-0 mx-0 mt-2">
                    <h4 className="text-white">Nombre del Usuario: {user.nombre}</h4>

                    <h4 className="text-white mt-4">Mail del Usuario: {user.email}</h4>
                </div>        
            </div>
        
    ) 
    
}
