import { useEffect } from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item';
import Loader from '../loader';

import { productsLoadingSelector, productsLoadedSelector } from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';

const Menu = ({ categories, loading, loaded, loadProducts }) => {
  useEffect(() => {
    if (!loading && !loaded) loadProducts();
  }, [loading, loaded, loadProducts]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data';

  return (
    <main>
      {categories.map((category) => (
        <MenuItem key={category.id} category={category} />
      ))}
    </main>
  );
};

const mapStateToProps = (state) => ({
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
});

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
