import './modal.scss';

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';

import Button from '../button';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { ReactComponent as CartIcon } from '../../icons/empty-cart.svg';
import { ReactComponent as BagIcon } from '../../icons/bag.svg';

const icons = {
  cart: CartIcon,
  bag: BagIcon,
};

const Modal = ({ visible = false, icon, title, content, buttonProps, onButtonClick, onClose }) => {
  const Icon = icons[icon];

  const history = useHistory();

  const callbacks = {
    goToMenu: () => {
      history.push('/');
      onClose();
    },
  };

  const escape = ({ key }) => {
    if (key === 'Escape') onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  });

  return (
    <CSSTransition in={visible} unmountOnExit timeout={500} classNames="modal__window">
      <div className="modal">
        <div className="modal__window">
          <div className="modal__close" onClick={onClose}>
            <Plus />
          </div>
          {Icon && <Icon />}
          <div className={cn('modal__title', { modal__title_hidden: !title })}>{title}</div>
          <div className={cn('modal__content', { modal__content_hidden: !content })}>{content}</div>
          <Button onClick={callbacks[onButtonClick]} {...buttonProps} />
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
