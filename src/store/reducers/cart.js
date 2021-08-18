import {
  ADD_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_ITEM,
} from 'store/actionTypes/cart';

const initialState = {
  items: [],
};

const findItem = (items, productId) =>
  items.find(({ product }) => product.id === productId);

const excludeProduct = (items, productId) =>
  items.filter(({ product }) => product.id !== productId);

const addNewItem = (items, product, quantity = 1) => {
  const existing = findItem(items, product.id);

  return [
    ...excludeProduct(items, product.id),
    {
      product,
      quantity: existing ? existing.quantity + 1 : quantity,
    },
  ];
};

const incrementItem = (items, productId) => {
  const item = findItem(items, productId);
  const quantity = item.quantity + 1;

  return addNewItem(excludeProduct(items, productId), item.product, quantity);
};

const decrementItem = (items, productId) => {
  const item = findItem(items, productId);
  const quantity = item.quantity + 1;

  return addNewItem(excludeProduct(items, productId), item.product, quantity);
};

export default (state = initialState, action) => {
  const { items } = state;
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return { ...state, items: addNewItem(items, payload) };
    case INCREMENT_ITEM:
      return { ...state, items: incrementItem(items, payload) };
    case DECREMENT_ITEM:
      return { ...state, items: decrementItem(items, payload) };
    case REMOVE_ITEM:
      return { ...state, items: excludeProduct(items, payload) };
    default:
      return state;
  }
};
