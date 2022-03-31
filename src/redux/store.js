import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import reducer from './reducer';
import api from './middleware/api';
import history from '../history';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(routerMiddleware(history), api)),
);
