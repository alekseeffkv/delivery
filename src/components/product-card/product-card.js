import './product-card.scss';
import Button from '../button';
import { numberSpace } from '../../utils';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={process.env.PUBLIC_URL + '/images/product-card/' + product.image} alt="card" />
      </div>
      <div className="card__body">
        <div className="card__top">
          <div className="card__title">{product.name}</div>
          <div className="card__weight">Вес: {product.weight} г</div>
        </div>
        <div className="card__description">{product.description}</div>
        <div className="card__bottom">
          <div className="card__price">{numberSpace(product.price)} ₽</div>
          <Button title="В корзину" icon="cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
