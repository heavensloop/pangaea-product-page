import {
  ADD_TO_CART,
  DECREMENT_ITEM,
  INCREMENT_ITEM,
  REMOVE_ITEM,
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
