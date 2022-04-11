import './menu.scss';

import { connect } from 'react-redux';
import { useEffect, useRef } from 'react';

import ProductCard from '../product-card';

import { categorySelector } from '../../redux/selectors';

const Menu = ({ category }) => {
  const { name, dishes } = category;

  const menuRef = useRef(null);

  useEffect(() => {
    const menuScroll = menuRef.current?.getBoundingClientRect().top - 55;
    window.scrollBy(0, menuScroll);
  });

  return (
    <div ref={menuRef} className="menu">
      <div className="menu__title">
        <div className="menu__title-inner">{name.toUpperCase()}</div>
      </div>
      <div className="menu__inner">
        {dishes.map((id) => (
          <ProductCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  category: categorySelector(state, props),
});

export default connect(mapStateToProps)(Menu);
