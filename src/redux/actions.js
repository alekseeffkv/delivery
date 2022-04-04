import { LOAD_CATEGORIES, LOAD_PRODUCTS, LOAD_CROSS } from './constants';

export const loadCategories = () => ({
  type: LOAD_CATEGORIES,
  CallAPI: '/fixtures/categories.json',
});

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
  CallAPI: '/fixtures/products.json',
});

export const loadCrossSales = () => ({
  type: LOAD_CROSS,
  CallAPI: '/fixtures/cross-sales.json',
});
