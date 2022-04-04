import './menu.scss';

import { connect } from 'react-redux';
import { useEffect } from 'react';

import ProductCard from '../product-card';

import { categorySelector, crossSaleSelector } from '../../redux/selectors';

const Menu = ({ crossSelling, category, crossSale }) => {
  useEffect(() => {
    const menuTitle = document.querySelector('.menu__title-inner');
    const titleScroll = menuTitle.getBoundingClientRect().top - 110;
    window.scrollBy(0, titleScroll);
  });

  const products = crossSelling ? crossSale : category;

  return (
    <main className="menu">
      <div className="menu__title">
        <div className="menu__title-inner">
          <h2>{products.name.toUpperCase()}</h2>
        </div>
      </div>
      <div className="menu__inner">
        {products.dishes.map((id) => (
          <ProductCard key={id} id={id} />
        ))}
      </div>
    </main>
  );
};

const mapStateToProps = (state, props) => ({
  category: categorySelector(state, props),
  crossSale: crossSaleSelector(state, props),
});

export default connect(mapStateToProps)(Menu);
