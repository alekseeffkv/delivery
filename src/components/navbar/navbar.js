import './navbar.scss';

import { NavLink } from 'react-router-dom';

const Navbar = ({ categories }) => {
  const navItems = categories.map(({ id, name }) => ({
    label: name,
    url: `/categories/${id}`,
  }));

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {navItems.map(({ label, url }) => (
          <NavLink
            to={url}
            key={label}
            className="navbar__nav-item"
            activeClassName="navbar_active"
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
