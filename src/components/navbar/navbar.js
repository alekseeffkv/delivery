import { connect } from 'react-redux';
import NavItem from '../nav-item';
import './navbar.scss';

function Navbar({ categories }) {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {categories.map((category) => (
          <NavItem key={category.id} id={category.id} name={category.name} />
        ))}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Navbar);
