import { Component } from 'react';
import { connect } from 'react-redux';

import NavItem from '../nav-item';
import CartButton from '../cart-button';
import './navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarCart: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const navbarCart = window.pageYOffset > 100;
    this.setState({
      navbarCart,
    });
  };

  render() {
    const { categories } = this.props;

    return (
      <nav className="navbar">
        <div className="navbar__inner">
          {categories.map((category) => (
            <NavItem key={category.id} id={category.id} name={category.name} />
          ))}
          {this.state.navbarCart && <CartButton />}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Navbar);
