/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer.scss';

import { Link } from 'react-router-dom';

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
            <Link to="#" className="footer__nav-items">
              О нас
            </Link>
            <Link to="#" className="footer__nav-items">
              Условия доставки
            </Link>
            <Link to="#" className="footer__nav-items">
              Возврат товара
            </Link>
            <Link to="#" className="footer__nav-items">
              Акции
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
