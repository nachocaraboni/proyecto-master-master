import { useContext, useState } from "react";
import { commonLogin, signInWithGoogle } from "../../firebase/providers/providers";
import { LoginContext } from "./LoginContext";
import { Register } from "./Register";
import styles from "./Login.module.css"


export const Login =()=>{

    const {waiting, firebaseLogin, wait, error, register, signup} = useContext(LoginContext)
    const[form, setForm] = useState({name:'',pass:''})

    function checkForm(e) {
        e.preventDefault()
        wait();
        const user= commonLogin(form.name, form.pass, error)
        firebaseLogin(user)
    }

    async function googleSignIn(e){
        e.preventDefault()
        wait()
        const user = await signInWithGoogle(error)
        firebaseLogin(user)
    }

    function handleInputChange(e){
        const {name, value} = e.target
        setForm({...form,[name]:value})
    
    }

   
 

    return register
    ?<Register 
        signup={signup}
        waiting = {waiting}
        firebaseLogin ={firebaseLogin}
        error = {error}
        //handleInputChange={handleInputChange}
    />
    : (
        <form name='login' className= {`mt-3 px-5 pb-4 ${styles.fondoNaranja}`}>
            <h1 className="my-5 text-white">Login</h1>
            <div className="form-floating mb-3">
                <input 
                    name="name"
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    onChange={ handleInputChange }
                />
                <label htmlFor="floatingInput">Usuario</label>
            </div>

            <div className="form-floating">
                <input 
                    name="pass"
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    onChange={ handleInputChange }
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            
            <div className="container mt-4">
                <button
                    disabled={waiting}
                    className="row w-100 btn btn-primary my-1"
                    onClick={checkForm}
                >
                    Login
                </button>

                <button
                    disabled={waiting}
                    className="row w-100 btn btn-primary my-1"
                    onClick={googleSignIn}
                >
                    Login con cuenta Google
                </button>

                <button
                    className="btn btn-light w-100 link-secondary my-4"
                    onClick={ signup }
                >
                    Registrarse
                </button>
            </div>

            
        </form>
    )
    
}