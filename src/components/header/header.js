import { Link } from 'react-router-dom';
import './header.scss';

import Search from '../search';
import CartButton from '../cart-button';

import { ReactComponent as PhoneIcon } from '../../icons/phone.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <span className="header__logo">DELIVERY</span>
        </Link>

        <Search />

        <div className="header__contacts">
          <PhoneIcon />
          <div className="header__contacts-inner">
            <div className="header__contacts-title">Контакты:</div>
            <div className="header__contacts-number">+7 (917) 510-57-59</div>
          </div>
        </div>

        <CartButton />
      </div>
    </header>
  );
};

export default Header;