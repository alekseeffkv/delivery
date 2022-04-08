import './cart-item.scss';

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { numberSpace } from '../../utils';

import RoundButton from '../round-button';

import { increment, decrement, remove } from '../../redux/actions';

const CartItem = ({ product, amount, subtotal, increment, decrement, remove }) => {
  const { id, name, image, composition } = product;

  const history = useHistory();
  const goToProduct = () => {
    history.push(`/products/${id}`);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__left" onClick={goToProduct}>
        <div className="cart-item__image">
          <img src={process.env.PUBLIC_URL + '/images/product/' + image} alt="product" />
        </div>

        <div className="cart-item__title">
          <div className="cart-item__name">{name.toUpperCase()}</div>
          <div className="cart-item__composition">{composition}</div>
        </div>
      </div>

      <div className="cart-item__right">
        <div className="cart-item__counter">
          <RoundButton icon="minus" onClick={decrement} />
          <div className="cart-item__amount">{amount}</div>
          <RoundButton icon="plus" onClick={increment} />
        </div>

        <div className="cart-item__subtotal">{numberSpace(subtotal)} ₽</div>

        <RoundButton icon="plus" rotate="45" onClick={remove} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product)),
  decrement: () => dispatch(decrement(props.product)),
  remove: () => dispatch(remove(props.product)),
});

export default connect(null, mapDispatchToProps)(CartItem);
