import { push } from 'connected-react-router';

import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  LOAD_CATEGORIES,
  LOAD_PRODUCTS,
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

export const createOrder = (data) => async (dispatch, getState) => {
  const state = getState();
  const postData = { user: data, order: orderDataSelector(state) };

  try {
    await dispatch({ type: CREATE_ORDER, CallAPI: 'https://httpbin.org/post', postData });
    dispatch(push('/order-success'));
  } catch {
    dispatch(push('/order-error'));
  }
};
