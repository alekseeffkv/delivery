import { LOAD_CATEGORIES, LOAD_PRODUCTS } from './constants';

export const loadCategories = () => ({
  type: LOAD_CATEGORIES,
  CallAPI: '/categories.json',
});

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
  CallAPI: '/products.json',
});
