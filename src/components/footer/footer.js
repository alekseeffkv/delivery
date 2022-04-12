/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';

const Footer = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <button type="button" onClick={goToTop} className="footer__up">
          <ArrowIcon />
        </button>

        <div className="footer__docs">
          <Link to="/">
            <span className="footer__logo">DELIVERY</span>
          </Link>

          <div className="footer__links">
            <div className="footer__links-title">
              © ООО «ДЕЛИВЕРИ»
              <br />
              Все права защищены. 2010-2022
            </div>
            <a href="#">Пользовательское соглашение</a>
            <a href="#">Карта сайта</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>

        <div className="footer__nav">
          <div className="footer__nav-items">О нас</div>
          <div className="footer__nav-items">Условия доставки</div>
          <div className="footer__nav-items">Возврат товара</div>
          <div className="footer__nav-items">Акции</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
