import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc/';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    console.log(RestoService.getMenuItems());
    return (
        <Router>
                <Route path='/'  component={() => <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app"></div>}/>
                <AppHeader total={50}/>
                <Route path='/menu' component={MainPage}/>
                <Route path='/cart' component={CartPage}/>

        </Router>
    )
}

export default WithRestoService()(App);