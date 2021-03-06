import { createSelector } from 'reselect';

const categoriesSelector = (state) => state.categories.entities;
const productsSelector = (state) => state.products.entities;
const orderSelector = (state) => state.order.entities;
export const navbarSelector = (state) => state.navbar.visibleNavbar;

export const categoriesListSelector = createSelector(categoriesSelector, Object.values);
export const productsListSelector = createSelector(productsSelector, Object.values);

export const categorySelector = (state, { id }) => categoriesSelector(state)[id];
export const productSelector = (state, { id }) => productsSelector(state)[id];
export const amountSelector = (state, { id }) => orderSelector(state)[id] || 0;
export const subtotalSelector = (state, { id }) => subtotalListSelector(state)[id] || 0;

export const categoriesLoadingSelector = (state) => state.categories.loading;
export const categoriesLoadedSelector = (state) => state.categories.loaded;

export const productsLoadingSelector = (state) => state.products.loading;
export const productsLoadedSelector = (state) => state.products.loaded;

export const orderLoadingSelector = (state) => state.order.loading;

export const openModalSelector = (state) => state.modal.openModal;
export const modalPropsSelector = (state) => state.modal.modalProps;

export const orderDataSelector = createSelector(orderSelector, (order) =>
  Object.entries(order).map(([id, amount]) => ({ id, amount })),
);

export const orderProductsSelector = createSelector(
  [productsSelector, orderSelector],
  (products, order) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      })),
);

export const totalSelector = createSelector(orderProductsSelector, (orderProducts) =>
  orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0),
);

export const subtotalListSelector = createSelector(orderProductsSelector, (orderProducts) =>
  orderProducts.reduce((acc, { product, subtotal }) => ({ ...acc, [product.id]: subtotal }), {}),
);

export const totalAmountSelector = createSelector(orderProductsSelector, (orderProducts) =>
  orderProducts.reduce((acc, { amount }) => acc + amount, 0),
);
