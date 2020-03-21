import React from 'react';
import {Switch ,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './components/shop/Shop';



function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      {/* <HomePage />  */}
      </Switch>
    </div> 
  );
}

export default App;
