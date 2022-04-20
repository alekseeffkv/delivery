import {
  EMPTY_CART_MODAL,
  MIN_SUM_MODAL,
  SUCCESS_MODAL,
  ERROR_MODAL,
  CLOSE_MODAL,
} from '../constants';

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
    case MIN_SUM_MODAL:
      return {
        modalProps: {
          icon: 'bag',
          content: 'Минимальная сумма заказа 1000 ₽',
          onButtonClick: 'goToMenu',
          buttonProps: {
            type: 'button',
            title: 'Посмотреть меню',
            large: true,
          },
        },
        openModal: true,
      };
    case SUCCESS_MODAL:
      return {
        modalProps: {
          icon: 'chef',
          content: 'Ваш заказ создан. Наш шеф-повар уже начал его готовить.',
          onButtonClick: 'goToMenu',
          buttonProps: {
            type: 'button',
            title: 'Посмотреть меню',
            large: true,
          },
        },
        openModal: true,
      };
    case ERROR_MODAL:
      return {
        modalProps: {
          icon: 'flash',
          content: 'Что-то пошло не так. Попробуйте повторить заказ позже.',
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
