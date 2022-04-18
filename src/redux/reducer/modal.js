import { EMPTY_CART_MODAL, CLOSE_MODAL } from '../constants';

const initialState = { openModal: false };

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case EMPTY_CART_MODAL:
      return {
        modalProps: {
          icon: 'cart',
          title: 'КОРЗИНА ПУСТАЯ',
          onButtonClick: 'goToMenu',
          buttonProps: {
            type: 'button',
            title: 'Посмотреть меню',
            large: true,
          },
        },
        openModal: true,
      };
    case CLOSE_MODAL:
      return { openModal: false };
    default:
      return state;
  }
};
