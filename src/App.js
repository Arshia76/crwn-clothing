import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom'
import ShopPage from '../src/pages/shop/shop.component';

//Switch ensures only one page is going to be shown the first matches the path
//exact cause the path to exactly match
//if switch or exact not use it is going to render the matching pages at same time
// /  and /hats will be renderd at same page



function App() {
  return (
      <div>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        </Switch>
      </div>
  )
}

export default App;
