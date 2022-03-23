import { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from '../header';
import Banner from '../banner';
import Navbar from '../navbar';
import Menu from '../menu';

import {
  categoriesListSelector,
  categoriesLoadingSelector,
  categoriesLoadedSelector,
} from '../../redux/selectors';
import { loadCategories } from '../../redux/actions';

function App({ categories, loading, loaded, loadCategories }) {
  useEffect(() => {
    if (!loading && !loaded) loadCategories();
  }, [loading, loaded, loadCategories]);

  return (
    <div>
      <Header />
      <Banner />
      <Navbar categories={categories} />
      <Menu categories={categories} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: categoriesListSelector(state),
  loading: categoriesLoadingSelector(state),
  loaded: categoriesLoadedSelector(state),
});

const mapDispatchToProps = {
  loadCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
