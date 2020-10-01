import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Categories from './components/categories.js'
import Products from './components/products.js';
// import Cart from './components/cart.js'

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      {/* <Cart /> */}
      <Footer />
    </>
  );
}

export default App;
