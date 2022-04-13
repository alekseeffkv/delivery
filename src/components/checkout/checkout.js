/* eslint-disable jsx-a11y/anchor-is-valid */
import './checkout.scss';

import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Button from '../button';
import RoundButton from '../round-button';
import CheckoutContacts from '../checkout-contacts';
import CheckoutAddress from '../checkout-address';
import CheckoutPay from '../checkout-pay';
import CheckoutTime from '../checkout-time';

const Checkout = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const history = useHistory();
  const goToCart = () => {
    history.push('/cart');
  };

  return (
    <div className="checkout">
      <div className="checkout__nav">
        <RoundButton icon="arrow" rotate="270" onClick={goToCart} />
        <div className="checkout__back">В корзину</div>
      </div>

      <div className="checkout__title">ОФОРМЛЕНИЕ ЗАКАЗА</div>

      <form onSubmit={handleSubmit} className="checkout__inner">
        <CheckoutContacts register={register} errors={errors} />

        <CheckoutAddress register={register} errors={errors} />

        <CheckoutPay register={register} />

        <CheckoutTime register={register} />

        <div className="checkout__card">
          <div className="checkout__card-row">
            <label className=" checkout__personal">
              <pre>
                Я согласен на обработку моих перс. данных в соответствии с <a href="#">Условиями</a>
              </pre>
              <input
                type="checkbox"
                className="checkout__checkbox"
                {...register('checkbox', { required: true })}
              />
              <div className="checkout__checkmark"></div>
            </label>

            <Button type="submit" title="Оформить заказ" large />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
