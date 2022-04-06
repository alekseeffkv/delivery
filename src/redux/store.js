import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import reducer from './reducer';
import api from './middleware/api';
import history from '../history';

const enhancer = applyMiddleware(thunk, routerMiddleware(history), api);

export default createStore(reducer, composeWithDevTools(enhancer));
