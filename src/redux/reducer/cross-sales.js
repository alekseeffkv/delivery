import { LOAD_CROSS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { arrToMap } from '../../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_CROSS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_CROSS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_CROSS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
};
