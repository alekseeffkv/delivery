import { ReactComponent as CartIcon } from '../../icons/cart.svg';
import './cart-button.scss';

const CartButton = () => {
  return (
    <div className="cart-button">
      <div className="cart-button__title">Корзина</div>
      <div className="cart-button__counter">
        <div className="cart-button__circle">
          <div className="cart-button__amount">4</div>
        </div>
      </div>
    </div>
  );
};

export default CartButton;