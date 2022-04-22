import './navbar.scss';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import cn from 'classnames';

import { ReactComponent as Plus } from '../../icons/plus.svg';

import { navbarSelector } from '../../redux/selectors';
import { hideNavbar } from '../../redux/actions';

const Navbar = ({ categories, visibleNavbar, hideNavbar }) => {
  const navItems = categories.map(({ id, name }) => ({
    label: name,
    url: `/categories/${id}`,
  }));

  return (
    <nav className={cn('navbar', { navbar_open: visibleNavbar })}>
      <div className="navbar__container">
        <div className="navbar__close" onClick={hideNavbar}>
          <Plus />
        </div>

        {navItems.map(({ label, url }) => (
          <NavLink
            to={url}
            key={label}
            className="navbar__nav-item"
            activeClassName="navbar_active"
            onClick={hideNavbar}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    visibleNavbar: navbarSelector(state),
  };
};

const mapDispatchToProps = {
  hideNavbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
