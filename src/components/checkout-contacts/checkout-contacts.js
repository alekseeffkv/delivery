import CheckoutInput from '../checkout-input';

const CheckoutContacts = ({ register }) => {
  return (
    <div className="checkout__card">
      <div className="checkout__subtitle">1. Контактная информация</div>

      <div className="checkout__card-inner">
        <div className="checkout__card-row">
          <CheckoutInput type="text" placeholder="Имя" register={register('name')} required />
          <CheckoutInput type="tel" placeholder="Телефон" register={register('phone')} required />
        </div>
      </div>
    </div>
  );
};

export default CheckoutContacts;
