import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import {store, history} from '../store'
import { Main } from '../layouts'
import Apps from '../views/Apps'
import Home  from '../views/Home'

const Router = () => {
    return(
        <Provider store={ store } >
            <ConnectedRouter history={history}>
                <Main>
                    <Route exact path='/' component={Home} />
                    <Route path='/apps' component={ Apps } />
                </Main>
            </ConnectedRouter>
        </Provider>
    )
}

export default Router