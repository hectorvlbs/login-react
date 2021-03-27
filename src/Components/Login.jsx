import React from 'react'
import {auth} from '../Firebase/Firebase'

const Login = () => {

    const passLength = 6
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [signup, setSingup] = React.useState(true)

    const dataProcess = e => {
        e.preventDefault()
        if (!email.trim()) {
            setError('Ingrese email valido.')
            return
        } else if (!pass.trim()) {
            setError('Ingrese la contraseña.')
            return
        } else if (pass.length < passLength) {
            setError('La contraseña debe contener por lo menos 6 carácteres.')
            return
        } 
        console.log('Correcto...')
        setError(null)

        if (signup) {
            new_register()
        }
    }

    const new_register = React.useCallback(async() =>{
        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(res)
        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                setError('Email no valido.')
            }
        }
    }, [email, pass])

    return (
        <div className="mt-5">
            <h3 className="text-center">
                {
                    signup ? 'Registro' : 'Acceder'
                }
            </h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={dataProcess}>
                        <input
                            type="email"
                            className="form-control mb-2"
                            placeholder="Ingrese su email."
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <input
                            type="password"
                            className="form-control mb-2"
                            placeholder="Ingrese la contraseña."
                            onChange={e => setPass(e.target.value)}
                            value={pass}
                        />
                        <button 
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"    
                        >
                            {
                                signup ? 'Registrase' : 'Acceder'
                            }
                        </button>
                        {
                            error && (
                                <div className="alert alert-danger mt-3 text-center">
                                    {error}
                                </div>
                            )
                        }
                        <button
                            className="btn btn-info btn-sn btn-block"
                            onClick={() => setSingup(!signup)}
                            type="button"
                        >
                            {
                                signup ? '¿Ya estás registrado?' : '¿No tienes cuenta?'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
