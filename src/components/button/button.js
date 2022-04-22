import './button.scss';

import cn from 'classnames';

import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';
import { ReactComponent as CartIcon } from '../../icons/cart.svg';
import { ReactComponent as BagIcon } from '../../icons/bag.svg';

const icons = {
  plus: PlusIcon,
  minus: MinusIcon,
  cart: CartIcon,
  bag: BagIcon,
};

const Button = ({
  title,
  icon,
  amount,
  small = false,
  medium = false,
  large = false,
  border = false,
  counter = false,
  ...props
}) => {
  const Icon = icons[icon];

  return (
    <button
      className={cn('button', {
        button_normal: !(small || medium || large),
        button_small: small,
        button_medium: medium,
        button_large: large,
      })}
      {...props}
    >
      <div
        className={cn('button__title', {
          button__title_hidden: !title,
        })}
      >
        {title}
      </div>
      <div
        className={cn('button__inner', {
          button__inner_hidden: !icon && !counter,
          button__inner_border: border,
        })}
      >
        {Icon && <Icon />}
        <div className={cn('button__counter', { button__counter_hidden: !counter })}>
          <div className="button__amount">{amount}</div>
        </div>
      </div>
    </button>
  );
};

export default Button;
