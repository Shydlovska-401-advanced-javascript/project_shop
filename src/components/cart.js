import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from '../store/cart.js';
import Button from '@material-ui/core/Button';

function SimpleCart(props) {
  // console.log(props, 'cart')
  return (
    <>
      <Button size="small" color="primary">
        Cart: {props.total}
      </Button>
      <ul>
        {props.products.map(product => (
          <li>
            {product.product.title}{' '}
            <span onClick={() => props.deleteFromCart(product)}> x</span>
          </li>
        ))}
      </ul>
    </>
  );
}

const mapDispatchToProps = {
  deleteFromCart,
};

const mapStateToPops = state => {
  return {
    total: state.cart.total,
    products: state.cart.products,
  };
};

export default connect(mapStateToPops, mapDispatchToProps)(SimpleCart);
