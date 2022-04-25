/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer.scss';

import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__docs">
          <Link to="/">
            <span className="footer__logo">DELIVERY</span>
          </Link>

          <div className="footer__links">
            <div className="footer__links-title">
              © ООО «ДЕЛИВЕРИ»
              <br />
              Все права защищены 2010-2022
            </div>
            <Link to="#">Пользовательское соглашение</Link>
            <Link to="#">Карта сайта</Link>
            <Link to="#">Политика конфиденциальности</Link>
          </div>
        </div>

        <div className="footer__nav">
          <div className="footer__nav-inner">
            <NavLink to="#" className="footer__nav-item">
              О нас
            </NavLink>
            <NavLink to="#" className="footer__nav-item">
              Условия доставки
            </NavLink>
            <NavLink to="#" className="footer__nav-item">
              Возврат товара
            </NavLink>
            <NavLink to="#" className="footer__nav-item">
              Акции
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
