import './navbar.scss';

import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

import CartButton from '../cart-button';

const Navbar = ({ categories }) => {
  const [navbarCart, setNavbarCart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentNavbarCart = window.pageYOffset > 100;
      setNavbarCart(currentNavbarCart);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = categories.map(({ id, name }) => ({
    label: name,
    url: `/categories/${id}`,
  }));

  const handleClick = () => {
    const menuTitle = document.querySelector('.menu__title-inner');
    const titleScroll = menuTitle.getBoundingClientRect().top - 110;
    window.scrollBy(0, titleScroll);
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {navItems.map(({ label, url }) => (
          <NavLink
            to={url}
            key={label}
            className="navbar__nav-item"
            activeClassName="navbar_active"
            onClick={handleClick}
          >
            {label}
          </NavLink>
        ))}

        {navbarCart && (
          <CSSTransition in={true} appear timeout={500} classNames="cart-button">
            <CartButton />
          </CSSTransition>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
