import './search.scss';

import { ReactComponent as SearchIcon } from '../../icons/search.svg';

const Search = () => {
  return (
    <div className="search">
      <input type="search" placeholder=" Введите название блюда" className="search__input" />
      <button type="button" className="search__button">
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
