import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route,Switch} from 'react-router-dom';
// import ErrorBoundry from '../error-boundry/';
import Error from '../error/';

const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <Switch>
                <Route path='/menu' render={() => <MainPage/>}/>
                <Route path='/cart' render={() => <CartPage/>} />
                <Route render={() => <Error/>}/> 
                <Route component={Error}/> 
                {/* <Redirect from='/' to='/menu'/> */}
            </Switch>   
        </div>
    )
}

export default App; 