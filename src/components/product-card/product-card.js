import './product-card.scss';

import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import { numberSpace } from '../../utils';

import Button from '../button';

import { productSelector, amountSelector } from '../../redux/selectors';
import { decrement, increment } from '../../redux/actions';

const ProductCard = ({ product, amount, decrement, increment }) => {
  const { image, name, weight, description, price } = product;

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

  const history = useHistory();
  const goToProduct = () => {
    history.push(`/products/${product.id}`);
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    increment();
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    decrement();
  };

  return (
    <div className="card" onClick={goToProduct}>
      <div className={cn('card__counter', { card__counter_hidden: !amount })}>
        <div className="card__amount">{amount}</div>
      </div>

      <div className="card__image">
        <img src={process.env.PUBLIC_URL + '/images/product/' + image} alt="product" />
      </div>

      <div className="card__body">
        <div className="card__top">
          <div className="card__title">{name}</div>
          <div className="card__weight">Вес: {weight} г</div>
        </div>

        <div className="card__description">{description}</div>

        <div className="card__bottom">
          {buttonsState.amountButtons && (
            <Button type="button" icon="minus" onClick={handleDecrement} small />
          )}

          <div className="card__price">{numberSpace(price)} ₽</div>

          {buttonsState.cartButton && (
            <Button type="button" title="В корзину" icon="cart" onClick={handleIncrement} medium />
          )}

          {buttonsState.amountButtons && (
            <Button type="button" icon="plus" onClick={handleIncrement} small />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  product: productSelector(state, props),
  amount: amountSelector(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props)),
  increment: () => dispatch(increment(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
