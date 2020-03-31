import React from 'react';
import {HashRouter,Route,Switch, Redirect} from 'react-router-dom'
import App from './App';
import Login from './components/Login/index';
import Buttons from './components/Buttons/index';
import Admin from './Admin.js'
import Home from './pages/Home/index'
import NoMatch from './components/NoMatch/index';
import store from './store/index';

export default class  Router extends React.Component {

    render() {
        return (
            <HashRouter >
                <App appstore={store}>
                    <Redirect to={{pathname:'/admin/home'}} />
                    <Route path='/login' component={Login} />
                    <Route path='/admin' render={()=>
                        <Admin>
                            <Switch>
                                <Route  path='/admin/home' component={Home} />
                                <Route  path='/admin/ui/buttons' component={Buttons} />
                                <Route  component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />
                </App>
            </HashRouter>
        )
        
       
    }
}