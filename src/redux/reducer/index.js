import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import categories from './categories';
import products from './products';
import crossSales from './cross-sales';
import order from './order';
import history from '../../history';

export default combineReducers({
  router: connectRouter(history),
  categories,
  products,
  crossSales,
  order,
});
