import { createSelector } from 'reselect';

const categoriesSelector = (state) => state.categories.entities;
const productsSelector = (state) => state.products.entities;

export const categorySelector = (state, { id }) => categoriesSelector(state)[id];
export const productSelector = (state, { id }) => productsSelector(state)[id];

export const categoriesLoadingSelector = (state) => state.categories.loading;
export const categoriesLoadedSelector = (state) => state.categories.loaded;

export const productsLoadingSelector = (state) => state.products.loading;
export const productsLoadedSelector = (state) => state.products.loaded;

export const categoriesListSelector = createSelector(categoriesSelector, Object.values);
