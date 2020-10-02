import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Categories from '../components/categories.js';
import Products from '../components/products.js';

function Main() {
  return (
    <>
    <Switch>
      <Route exact path='/'>
        <Categories />
        <Products />
      </Route>
    </Switch>
    </>
  )
}

export default Main;