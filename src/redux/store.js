import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import api from './middleware/api';

export default createStore(reducer, applyMiddleware(api));
