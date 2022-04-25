import './checkout-address.scss';

import CheckoutInput from '../checkout-input';

const CheckoutAddress = ({ register, errors }) => {
  return (
    <div className="checkout__card">
      <div className="checkout__subtitle">2. Адрес доставки</div>

      <div className="checkout-address__card-inner">
        <CheckoutInput
          type="text"
          placeholder=" Укажите улицу"
          register={register('street', { required: true })}
          error={errors.street}
          required
        />

        <CheckoutInput
          type="text"
          placeholder=" Номер дома"
          register={register('building', { required: true })}
          error={errors.building}
          required
        />

        <CheckoutInput type="text" placeholder=" № квартиры/офиса" register={register('flat')} />
        <CheckoutInput type="text" placeholder=" Подъезд" register={register('entrance')} />
        <CheckoutInput type="text" placeholder=" Этаж" register={register('floor')} />
        <CheckoutInput type="text" placeholder=" Комментарий" register={register('comment')} />
      </div>
    </div>
  );
};

export default CheckoutAddress;
