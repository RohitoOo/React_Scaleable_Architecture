import React from 'react'
import Test from './containers/Test'
import {Route, Switch} from 'react-router-dom'

const Router = () => 
(
    <div>
        <Switch>
            <Route exact path = '/' component={Test} />
        </Switch>
    </div>
)

export default Router;