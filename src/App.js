import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninSignupPage from './pages/signin-signup/signin-signup.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SigninSignupPage}/>
      </Switch>  
    </div>
  );
}

export default App;
