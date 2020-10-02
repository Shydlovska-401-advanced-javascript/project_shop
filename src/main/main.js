import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Categories from '../components/categories.js';
import Cart from '../components/cart.js';
import Products from '../components/products.js';

function Main() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Categories />
          <Cart />
          <Products />
        </Route>
      </Switch>
    </>
  );
}

export default Main;
