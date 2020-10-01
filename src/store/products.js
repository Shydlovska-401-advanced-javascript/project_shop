/* eslint-disable indent */

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
    const response = initialState.products;

    dispatch({
      type: 'GET_PRODUCTS',
      payload: response,
    });
  };
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
