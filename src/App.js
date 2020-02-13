import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom'

//Switch ensures only one page is going to be shown the first matches the path
//exact cause the path to exactly match
//if switch or exact not use it is going to render the matching pages at same time
// /  and /hats will be renderd at same page

const Hatspage = () =>(
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
      <div>
        <Route exact path='/' component={HomePage} />
        <Route  path='/hats' component={Hatspage} />
      </div>
  )
}

export default App;
