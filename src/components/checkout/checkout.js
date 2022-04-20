/* eslint-disable jsx-a11y/anchor-is-valid */
import './checkout.scss';

import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../button';
import RoundButton from '../round-button';
import CheckoutContacts from '../checkout-contacts';
import CheckoutAddress from '../checkout-address';
import CheckoutPay from '../checkout-pay';
import CheckoutTime from '../checkout-time';
import Loader from '../loader';

import { orderLoadingSelector } from '../../redux/selectors';
import { createOrder } from '../../redux/actions';

const Checkout = ({ loading, createOrder }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  const goToCart = () => {
    history.push('/cart');
  };

  return (
    <div className="checkout">
      {loading && (
        <div className="checkout__loading">
          <Loader />
        </div>
      )}

      <div className="checkout__nav">
        <RoundButton icon="arrow" rotate="270" onClick={goToCart} />
        <div className="checkout__back">В корзину</div>
      </div>

      <div className="checkout__title">ОФОРМЛЕНИЕ ЗАКАЗА</div>

      <form onSubmit={handleSubmit(createOrder)} className="checkout__inner">
        <CheckoutContacts register={register} errors={errors} />

        <CheckoutAddress register={register} errors={errors} />

        <CheckoutPay register={register} />

        <CheckoutTime register={register} />

        <div className="checkout__card">
          <div className="checkout__card-row">
            <label className=" checkout__personal">
              <pre>
                Я согласен на обработку моих перс. данных в соответствии с{' '}
                <Link to="#">Условиями</Link>
              </pre>
              <input
                type="checkbox"
                className="checkout__checkbox"
                {...register('personal', { required: true })}
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

const mapStateToProps = (state) => {
  return {
    loading: orderLoadingSelector(state),
  };
};

const mapDispatchToProps = { createOrder };

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
