import { SHOW_NAVBAR, HIDE_NAVBAR } from '../constants';

const initialState = {
  visibleNavbar: false,
};

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case SHOW_NAVBAR:
      return {
        visibleNavbar: true,
      };
    case HIDE_NAVBAR:
      return {
        visibleNavbar: false,
      };
    default:
      return state;
  }
}
