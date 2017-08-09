'use strict';

import Products from "./pages/products.js";
import Company from "./pages/company.js";
import Home from "./pages/home.js";
import Checkout from "./pages/checkout.js";
import Receipt from "./pages/receipt.js";
import Item from "./pages/item.js";
import React from 'react';
import Layout from './layout.js';
import {
  Router,
  Route,
  browserHistory
} from 'react-router'

const Routes = (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route name="home"
        path="/"
        component={Home} />
      <Route name="company"
        path="company"
        component={Company} />
      <Route name="products"
        path="products"
        component={Products} />
      <Route name="item"
        path="item/:id"
        component={Item} />
      <Route name="checkout"
        path="checkout"
        component={Checkout} />
      <Route name="receipt"
        path="receipt"
        component={Receipt} />
    </Route>
  </Router>
);

export default Routes;
