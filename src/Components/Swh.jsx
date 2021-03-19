import React from 'react'
import {
    Switch,
    Route
  } from 'react-router-dom'
import Login from './Login'

const Swh = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    home...    
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/admin">
                    admin...
                </Route>
            </Switch>
        </div>
    )
}

export default Swh
