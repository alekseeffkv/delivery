import './product-card.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { numberSpace } from '../../utils';

import Button from '../button';

import { productSelector } from '../../redux/selectors';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="card">
        <div className="card__image">
          <img src={process.env.PUBLIC_URL + '/images/product/' + product.image} alt="product" />
        </div>
        <div className="card__body">
          <div className="card__top">
            <div className="card__title">{product.name}</div>
            <div className="card__weight">Вес: {product.weight} г</div>
          </div>
          <div className="card__description">{product.description}</div>
          <div className="card__bottom">
            <div className="card__price">{numberSpace(product.price)} ₽</div>
            <Button title="В корзину" icon="cart" medium={true} />
          </div>
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = (state, props) => ({
  product: productSelector(state, props),
});

export default connect(mapStateToProps)(ProductCard);
