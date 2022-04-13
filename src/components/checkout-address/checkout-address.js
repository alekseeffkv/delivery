import CheckoutInput from '../checkout-input';
import { ErrorMessage } from '@hookform/error-message';

const CheckoutAddress = ({ register, errors }) => {
  return (
    <div className="checkout__card">
      <div className="checkout__subtitle">2. Адрес доставки</div>

      <div className="checkout__card-inner">
        <div className="checkout__card-row">
          <div className="checkout__card-field">
            <CheckoutInput
              type="text"
              placeholder="Укажите улицу"
              register={register('street', { required: 'Обязательное поле' })}
              error={errors.street}
              required
            />
            <ErrorMessage
              name="street"
              errors={errors}
              render={({ message }) => <div className="checkout__error">{message}</div>}
            />
          </div>

          <div className="checkout__card-field" style={{ maxWidth: 237 }}>
            <CheckoutInput
              type="text"
              placeholder="Номер дома"
              register={register('building', { required: 'Обязательное поле' })}
              error={errors.building}
              required
            />
            <ErrorMessage
              name="building"
              errors={errors}
              render={({ message }) => <div className="checkout__error">{message}</div>}
            />
          </div>
        </div>

        <div className="checkout__card-row">
          <CheckoutInput type="text" placeholder="№ квартиры/офиса" register={register('flat')} />
          <CheckoutInput type="text" placeholder="Подъезд" register={register('entrance')} />
          <CheckoutInput type="text" placeholder="Этаж" register={register('floor')} />
        </div>

        <div className="checkout__card-row">
          <CheckoutInput type="text" placeholder="Комментарий" register={register('comment')} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutAddress;
