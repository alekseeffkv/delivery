import CheckoutInput from '../checkout-input';

const CheckoutAddress = ({ register }) => {
  return (
    <div className="checkout__card">
      <div className="checkout__subtitle">2. Адрес доставки</div>

      <div className="checkout__card-inner">
        <div className="checkout__card-row">
          <CheckoutInput
            type="text"
            placeholder="Укажите улицу"
            register={register('street')}
            required
          />
          <CheckoutInput
            type="text"
            placeholder="Номер дома"
            width="237"
            register={register('building')}
            required
          />
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
