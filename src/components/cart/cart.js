import './cart.scss';

import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { numberSpace } from '../../utils';
import cn from 'classnames';

import RoundButton from '../round-button';
import CartItem from '../cart-item';
import Button from '../button';

import { orderProductsSelector, totalSelector } from '../../redux/selectors';

const Cart = ({ orderProducts, total }) => {
  const [paidDelivery, setPaidDelivery] = useState(true);

  useEffect(() => {
    total >= 1000 ? setPaidDelivery(false) : setPaidDelivery(true);
  }, [total]);

  const history = useHistory();
  const goToProducts = () => {
    history.push('/');
  };

  return (
    <div className="cart">
      <div className="cart__nav">
        <RoundButton icon="arrow" rotate="270" onClick={goToProducts} />
        <div className="cart__back">К выбору блюда</div>
      </div>

      <div className="cart__title">КОРЗИНА</div>

      <div className="cart__inner">
        <TransitionGroup>
          {orderProducts.map(({ product, amount, subtotal }) => (
            <CSSTransition key={product.id} timeout={500} classNames="cart-item">
              <CartItem product={product} amount={amount} subtotal={subtotal} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>

      <div className="cart__checkout">
        <div className={cn('cart__info', { cart__info_free: !paidDelivery })}>
          <div className="cart__total">
            Итого: <span className="cart__cost">{numberSpace(total)} ₽</span>
          </div>

          {paidDelivery && (
            <div className="cart__paid">
              До бесплатной доставки не хватает <span className="cart__rest">{1000 - total} ₽</span>
            </div>
          )}

          <div className="cart__min">Минимальная сумма заказа 500 ₽</div>
        </div>
        <Button title="Оформить заказ" large />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
  };
};

export default connect(mapStateToProps)(Cart);
