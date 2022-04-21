import { push } from 'connected-react-router';

import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  LOAD_CATEGORIES,
  LOAD_PRODUCTS,
  CREATE_ORDER,
  EMPTY_CART_MODAL,
  MIN_SUM_MODAL,
  SUCCESS_MODAL,
  ERROR_MODAL,
  CLOSE_MODAL,
} from './constants';

import { orderDataSelector } from './selectors';

export const increment = ({ id }) => ({ type: INCREMENT, id });
export const decrement = ({ id }) => ({ type: DECREMENT, id });
export const remove = ({ id }) => ({ type: REMOVE, id });

export const emptyCartModal = () => ({ type: EMPTY_CART_MODAL });
export const minSumModal = () => ({ type: MIN_SUM_MODAL });
export const successModal = () => ({ type: SUCCESS_MODAL });
export const errorModal = () => ({ type: ERROR_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });

export const loadCategories = () => ({
  type: LOAD_CATEGORIES,
  CallAPI: '/static/fixtures/categories.json',
});

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
  CallAPI: '/static/fixtures/products.json',
});

export const createOrder = (data) => async (dispatch, getState) => {
  const state = getState();
  const postData = { user: data, order: orderDataSelector(state) };

  try {
    await dispatch({ type: CREATE_ORDER, CallAPI: 'https://httpbin.org/post', postData });
    dispatch(successModal());
  } catch {
    dispatch(errorModal());
  } finally {
    dispatch(push('/'));
  }
};
