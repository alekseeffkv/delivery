import './product-page.scss';

import { connect } from 'react-redux';
import { useEffect, useRef } from 'react';
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

  if (!loaded) return 'No data';

  return (
    <div>
      <div ref={productPageRef} className="product-page">
        <div className="product-page__inner">
          <div className="product-page__nav">
            <RoundButton icon="arrow" rotate="270" />
            <div className="product-page__back">Вернуться назад</div>
          </div>

          <div className="product-page__body">
            <div className="product-page__image">
              <img
                src={process.env.PUBLIC_URL + '/images/product/' + product.image}
                alt="product"
              />
            </div>

            <div className="product-page__info">
              <div className="product-page__title">
                <div className="product-page__name">{product.name}</div>
                <div className="product-page__composition">{product.composition}</div>
              </div>

              <div className="product-page__description">
                <div className="product-page__weight">Вес: {product.weight} г</div>

                <div className="product-page__buy">
                  <Button title="Корзина" icon="bag" border={true} />
                  <div className="product-page__price">{numberSpace(product.price)} ₽</div>
                </div>

                <div className="product-page__structure">
                  <div className="product-page__structure-element">
                    <div className="product-page__element-name">Белки</div>
                    <div className="product-page__element-value">{product.proteins}</div>
                  </div>
                  <div className="product-page__structure-element">
                    <div className="product-page__element-name">Жиры</div>
                    <div className="product-page__element-value">{product.fats}</div>
                  </div>
                  <div className="product-page__structure-element">
                    <div className="product-page__element-name">Углеводы</div>
                    <div className="product-page__element-value">{product.carbohydrates}</div>
                  </div>
                  <div className="product-page__structure-element">
                    <div className="product-page__element-name">Ккал</div>
                    <div className="product-page__element-value">{product.calories}</div>
                  </div>
                  <div className="product-page__structure-element">
                    <div className="product-page__element-name">Вес</div>
                    <div className="product-page__element-value">{product.weight}</div>
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
        <Menu crossSelling={true} id="32096304-69d1-821f-aa81-99801662aee3" />
      )}
    </div>
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
