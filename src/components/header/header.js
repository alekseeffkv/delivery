import './header.scss';

import { Link, useHistory } from 'react-router-dom';
import { noSpace } from '../../utils';

import Search from '../search';
import Button from '../button';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg';

import contactItems from '../contacts/contact-items';

const Header = () => {
  const history = useHistory();
  const goToCart = () => {
    history.push('/cart');
  };

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
            <a href={`tel:${noSpace(contactItems.phone)}`} className="header__contacts-number">
              {contactItems.phone}
            </a>
          </div>
        </div>

        <Button type="button" title="Корзина" onClick={goToCart} border counter />
      </div>
    </header>
  );
};

export default Header;
