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

  switch (type) {
    case 'ADD':
      total = state.total + 1;
      products = state.products;
      products.push({ product: payload, id: id });
      return { products, total };
    case 'DELETE':
      total = state.total - 1;
      products = state.products.filter(item => item.id !== payload.id);
      return { products, total };
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
