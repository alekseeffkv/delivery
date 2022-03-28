import './button.scss';

import cn from 'classnames';

import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';
import { ReactComponent as CartIcon } from '../../icons/cart.svg';

const icons = {
  plus: PlusIcon,
  minus: MinusIcon,
  cart: CartIcon,
};

const Button = ({ title, icon, small = false, large = false, ...props }) => {
  const Icon = icons[icon];
  return (
    <button
      className={cn('button', {
        button_small: small,
        button_large: large,
      })}
      {...props}
    >
      {title && <div className="button__title">{title}</div>}
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
