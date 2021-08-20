import PropTypes from 'prop-types';
import './cart-item.scss';

const CartItem = ({
  item,
  currency,
  onRemoveItem,
  onDecrementQuantity,
  onIncrementQuantity,
}) => (
  <div className="cart-item">
    <span className="close is-pulled-right">
      <button
        type="submit"
        className="close-btn"
        onClick={() => onRemoveItem(item.product.id)}
      >
        x
      </button>
    </span>
    <div className="columns">
      <div className="column is-8">
        <h3>{item.product.title}</h3>
        <h5 className="mt-1">{item.product?.description}</h5>
        <div className="columns quantity">
          <div className="column is-6">
            <div className="item-quantity">
              <div className="has-text-left is-inline">
                <button
                  type="button"
                  className="modifier is-pulled-left"
                  onClick={() => onDecrementQuantity(item.product.id)}
                >
                  -
                </button>
              </div>
              <div className="value is-inline has-text-centered">{item.quantity}</div>
              <div className="has-text-right is-inline">
                <button
                  type="button"
                  className="modifier is-pulled-right mr-2"
                  onClick={() => onIncrementQuantity(item.product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="column is-6 mt-2">
            <span className="currency">{currency}</span>
            <span>{item.product.price}</span>
          </div>
        </div>
      </div>
      <div className="column is-4">
        <img
          className="item-image"
          src={item.product.image_url}
          alt={item.product.title}
        />
      </div>
    </div>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number,
    product: PropTypes.shape({
      id: PropTypes.string,
      image_url: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string,
    }),
  }).isRequired,
  currency: PropTypes.string.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onDecrementQuantity: PropTypes.func.isRequired,
  onIncrementQuantity: PropTypes.func.isRequired,
};

export default CartItem;
