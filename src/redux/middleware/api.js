import { FAILURE, REQUEST, SUCCESS } from '../constants';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, ...rest } = action;
  next({ ...rest, type: type + REQUEST });

  try {
    const res = await fetch(CallAPI);
    const data = await res.json();

    if (!res.ok) throw data;

    next({ ...rest, type: type + SUCCESS, data });
  } catch (error) {
    throw next({ ...rest, type: type + FAILURE, error });
  }
};
