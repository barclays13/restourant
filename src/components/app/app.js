import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route,Switch, Redirect} from 'react-router-dom';


const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <Switch>
                <Route path='/menu' exact render={() => <MainPage/>}/>
                <Route path='/cart'render={() => <CartPage/>} />
                {/* <Redirect from='/' to='/menu'/> */}
            </Switch>   
        </div>
    )
}

export default App;