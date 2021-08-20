import {
  ADD_TO_CART,
  DECREMENT_ITEM,
  HIDE_CART,
  INCREMENT_ITEM,
  REMOVE_ITEM,
  SHOW_CART,
} from 'store/actionTypes/cart';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const incrementItem = (item) => ({
  type: INCREMENT_ITEM,
  payload: item,
});

export const decrementItem = (item) => ({
  type: DECREMENT_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const showCart = () => ({
  type: SHOW_CART
});

export const hideCart = () => ({
  type: HIDE_CART
});
