import defaultCategories from '../../fixtures/categories';

export default (categories = defaultCategories, action) => {
  const { type } = action;

  switch (type) {
    default:
      return categories;
  }
};
