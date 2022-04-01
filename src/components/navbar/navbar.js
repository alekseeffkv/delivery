import './navbar.scss';

import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

import Button from '../button';

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

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {navItems.map(({ label, url }) => (
          <NavLink
            to={url}
            key={label}
            className="navbar__nav-item"
            activeClassName="navbar_active"
          >
            {label}
          </NavLink>
        ))}

        {navbarCart && (
          <CSSTransition in={true} appear timeout={500} classNames="button">
            <Button title="Корзина" border={true} counter={true} />
          </CSSTransition>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
