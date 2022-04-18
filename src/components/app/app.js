import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../header';
import Banner from '../banner';
import Navbar from '../navbar';
import Menu from '../menu';
import ProductPage from '../product-page';
import Loader from '../loader';
import Contacts from '../contacts';
import Footer from '../footer';
import Cart from '../cart';
import Checkout from '../checkout';
import Modal from '../modal';

import {
  categoriesListSelector,
  categoriesLoadingSelector,
  categoriesLoadedSelector,
  productsLoadingSelector,
  productsLoadedSelector,
  openModalSelector,
  modalPropsSelector,
} from '../../redux/selectors';
import { loadCategories, loadProducts, closeModal } from '../../redux/actions';

const App = ({
  categories,
  catLoading,
  catLoaded,
  prodLoading,
  prodLoaded,
  loadCategories,
  loadProducts,
  openModal,
  modalProps,
  closeModal,
}) => {
  useEffect(() => {
    if (!catLoading && !catLoaded) {
      loadCategories();
    }
  }, [catLoading, catLoaded, loadCategories]);

  useEffect(() => {
    if (!prodLoading && !prodLoaded) {
      loadProducts();
    }
  }, [prodLoading, prodLoaded, loadProducts]);

  if (catLoading || prodLoading) return <Loader />;
  if (!catLoaded || !prodLoaded) return 'No data';

  return (
    <>
      <Modal visible={openModal} onClose={closeModal} {...modalProps} />
      <Header />
      <Route path="/categories/:catId" component={Banner} />
      <Navbar categories={categories} />
      <Switch>
        <Redirect exact from="/" to={`/categories/${categories[0].id}`} />
        <Redirect exact from="/categories" to={`/categories/${categories[0].id}`} />
        <Route
          path="/categories/:catId"
          component={({ match }) => <Menu id={match.params.catId} />}
        />
        <Route
          path="/products/:prodId"
          component={({ match }) => <ProductPage id={match.params.prodId} />}
        />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={() => <h2>404 - Page Not Found</h2>} />
      </Switch>
      <Route path={['/categories/:catId', '/products/:prodId']} component={Contacts} />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: categoriesListSelector(state),
  catLoading: categoriesLoadingSelector(state),
  catLoaded: categoriesLoadedSelector(state),
  prodLoading: productsLoadingSelector(state),
  prodLoaded: productsLoadedSelector(state),
  openModal: openModalSelector(state),
  modalProps: modalPropsSelector(state),
});

const mapDispatchToProps = {
  loadCategories,
  loadProducts,
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
