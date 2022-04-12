import './checkout-input.scss';

import cn from 'classnames';

const CheckoutInput = ({
  type,
  value,
  defaultValue,
  defaultChecked,
  placeholder,
  width,
  margin,
  register,
  required,
  left,
  right,
}) => {
  const asterisk = required ? '*' : '';

  return (
    <input
      type={type}
      value={value}
      defaultValue={defaultValue}
      defaultChecked={defaultChecked}
      placeholder={`${placeholder}${asterisk}`}
      className={cn('checkout-input', {
        'checkout-input_radio': type === 'radio',
        'checkout-input_radio-left': left,
        'checkout-input_radio-right': right,
      })}
      style={{ maxWidth: `${width}px`, marginLeft: `${margin}px` }}
      {...register}
    />
  );
};

export default CheckoutInput;
