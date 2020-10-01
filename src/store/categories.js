/* eslint-disable indent */
const initialState = {
  categories: [],
  activeCategory: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
