import { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from '../header';
import Banner from '../banner';
import Navbar from '../navbar';
import Menu from '../menu';
import Loader from '../loader';
import Contacts from '../contacts';

import {
  categoriesListSelector,
  categoriesLoadingSelector,
  categoriesLoadedSelector,
} from '../../redux/selectors';
import { loadCategories } from '../../redux/actions';

const App = ({ categories, loading, loaded, loadCategories }) => {
  useEffect(() => {
    if (!loading && !loaded) loadCategories();
  }, [loading, loaded, loadCategories]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data';

  return (
    <div>
      <Header />
      <Banner />
      <Navbar categories={categories} />
      <Menu categories={categories} />
      <Contacts />
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: categoriesListSelector(state),
  loading: categoriesLoadingSelector(state),
  loaded: categoriesLoadedSelector(state),
});

const mapDispatchToProps = {
  loadCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
