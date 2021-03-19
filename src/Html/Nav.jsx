import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Link,
    NavLink
} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">JesHec</Link>
            <div>
                <div className="d-flex">
                    <NavLink className="btn btn-dark mr-2" to="/" exact>
                        Inicio
                    </NavLink>
                    <NavLink className="btn btn-dark mr-2" to="/login" exact>
                        Login
                    </NavLink>
                    <NavLink className="btn btn-dark mr-2" to="/admin" exact>
                        Admin
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Nav
