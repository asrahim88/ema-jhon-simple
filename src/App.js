import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";

import './App.css';
import Header from './Components/Header/Header';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import NotMatch from './Components/NotMatch/NotMatch';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Review from './Components/Review/Review';
import Shop from './Components/Shop/Shop';



function App() {
  return (
    <div >
    <Header></Header>
    <Router>
    
    <Switch>
    <Route path= '/Shop'>
    <Shop></Shop>
    </Route>
    <Route path= '/OrderReview'>
    <Review></Review>
    </Route>
    <Route path = "/inventory">
    <ManageInventory></ManageInventory>
    </Route>
    <Route exact path = "/">
    <Shop></Shop>
    </Route>
    <Route path = "/product/:ProductKey">
    <ProductDetails></ProductDetails>
    </Route>
    <Route path = '*'>
    <NotMatch></NotMatch>
    </Route>
    </Switch>
    </Router>
    
     
     
    </div>
  );
}



export default App;
