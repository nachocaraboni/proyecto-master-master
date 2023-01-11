
import { useState } from "react";
import { faCreditCard, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const DetallesDeLaCompra = () => {
  
  const initialState = { nombre: "", email: "", texto: "" };

  const [form, setForm] = useState(initialState);

  const inputChangeHandle = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(form);
  };

    return(

        <div className="container-fluid mx-auto mt-4 pt-0 text-dark">
            <h2 >Detalles de la compra</h2>
      
            <form name="formulario" className="my-5 w-75 m-auto">
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-start">Nombre</label>
                <div className="col-sm-10">
                  <input
                    name="nombre"
                    value={form.nombre}
                    type="text"
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    onChange={inputChangeHandle}
                  />
                </div>
              </div>
      
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-start">Email</label>
                <div className="col-sm-10">
                  <input
                    name="email"
                    value={form.email}
                    type="email"
                    className="form-control"
                    placeholder="Ingrese su email"
                    onChange={inputChangeHandle}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-start"> Provincia </label>
                  <select className="col-sm-10" placeholder="Ingrese su Provincia" name="provincia" onChange={inputChangeHandle}>
                    <option value="">Buenos Aires</option>
                    <option value="">Ciudad Autónoma de Buenos Aires</option>
                    <option value="">Catamarca</option>
                    <option value="">Chaco</option>
                    <option value="">Chubut</option>
                    <option value="">Córdoba</option>
                    <option value="">Corrientes</option>
                    <option value="">Entre Ríos</option>
                    <option value="">Formosa</option>
                    <option value="">Jujuy</option>
                    <option value="">La Pampa</option>
                    <option value="">La Rioja</option>
                    <option value="">Mendoza</option>
                    <option value="">Misiones</option>
                    <option value="">Neuquén</option>
                    <option value="">Río Negro</option>
                    <option value="">Salta</option>
                    <option value="">San Juan </option>
                    <option value="">San Luis</option>
                    <option value="">Santa Cruz</option>
                    <option value="">Santa Fe</option>
                    <option value="">Santiago del Estero</option>
                    <option value="">Tierra del Fuego</option>
                    <option value="">Tucumán</option>                
                  </select>                  
               
              </div>

             

              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-start">Localidad</label>
                <div className="col-sm-4">
                  <input
                    name="Localidad"
                    value={form.Localidad}
                    type="Localidad"
                    className="form-control"
                    placeholder="Localidad"
                    onChange={inputChangeHandle}
                  />
                </div>
                <label className="col-sm-2 col-form-label text-start">Direccion</label>
                <div className="col-sm-4">
                  <input
                    name="Direccion"
                    value={form.Direccion}
                    type="Direccion"
                    className="form-control"
                    placeholder="Direccion"
                    onChange={inputChangeHandle}
                  />
                </div>              
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-start">Piso</label>
                <div className="col-sm-4">
                  <input
                    name="Piso"
                    value={form.Piso}
                    type="Piso"
                    className="form-control"
                    placeholder="Piso"
                    onChange={inputChangeHandle}
                  />
                </div>
                <label className="col-sm-2 col-form-label text-start">Depto</label>
                <div className="col-sm-4">
                  <input
                    name="Depto"
                    value={form.Depto}
                    type="Depto"
                    className="form-control"
                    placeholder="Depto"
                    onChange={inputChangeHandle}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-start"> Codigo Postal</label>
                <div className="col-sm-10">
                  <input
                    name="codigopostal"
                    value={form.codigopostal}
                    type="codigopostal"
                    className="form-control"
                    placeholder="Codigo Postal"
                    onChange={inputChangeHandle}
                  />
                </div>
              </div>
      
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-start">Aclaracion</label>
                <div className="col-sm-10">
                  <textarea
                    name="texto"
                    value={form.texto}
                    className="form-control"
                    placeholder="Ingrese su mensaje"
                    rows={3}
                    onChange={inputChangeHandle}
                  />
                </div>
              </div>
              <div className="my-2 mt-4">  
                <input type="radio" name = 'metododepago' value = 'efectivo' className='mx-2'/><FontAwesomeIcon icon={faHandHoldingDollar} className='mx-2' />Efectivo
                <input type="radio"  name ='metododepago' value ='tarjeta' className='mx-2 ms-5' /><FontAwesomeIcon icon={faCreditCard} className='mx-2' />Tarjeta
              </div>
{/*
              <Link
                to='/productos'
                key='productos'
              >
                <button 
                  className="btn btn-primary mx-5 my-3 w-40"
                > 
                  <FontAwesomeIcon icon={faHandHoldingDollar} className='mx-2' />
                  Efectivo 
                </button>
              </Link>
              <Link
                to='/metododepago'
                key='metododepago'
              >
                <button 
                  className="btn btn-primary mx-5 my-3 w-40"
                >
                  <FontAwesomeIcon icon={faCreditCard} className='mx-2'/>  
                  Tarjeta 
                </button>
    </Link>*/}

              <Link
                to='/carrito'
                key='carrito'
              >
                <button 
                  className="btn btn-primary mx-5 my-3 w-40"
                > 
                  Volver 
                </button>
              </Link> 
              <Link
                to='/metododepago'
                key='metododepago'
              >
                <button 
                  className="btn btn-primary mx-5 my-3 w-40"
                > 
                  Pagar 
                </button>
              </Link>
              
        </form>
      </div>



    )
}