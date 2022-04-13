import CheckoutInput from '../checkout-input';

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const CheckoutTime = ({ register }) => {
  const [activeTime, setActiveTime] = useState(false);

  const onChange = () => {
    setActiveTime((prevState) => !prevState);
  };

  return (
    <div className="checkout__card">
      <div className="checkout__subtitle">3. Когда доставить</div>

      <div className="checkout__card-inner">
        <div className="checkout__card-row checkout__card-row_radio">
          <label className="checkout__label">
            <span>В ближайшее время</span>
            <CheckoutInput
              type="radio"
              value="asap"
              width="185"
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
              width="185"
              register={register('time', { onChange })}
              right
            />
          </label>

          <CSSTransition in={activeTime} unmountOnExit timeout={250} classNames="checkout-input">
            <CheckoutInput
              type="time"
              width="185"
              margin="15"
              placeholder="Укажите время"
              register={register('hourMinute')}
            />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTime;
