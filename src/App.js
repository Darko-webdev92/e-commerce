import React from 'react';
import {Switch ,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './components/shop/Shop';
import Header from './components/header/Header';


function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      {/* <HomePage />  */}
      </Switch>
    </div> 
  );
}

export default App;
