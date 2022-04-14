import './modal.scss';

import cn from 'classnames';

import Button from '../button';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { ReactComponent as CartIcon } from '../../icons/empty-cart.svg';

const icons = {
  cart: CartIcon,
};

const Modal = ({ icon, title, text, buttonProps, onClick }) => {
  const Icon = icons[icon];

  return (
    <div className="modal">
      <div className="modal__window">
        <div className="modal__close" onClick={onClick}>
          <Plus />
        </div>
        {Icon && <Icon />}
        <div className="modal__title">{title}</div>
        <div className={cn('modal__text', { modal__text_hidden: !text })}>{text}</div>
        <Button {...buttonProps} />
      </div>
    </div>
  );
};

export default Modal;
