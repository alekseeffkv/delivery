import { Link } from 'react-scroll';
import './nav-item.scss';

const NavItem = ({ id, name }) => {
  return (
    <div className="nav-item">
      <Link
        className="nav-item__link"
        activeClass="nav-item__link_active"
        to={id}
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >
        {name}
      </Link>
    </div>
  );
};

export default NavItem;
