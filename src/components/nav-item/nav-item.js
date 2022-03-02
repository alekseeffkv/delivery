import { Link } from 'react-scroll';
import './nav-item.scss';

function NavItem({ id, name }) {
  return (
    <div className="nav-item">
      <Link
        className="nav-item__link"
        activeClass="nav-item__link_active"
        to={id}
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
      >
        {name}
      </Link>
    </div>
  );
}

export default NavItem;
