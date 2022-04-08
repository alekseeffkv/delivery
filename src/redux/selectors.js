import { createSelector } from 'reselect';

const categoriesSelector = (state) => state.categories.entities;
const productsSelector = (state) => state.products.entities;
const crossSalesSelector = (state) => state.crossSales.entities;
const orderSelector = (state) => state.order.entities;

export const categoriesListSelector = createSelector(categoriesSelector, Object.values);

export const categorySelector = (state, { id }) => categoriesSelector(state)[id];
export const productSelector = (state, { id }) => productsSelector(state)[id];
export const crossSaleSelector = (state, { id }) => crossSalesSelector(state)[id];
export const amountSelector = (state, { id }) => orderSelector(state)[id] || 0;

export const categoriesLoadingSelector = (state) => state.categories.loading;
export const categoriesLoadedSelector = (state) => state.categories.loaded;

export const productsLoadingSelector = (state) => state.products.loading;
export const productsLoadedSelector = (state) => state.products.loaded;

export const crossSalesLoadingSelector = (state) => state.crossSales.loading;
export const crossSalesLoadedSelector = (state) => state.crossSales.loaded;

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
