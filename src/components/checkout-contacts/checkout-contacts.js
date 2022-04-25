import './checkout-contacts.scss';

import CheckoutInput from '../checkout-input';

const CheckoutContacts = ({ register, errors }) => {
  return (
    <div className="checkout__card">
      <div className="checkout__subtitle">1. Контактная информация</div>

      <div className="checkout-contacts__card-inner">
        <CheckoutInput
          type="text"
          placeholder=" Имя"
          register={register('name', { required: true })}
          error={errors.name}
          required
        />

        <CheckoutInput
          type="tel"
          placeholder=" Телефон"
          register={register('phone', { required: true })}
          error={errors.phone}
          required
        />
      </div>
    </div>
  );
};

export default CheckoutContacts;
