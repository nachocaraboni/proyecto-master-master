
import { useState } from "react";
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faCcAmex, faCcMastercard, faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const MetodoDePago = () => {
  
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

        <div className="container-fluid mx-auto mt-4 text-dark">
            <h2 >Metodo De Pago</h2>
                <FontAwesomeIcon icon={faCcMastercard} className='fa-lg mx-2'/>
                <FontAwesomeIcon icon={faCcVisa} className='fa-lg mx-2'/>
                <FontAwesomeIcon icon={faCcPaypal} className='fa-lg mx-2'/>
                <FontAwesomeIcon icon={faCcAmex} className='fa-lg mx-2'/>
      
            <form name="formulario" className="my-5 w-75 m-auto">
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-start">Nombre del titular</label>
                <div className="col-sm-10">
                  <input
                    name="nombredeltitular"
                    value={form.nombredeltitular}
                    type="text"
                    className="form-control"
                    placeholder="Ingrese el nombre del titular"
                    onChange={inputChangeHandle}
                  />
                </div>
                <div className="col-sm-2"></div>
                <h6 className="text-start fs-0,5rem text-muted col-sm-10">*Ingrese el nombre como aparece en la tarjeta</h6>
              </div>
      
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-start">Nro de tarjeta</label>
                <div className="col-sm-10">
                  <input
                    name="nrodetarjeta"
                    value={form.nrodetarjeta}
                    type="nrodetarjeta"
                    className="form-control"
                    placeholder="00000 0000 0000 0000"
                    onChange={inputChangeHandle}
                  />
               
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-start">
                  Código de seguridad
                  <FontAwesomeIcon icon={faCreditCard} className='mx-2'/>
                </label>
                <div className="col-sm-4">
                  <input
                    name="codseguridad"
                    value={form.codseguridad}
                    type="codseguridad"
                    className="form-control"
                    placeholder="***"
                    onChange={inputChangeHandle}
                  />                
                </div>
                <label className="col-sm-2 col-form-label text-start">Vencimiento</label>
                <div className="col-sm-4">
                  <input
                    name="vencimiento"
                    value={form.vencimiento}
                    type="vencimiento"
                    className="form-control"
                    placeholder="MM/AAAA"
                    onChange={inputChangeHandle}
                  />
                </div>
              </div>

              <Link
                to='/detallesdelacompra'
                key='detallesdelacompra'
              >
                <button 
                 className="btn btn-primary mx-5 my-3 w-40"
                > 
                  Volver 
                </button>
              </Link>
              <Link
                to='/productos'
                key='productos'
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