import {
  SHOW_CART,
  HIDE_CART,
  ADD_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_ITEM,
} from 'store/actionTypes/cart';

const initialState = {
  items: [],
  isShowingCart: false
};

const findItem = (items, productId) =>
  items.find(({ product }) => product.id === productId);

const removeProduct = (items, productId) =>
  items.filter(({ product }) => product.id !== productId);

const updateItem = (items, callBack) =>
  [...items].map((item) => callBack(item));

const incrementItem = (items, productId) =>
  updateItem(items, (item) => {
    if (item.product.id === productId) {
      return { ...item, quantity: item.quantity + 1 };
    }

    return item;
  });

const decrementItem = (items, productId) =>
  updateItem(items, (item) => {
    if (item.product.id === productId) {
      return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
    }

    return item;
  });

const addNewItem = (items, product) => {
  const existing = findItem(items, product.id);

  if (existing) {
    return incrementItem(items, product.id);
  }

  return [
    ...items,
    {
      product,
      quantity: 1,
    },
  ];
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
      return { ...state, items: removeProduct(items, payload) };
    case SHOW_CART:
      return { ...state, isShowingCart: true };
    case HIDE_CART:
      return { ...state, isShowingCart: false };
    default:
      return state;
  }
};
