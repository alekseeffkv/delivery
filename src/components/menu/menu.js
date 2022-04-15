import './menu.scss';

import { connect } from 'react-redux';

import ProductCard from '../product-card';

import { categorySelector } from '../../redux/selectors';

const Menu = ({ category }) => {
  const { name, dishes } = category;

  return (
    <div className="menu">
      <div className="menu__container">
        <div className="menu__title">
          <div className="menu__title-inner">{name.toUpperCase()}</div>
        </div>
        <div className="menu__inner">
          {dishes.map((id) => (
            <ProductCard key={id} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  category: categorySelector(state, props),
});

export default connect(mapStateToProps)(Menu);
