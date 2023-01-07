
import { useState } from "react";
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
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

        <div className="container-fluid mx-auto mt-5 pt-5 text-dark">
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
                <div className="col-sm-10">
                  <input
                    name="provincia"
                    value={form.provincia}
                    type="provincia"
                    className="form-control"
                    placeholder="Provincia"
                    onChange={inputChangeHandle}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-start">Localidad</label>
                <div className="col-sm-10">
                  <input
                    name="Localidad"
                    value={form.Localidad}
                    type="Localidad"
                    className="form-control"
                    placeholder="Localidad"
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

               <Link
                to='/metododepago'
                key='metododepago'
              >
                <button 
                  className="shadow fw-bold fs-5 w-100 btn btn-primary"
                > 
                  Pagar 
                </button>

              </Link>
        </form>
      </div>



    )
}