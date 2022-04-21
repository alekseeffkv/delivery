import './search.scss';

import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '../../icons/search.svg';

import { productsListSelector } from '../../redux/selectors';

const Search = ({ products }) => {
  const [filtered, setFiltered] = useState([]);

  const [focusedInput, setFocusedInput] = useState(false);

  const findProduct = ({ target: { value } }) => {
    let filteredProducts = [];

    if (value) {
      filteredProducts = products
        .filter((product) => {
          const name = product.name.toLowerCase();
          const filter = value.toLowerCase();
          return name.includes(filter);
        })
        .slice(0, 5);

      setFiltered(filteredProducts);
    } else {
      setFiltered([]);
    }
  };

  const getFocus = () => {
    setFocusedInput(true);
  };

  const loseFocus = () => {
    setFocusedInput(false);
  };

  const history = useHistory();
  const goToProduct = () => {
    history.push(`/products/${filtered[0].id}`);
  };

  return (
    <div className="search">
      <input
        type="search"
        placeholder=" Введите название блюда"
        className={cn('search__input', { search__input_straight: filtered.length && focusedInput })}
        onChange={findProduct}
        onFocus={getFocus}
        onBlur={loseFocus}
      />

      <CSSTransition
        in={!!filtered.length && focusedInput}
        unmountOnExit
        timeout={200}
        classNames="search__inner"
      >
        <div className="search__inner">
          {filtered.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="search__item">
              {product.name}
            </Link>
          ))}
        </div>
      </CSSTransition>

      <button type="button" className="search__button" onClick={goToProduct}>
        <SearchIcon />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: productsListSelector(state),
});

export default connect(mapStateToProps)(Search);
