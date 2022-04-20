import './cart.scss';

import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { numberSpace } from '../../utils';

import RoundButton from '../round-button';
import CartItem from '../cart-item';
import Button from '../button';

import { orderProductsSelector, totalSelector } from '../../redux/selectors';
import { minSumModal } from '../../redux/actions';

const Cart = ({ orderProducts, total, minSumModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();

  const goToProducts = () => {
    history.push('/');
  };

  const goToCheckout = () => {
    total < 1000 ? minSumModal() : history.push('/checkout');
  };

  return (
    <div className="cart">
      <div className="cart__nav">
        <RoundButton icon="arrow" rotate="270" onClick={goToProducts} />
        <div className="cart__back">К выбору блюда</div>
      </div>

      <div className="cart__title">КОРЗИНА</div>

      <div className="cart__inner">
        <CSSTransition in={!total} unmountOnExit timeout={500} classNames="cart__empty">
          <div className="cart__empty">
            <div className="cart__empty-info">Сложите в корзину нужные блюда</div>
            <Button type="button" title="Посмотреть меню" onClick={goToProducts} large />
          </div>
        </CSSTransition>

        <TransitionGroup component={null}>
          {orderProducts.map(({ product, amount, subtotal }) => (
            <CSSTransition key={product.id} timeout={500} classNames="cart-item">
              <CartItem product={product} amount={amount} subtotal={subtotal} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>

      <CSSTransition in={!!total} unmountOnExit timeout={500} classNames="cart__checkout">
        <div className="cart__checkout">
          <div className="cart__info">
            <div className="cart__total">
              Итого: <span className="cart__cost">{numberSpace(total)} ₽</span>
            </div>

            <div className="cart__min">Минимальная сумма заказа 1000 ₽</div>
          </div>

          <Button type="button" title="Оформить заказ" large onClick={goToCheckout} />
        </div>
      </CSSTransition>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
  };
};

const mapDispatchToProps = {
  minSumModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
