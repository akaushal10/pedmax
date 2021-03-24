import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './Home'
import Sports from './Sports'
const UnauthRoutes = ()=>{
    return(
        <>
            <Switch>
            <Route path="/sports" component={Sports} />
            <Route path="/" component={Home} />
            </Switch>
        </>
    )
}
export default UnauthRoutes;