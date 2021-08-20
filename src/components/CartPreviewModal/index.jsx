import { useQuery } from '@apollo/client';
import { GQL_CURRENCIES } from 'graphql/queries';
import { AiOutlineRight } from 'react-icons/ai';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CartItem from 'components/CartItem';
import FormDropdown from 'components/FormDropdown';
import { useDispatch, useSelector } from 'react-redux';
import './cart-preview-modal.scss';
import { decrementItem, incrementItem, removeItem } from 'store/actions/cart';
import { useEffect, useState } from 'react';

const CartPreviewModal = ({ show, onClose, currency, onChangeCurrency }) => {
  const [fetchCurrencyAttempts, setFetchCurrencyAttempts] = useState(0);
  const { error, data } = useQuery(GQL_CURRENCIES);
  const dispatch = useDispatch();
  const currencies = data?.currency || [];
  const decrementItemQuantity = (itemId) => dispatch(decrementItem(itemId));
  const incrementItemQuantity = (itemId) => dispatch(incrementItem(itemId));
  const removeItemFromCart = (itemId) => dispatch(removeItem(itemId));
  const shoppingCart = useSelector(({ cart }) => cart.items);
  const shoppingCartIsEmpty = shoppingCart.length < 1;
  const subTotal = shoppingCart.reduce(
    (total, { product, quantity }) => total + product.price * quantity,
    0
  );

  useEffect(() => {
    if (error && fetchCurrencyAttempts < 3) {
      setFetchCurrencyAttempts(fetchCurrencyAttempts + 1);
    }
  }, [error, fetchCurrencyAttempts]);

  useEffect(() => {
    if (show) {
      document.body.classList.add('fixed-height');
    } else {
      document.body.classList.remove('fixed-height');
    }
  }, [show])

  return (
    <div className={classnames('modal', { 'is-active': show })}>
      <div className="modal-background" />
      <div className="cart-preview">
        <div className="heading">
          <div className="collapse-cart">
            <button type="button" className="circle" onClick={onClose}>
              <AiOutlineRight />
            </button>
          </div>
          <div className="title">
            <h3>Your Cart</h3>
          </div>
        </div>

        <div className="items">
          <div className="currency-chooser">
            <FormDropdown
              options={currencies}
              defaultValue={currency}
              onChange={onChangeCurrency}
            />
          </div>
          {shoppingCartIsEmpty ? (
            <div className="mt-3 has-text-centered">
              <p>There are no items in your cart</p>
            </div>
          ) : (
            <div className="cart-wrapper">
              <div className="item-list">
                {shoppingCart.map((item) => (
                  <CartItem
                    onRemoveItem={removeItemFromCart}
                    onDecrementQuantity={decrementItemQuantity}
                    onIncrementQuantity={incrementItemQuantity}
                    currency={currency}
                    item={item}
                  />
                ))}
              </div>
              <div className="product-summary">
                <div className="columns">
                  <div className="column is-4">Subtotal</div>
                  <div className="column is-8 has-text-right">
                    <span className="mr-2">{currency}</span>
                    <span>{subTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

CartPreviewModal.propTypes = {
  show: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onChangeCurrency: PropTypes.func.isRequired,
};

export default CartPreviewModal;
