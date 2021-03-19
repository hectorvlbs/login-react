import React from 'react'

const Login = () => {

    const passLength = 6
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')

    const dataProcess = e => {
        e.preventDefault()
        if (!email.trim()) {
            console.log('ingrese email')
            return
        } else if (!pass.trim()) {
            console.log('Ingrese pass')
            return
        } else if (pass.length < passLength) {
            console.log(`pass need ${passLength} chars`)
            return
        } else {
            console.log(`email: ${email}, pass: ${pass}`)
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
