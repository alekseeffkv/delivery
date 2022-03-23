import { LOAD_CATEGORIES } from './constants';

export const loadCategories = () => ({
  type: LOAD_CATEGORIES,
  CallAPI: 'categories.json',
});
