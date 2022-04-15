import { ErrorMessage } from '@hookform/error-message';

import CheckoutInput from '../checkout-input';

const CheckoutContacts = ({ register, errors }) => {
  return (
    <div className="checkout__card">
      <div className="checkout__subtitle">1. Контактная информация</div>

      <div className="checkout__card-inner">
        <div className="checkout__card-row">
          <div className="checkout__card-field">
            <CheckoutInput
              type="text"
              placeholder="Имя"
              register={register('name', { required: 'Обязательное поле' })}
              error={errors.name}
              required
            />
            <ErrorMessage
              name="name"
              errors={errors}
              render={({ message }) => <div className="checkout__error">{message}</div>}
            />
          </div>

          <div className="checkout__card-field">
            <CheckoutInput
              type="tel"
              placeholder="Телефон"
              register={register('phone', { required: 'Обязательное поле' })}
              error={errors.phone}
              required
            />
            <ErrorMessage
              name="phone"
              errors={errors}
              render={({ message }) => <div className="checkout__error">{message}</div>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContacts;
