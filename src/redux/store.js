import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import api from './middleware/api';

export default createStore(reducer, composeWithDevTools(applyMiddleware(api)));
