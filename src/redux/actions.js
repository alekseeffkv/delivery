import { push } from 'connected-react-router';

import { LOAD_CATEGORIES, LOAD_PRODUCTS, LOAD_CROSS, CREATE_ORDER } from './constants';

import { orderDataSelector } from './selectors';

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
