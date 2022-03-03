import { CSSTransition } from 'react-transition-group';
import './cart-button.scss';

const CartButton = () => {
  return (
    <CSSTransition in={true} appear timeout={500} classNames="cart-button">
      <div className="cart-button">
        <div className="cart-button__title">Корзина</div>
        <div className="cart-button__counter">
          <div className="cart-button__circle">
            <div className="cart-button__amount">4</div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default CartButton;
