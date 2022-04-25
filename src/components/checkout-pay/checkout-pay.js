import './checkout-pay.scss';

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import CheckoutInput from '../checkout-input';

const CheckoutPay = ({ register }) => {
  const [activeCash, setActiveCash] = useState(true);

  const onChange = () => {
    setActiveCash((prevState) => !prevState);
  };

  return (
    <div className="checkout__card">
      <div className="checkout__subtitle">3. Оплатить</div>

      <div className="checkout-pay__card-inner">
        <label className="checkout__label">
          <span>Курьеру картой</span>
          <CheckoutInput type="radio" value="card" register={register('pay')} left />
        </label>

        <label className="checkout__label">
          <span>Наличными</span>
          <CheckoutInput
            type="radio"
            value="cash"
            defaultChecked
            register={register('pay', { onChange })}
            right
          />
        </label>

        <CSSTransition in={activeCash} unmountOnExit timeout={200} classNames="checkout-input">
          <CheckoutInput type="text" placeholder=" Сдача с" register={register('change')} />
        </CSSTransition>
      </div>
    </div>
  );
};

export default CheckoutPay;
