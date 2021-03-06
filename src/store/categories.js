/* eslint-disable indent */
const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'jewelery', displayName: 'Jewelery' },
    { name: 'men clothing', displayName: 'Clothing' },
  ],
  activeCategory: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE':
      return { ...state, activeCategory: payload };

    default:
      return state;
  }
};

export const changeCategory = name => {
  return {
    type: 'CHANGE',
    payload: name,
  };
};
