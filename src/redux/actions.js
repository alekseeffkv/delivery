import { push } from 'connected-react-router';

import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  LOAD_CATEGORIES,
  LOAD_PRODUCTS,
  LOAD_CROSS,
  CREATE_ORDER,
} from './constants';

import { orderDataSelector } from './selectors';

export const increment = ({ id }) => ({ type: INCREMENT, id });
export const decrement = ({ id }) => ({ type: DECREMENT, id });
export const remove = ({ id }) => ({ type: REMOVE, id });

export const loadCategories = () => ({
  type: LOAD_CATEGORIES,
  CallAPI: '/fixtures/categories.json',
});

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
  CallAPI: '/fixtures/products.json',
});

export const loadCrossSales = () => ({
  type: LOAD_CROSS,
  CallAPI: '/fixtures/cross-sales.json',
});

export const createOrder = () => async (dispatch, getState) => {
  const state = getState();
  const postData = orderDataSelector(state);

  try {
    await dispatch({ type: CREATE_ORDER, CallAPI: 'https://httpbin.org/post', postData });
    dispatch(push('/order-success'));
  } catch {
    dispatch(push('/order-error'));
  }
};
