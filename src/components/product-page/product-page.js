import './product-page.scss';

import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { numberSpace } from '../../utils';
import cn from 'classnames';

import Button from '../button';
import RoundButton from '../round-button';

import { productSelector, amountSelector, subtotalSelector } from '../../redux/selectors';
import { decrement, increment } from '../../redux/actions';

const ProductPage = ({ product, amount, subtotal, decrement, increment }) => {
  const { image, name, composition, weight, price, proteins, fats, carbohydrates, calories } =
    product;

  const [buttonsState, setButtonsState] = useState({
    cartButton: !amount,
    amountButtons: !!amount,
  });

  useEffect(() => {
    amount === 1 &&
      setButtonsState({
        cartButton: false,
        amountButtons: true,
      });
  }, [amount]);

  useEffect(() => {
    !amount &&
      setButtonsState({
        cartButton: true,
        amountButtons: false,
      });
  }, [amount]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="product-page">
      <div className="product-page__container">
        <div className="product-page__nav">
          <RoundButton icon="arrow" rotate="270" onClick={handleClick} />
          <div className="product-page__back">Вернуться назад</div>
        </div>

        <div className="product-page__body">
          <div
            className={cn('product-page__counter', { [`product-page__counter_hidden`]: !amount })}
          >
            <div className="product-page__amount">{amount}</div>
          </div>

          <div className="product-page__image">
            <img src={process.env.PUBLIC_URL + '/static/images/' + image} alt="product" />
          </div>

          <div className="product-page__info">
            <div className="product-page__title">
              <div className="product-page__name">{name}</div>
              <div className="product-page__composition">{composition}</div>
            </div>

            <div className="product-page__description">
              <div className="product-page__weight">Вес: {weight} г</div>

              <div className="product-page__buy">
                {buttonsState.amountButtons && (
                  <>
                    <Button type="button" icon="minus" onClick={decrement} small />

                    <div className="card__price">{numberSpace(subtotal)} ₽</div>

                    <Button type="button" icon="plus" onClick={increment} small />
                  </>
                )}

                {buttonsState.cartButton && (
                  <>
                    <Button
                      type="button"
                      title="В корзину"
                      icon="cart"
                      onClick={increment}
                      medium
                    />
                    <div className="product-page__price">{numberSpace(price)} ₽</div>
                  </>
                )}
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
  );
};

const mapStateToProps = (state, props) => ({
  product: productSelector(state, props),
  amount: amountSelector(state, props),
  subtotal: subtotalSelector(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props)),
  increment: () => dispatch(increment(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
