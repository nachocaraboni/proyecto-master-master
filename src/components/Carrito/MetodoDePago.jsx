
import { useState } from "react";
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

        <div className="container-fluid mx-auto mt-5 pt-5 text-dark">
            <h2 >Metodo De Pago</h2>
      
            <form name="formulario" className="my-5 w-75 m-auto">
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-start">Nombre</label>
                <div className="col-sm-10">
                  <input
                    name="nombre"
                    value={form.nombre}
                    type="text"
                    className="form-control"
                    placeholder="Ingrese el nombre"
                    onChange={inputChangeHandle}
                  />
                </div>
                <h10 className="text-start text-muted">*Ingrese el nombre como aparece en la tarjeta</h10>
              </div>
      
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label text-start">Nro de tarjeta</label>
                <div className="col-sm-10">
                  <input
                    name="nrodetarjeta"
                    value={form.nrodetarjeta}
                    type="nrodetarjeta"
                    className="form-control"
                    placeholder="Ingrese el su Nro de tarjeta"
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
                <FontAwesomeIcon icon={faCreditCard} />
                <FontAwesomeIcon icon={faCcMastercard} />
                <FontAwesomeIcon icon={faCcVisa} />
              </div>
              <button className="btn btn-primary my-3 w-30" onClick={handleClick}>
                Pagar
              </button>
        </form>
      </div>



    )
}