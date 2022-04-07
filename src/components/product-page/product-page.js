import './product-page.scss';

import { connect } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { numberSpace } from '../../utils';

import Button from '../button';
import RoundButton from '../round-button';
import Menu from '../menu';
import Loader from '../loader';

import {
  productSelector,
  crossSalesLoadingSelector,
  crossSalesLoadedSelector,
} from '../../redux/selectors';
import { loadCrossSales } from '../../redux/actions';

const ProductPage = ({ product, loading, loaded, loadCrossSales }) => {
  const { image, name, composition, weight, price, proteins, fats, carbohydrates, calories } =
    product;

  useEffect(() => {
    if (!loading && !loaded) {
      loadCrossSales();
    }
  }, [loading, loaded, loadCrossSales]);

  const productPageRef = useRef(null);

  useEffect(() => {
    const productPageScroll = productPageRef.current?.getBoundingClientRect().top - 120;
    window.scrollBy(0, productPageScroll);
  });

  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <>
      <div ref={productPageRef} className="product-page">
        <div className="product-page__inner">
          <div className="product-page__nav">
            <RoundButton icon="arrow" rotate="270" onClick={handleClick} />
            <div className="product-page__back">Вернуться назад</div>
          </div>

          <div className="product-page__body">
            <div className="product-page__image">
              <img src={process.env.PUBLIC_URL + '/images/product/' + image} alt="product" />
            </div>

            <div className="product-page__info">
              <div className="product-page__title">
                <div className="product-page__name">{name}</div>
                <div className="product-page__composition">{composition}</div>
              </div>

              <div className="product-page__description">
                <div className="product-page__weight">Вес: {weight} г</div>

                <div className="product-page__buy">
                  <Button title="Корзина" icon="bag" border />
                  <div className="product-page__price">{numberSpace(price)} ₽</div>
                </div>

                <div className="product-page__structure">
                  <div className="product-page__structure-element">
                    <div className="product-page__element-name">Белки</div>
                    <div className="product-page__element-value">{proteins}</div>
                  </div>
                  <div className="product-page__structure-element">
                    <div className="product-page__element-name">Жиры</div>
                    <div className="product-page__element-value">{fats}</div>
                  </div>
                  <div className="product-page__structure-element">
                    <div className="product-page__element-name">Углеводы</div>
                    <div className="product-page__element-value">{carbohydrates}</div>
                  </div>
                  <div className="product-page__structure-element">
                    <div className="product-page__element-name">Ккал</div>
                    <div className="product-page__element-value">{calories}</div>
                  </div>
                  <div className="product-page__structure-element">
                    <div className="product-page__element-name">Вес</div>
                    <div className="product-page__element-value">{weight}</div>
                  </div>

                  <div className="product-page__line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        loaded && <Menu crossSelling id="32096304-69d1-821f-aa81-99801662aee3" />
      )}
    </>
  );
};

const mapStateToProps = (state, props) => ({
  product: productSelector(state, props),
  loading: crossSalesLoadingSelector(state),
  loaded: crossSalesLoadedSelector(state),
});

const mapDispatchToProps = {
  loadCrossSales,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
