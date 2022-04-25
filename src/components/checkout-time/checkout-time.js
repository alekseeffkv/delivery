import './checkout-time.scss';

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import CheckoutInput from '../checkout-input';

const CheckoutTime = ({ register }) => {
  const [activeTime, setActiveTime] = useState(false);

  const onChange = () => {
    setActiveTime((prevState) => !prevState);
  };

  return (
    <div className="checkout__card">
      <div className="checkout__subtitle">3. Когда доставить</div>

      <div className="checkout-time__card-inner">
        <label className="checkout__label">
          <span>В ближайшее время</span>
          <CheckoutInput
            type="radio"
            value="asap"
            defaultChecked
            register={register('time')}
            left
          />
        </label>

        <label className="checkout__label">
          <span>Ко времени</span>
          <CheckoutInput
            type="radio"
            value="bytime"
            register={register('time', { onChange })}
            right
          />
        </label>

        <CSSTransition in={activeTime} unmountOnExit timeout={200} classNames="checkout-input">
          <CheckoutInput type="time" register={register('hourMinute')} />
        </CSSTransition>
      </div>
    </div>
  );
};

export default CheckoutTime;
