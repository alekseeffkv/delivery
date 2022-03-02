import { connect } from 'react-redux';
import NavItem from '../nav-item';
import './navbar.scss';

function Navbar({ categories }) {
  return (
    <nav className="navbar">
      {categories.map((category) => (
        <NavItem key={category.id} id={category.id} name={category.name} />
      ))}
    </nav>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Navbar);
