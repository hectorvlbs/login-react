import React from 'react'

const Login = () => {

    const passLength = 6
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)

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
        } else {
            setError(null)
        }
    }

    return (
        <div className="mt-5">
            <h3 className="text-center">Acceso o registro</h3>
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
                        <button className="btn btn-dark btn-lg btn-block">
                            Registrarse
                        </button>
                        {
                            error && (
                                <div className="alert alert-danger mt-3 text-center">
                                    {error}
                                </div>
                            )
                        }
                        <button className="btn btn-info btn-sn btn-block">
                            ¿Ya tienes cuenta?
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
