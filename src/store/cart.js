/* eslint-disable indent */
import _ from 'lodash';

const initialState = {
  products: [],
  total: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  let total;
  let products;
  let id = Math.random();

  switch(type) {
      case 'ADD':
        let updatedList = [...state.products, payload]
        return {products: updatedList,};
          // total = state.total + 1;
          // products = state.products;
          // products.push({product: payload, id: id});
          // return {products, total}
      case 'DELETE':
        let products = _.filter(state.products, (e) => {
          return e.name !== payload.name
        });
        return {products};
          // total = state.total -1;
          // products = state.products.filter(item => item.id !== payload.id);
          // console.log(products, "whats left");
          // return {products, total}
      default:
        return state;
  }
};

export const addToCart = product => {
  return {
    type: 'ADD',
    payload: product,
  };
};

export const deleteFromCart = product => {
  return {
    type: 'DELETE',
    payload: product,
  };
};
