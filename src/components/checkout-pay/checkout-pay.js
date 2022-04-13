import CheckoutInput from '../checkout-input';

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const CheckoutPay = ({ register }) => {
  const [activeCash, setActiveCash] = useState(true);

  const onChange = () => {
    setActiveCash((prevState) => !prevState);
  };

  return (
    <div className="checkout__card">
      <div className="checkout__subtitle">3. Оплатить</div>

      <div className="checkout__card-inner">
        <div className="checkout__card-row checkout__card-row_radio">
          <label className="checkout__label">
            <span>Курьеру картой</span>
            <CheckoutInput type="radio" value="card" width="185" register={register('pay')} left />
          </label>

          <label className="checkout__label">
            <span>Наличными</span>
            <CheckoutInput
              type="radio"
              value="cash"
              width="185"
              defaultChecked
              register={register('pay', { onChange })}
              right
            />
          </label>

          <CSSTransition in={activeCash} unmountOnExit timeout={250} classNames="checkout-input">
            <CheckoutInput
              type="text"
              width="185"
              margin="15"
              placeholder="Сдача с"
              register={register('change')}
            />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPay;
