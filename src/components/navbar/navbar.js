import './navbar.scss';

import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import NavItem from '../nav-item';
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

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {categories.map((category) => (
          <NavItem key={category.id} id={category.id} name={category.name} />
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
