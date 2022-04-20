import './not-found.scss';

import { useHistory } from 'react-router-dom';

import Button from '../button';

const NotFound = () => {
  const history = useHistory();

  const goToMenu = () => {
    history.push('/');
  };

  return (
    <div className="not-found">
      <div className="not-found__title">ОШИБКА 404</div>

      <div className="not-found__content">
        Упс, похоже эта страница не найдена.
        <br />
        Зато вы всегда можете найти вкусное блюдо у нас в меню.
      </div>

      <Button type="button" title="Посмотреть меню" onClick={goToMenu} large />
    </div>
  );
};

export default NotFound;
