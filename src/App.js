import React, { Component } from "react";
import "./App.css";
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';


class App extends Component {
  render() {
    return (
     <React.Fragment>
       <Navbar/>
       <Switch>
         <Route path="/" exact component={ProductList}/>
         <Route path="/products" component={Product}/>
         <Route path="/details" component={Details}/>
         <Route path="/cart" component={Cart}/>
         <Route component={Default}/>
       </Switch>
       <Modal/>
       
     </React.Fragment>
      
    );
  }
}

export default App;
