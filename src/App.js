import React from 'react';
import Home from './components/home/Home';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/Header';
// css
import './App.css';
import Details from './components/products/single product/Details';
import Checkout from './components/checkout/Checkout';
import Subtotal from './components/cart/subtotal/Subtotal';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/product/:id" component={Details} />

        <Route exact path="/cart" component={Subtotal} />
        <Route exact path="/checkout" component={Checkout} />
        {/* home */}
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
