import React from "react";
import gif from "./../../../assets/Img/cargando5.gif"
import { useFetch } from "../../../hooks";
import { Carrousel } from "./Carrousel";

import { ItemListContainer } from "../Home/ItemsList/ItemsListContainer";


export const CarrouselContainer = () => {
  const { datos, loading } = useFetch();
  const datosDestacados = datos.filter((dato)=>dato.destacado)
  console.log(datosDestacados)

  return (
<div className={`d-flex flex-column align-items-center m-0 w-100 mt-0 p-0`}>
    
    
      {loading ? (
        <img height="500" width="500" src={gif} alf={gif} />
      ) : (
        <>
        <Carrousel  datosDestacados={datosDestacados} />
        <ItemListContainer/>
        </>
       
        
      )}
      </div>)
};
