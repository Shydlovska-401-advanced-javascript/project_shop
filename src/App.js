import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';

import Main from './main/main.js'
import Categories from './components/categories.js'
import Products from './components/products.js'
import Cart from './components/cart.js'

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
      <Header />
      <Main />
      <Footer />
     </BrowserRouter>
      {/* <Categories /> */}
      {/* <Cart /> */}
      {/* <Products /> */}
    </>

  );
}

export default App;
