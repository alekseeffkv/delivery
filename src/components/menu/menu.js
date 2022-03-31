import './menu.scss';

import { connect } from 'react-redux';

import ProductCard from '../product-card';

import { categorySelector } from '../../redux/selectors';

const Menu = ({ category }) => {
  return (
    <main className="menu">
      <div className="menu__title">
        <div className="menu__title-inner">
          <h2>{category.name.toUpperCase()}</h2>
        </div>
      </div>
      <div className="menu__inner">
        {category.dishes.map((id) => (
          <ProductCard key={id} id={id} />
        ))}
      </div>
    </main>
  );
};

const mapStateToProps = (state, props) => ({
  category: categorySelector(state, props),
});

export default connect(mapStateToProps)(Menu);
