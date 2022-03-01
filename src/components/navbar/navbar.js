import { Link } from 'react-scroll';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__nav-item">
        <Link
          className="navbar__nav-link"
          activeClass="navbar__nav-link_active"
          to="cold-starters"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Холодные закуски
        </Link>
      </div>

      <div className="navbar__nav-item">
        <Link
          className="navbar__nav-link"
          activeClass="navbar__nav-link_active"
          to="hot-starters"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Горячие закуски
        </Link>
      </div>

      <div className="navbar__nav-item">
        <Link
          className="navbar__nav-link"
          activeClass="navbar__nav-link_active"
          to="meat-dishes"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Мясные блюда
        </Link>
      </div>

      <div className="navbar__nav-item">
        <Link
          className="navbar__nav-link"
          activeClass="navbar__nav-link_active"
          to="soups"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Супы
        </Link>
      </div>

      <div className="navbar__nav-item">
        <Link
          className="navbar__nav-link"
          activeClass="navbar__nav-link_active"
          to="fish-dishes"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Рыбные блюда
        </Link>
      </div>

      <div className="navbar__nav-item">
        <Link
          className="navbar__nav-link"
          activeClass="navbar__nav-link_active"
          to="grill-menu"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Гриль меню
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
