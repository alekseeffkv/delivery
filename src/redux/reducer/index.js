import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import categories from './categories';
import products from './products';
import order from './order';
import modal from './modal';
import navbar from './navbar';
import history from '../../history';

export default combineReducers({
  router: connectRouter(history),
  categories,
  products,
  order,
  modal,
  navbar,
});
