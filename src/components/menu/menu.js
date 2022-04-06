import './menu.scss';

import { connect } from 'react-redux';
import { useEffect, useRef } from 'react';

import ProductCard from '../product-card';

import { categorySelector, crossSaleSelector } from '../../redux/selectors';

const Menu = ({ crossSelling, category, crossSale }) => {
  const menuRef = useRef(null);
  const firstRender = useRef(false);

  useEffect(() => {
    if (crossSelling || !firstRender.current) return;

    const menuScroll = menuRef.current?.getBoundingClientRect().top - 55;
    window.scrollBy(0, menuScroll);
  });

  useEffect(() => {
    firstRender.current = true;
  }, []);

  const products = crossSelling ? crossSale : category;

  return (
    <div ref={menuRef} className="menu">
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
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  category: categorySelector(state, props),
  crossSale: crossSaleSelector(state, props),
});

export default connect(mapStateToProps)(Menu);
