import './header.scss';

import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { noSpace } from '../../utils';

import Search from '../search';
import Button from '../button';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg';
import { ReactComponent as BurgerIcon } from '../../icons/burger.svg';

import { totalAmountSelector } from '../../redux/selectors';
import { emptyCartModal, showNavbar } from '../../redux/actions';

import contactItems from '../contacts/contact-items';

const Header = ({ totalAmount, emptyCartModal, showNavbar }) => {
  const history = useHistory();

  const goToCart = () => {
    totalAmount ? history.push('/cart') : emptyCartModal();
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__burger" onClick={showNavbar}>
          <BurgerIcon />
          <div className="header__burger-title">МЕНЮ</div>
        </div>

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

        <Button
          type="button"
          title="Корзина"
          icon={!totalAmount && 'cart'}
          onClick={goToCart}
          amount={totalAmount}
          counter={!!totalAmount}
          border
        />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    totalAmount: totalAmountSelector(state),
  };
};

const mapDispatchToProps = {
  emptyCartModal,
  showNavbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
