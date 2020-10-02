/* eslint-disable indent */
import axios from 'axios';

// electronics, jewelry, clothing
const initialState = {
  products: [
    {
      name: 'Egg Cooker',
      category: 'electronics',
      description: 'Cook em if you got em!',
      price: 10,
      inventory: 10,
    },
    {
      name: 'Giant Crystal',
      category: 'jewelry',
      description:
        'Journey to the center of the Earth every time you get dressed.',
      price: 10,
      inventory: 10,
    },
    {
      name: 'Top Hat',
      category: 'clothing',
      description: 'This can help you look your most dapper.',
      price: 10,
      inventory: 10,
    },
  ],
};

export const getProducts = () => {
  return async function (dispatch) {
    const url = `https://fakestoreapi.com`;
    const response = await axios.get(`${url}/products?limit=9`);

    dispatch({
      type: 'GET_PRODUCTS',
      payload: response.data,
    });
  };
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_PRODUCTS':
      return { ...state, products: payload };

    default:
      return state;
  }
};
