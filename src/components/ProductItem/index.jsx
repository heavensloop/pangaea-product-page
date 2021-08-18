import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './product-item.scss';

const ProductItem = ({
  id,
  label,
  price,
  currency,
  onChoose,
  imageUrl,
  productDetailsUrl,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onChoose(id);
  };

  return (
    <div className="product-item">
      <Link to={productDetailsUrl}>
        <div className="product-info">
          <img src={imageUrl} alt="Keratin" className="product-image" />
          <h1 className="description">{label}</h1>
        </div>
      </Link>
      <p className="price">
        <span>{currency}</span>
        <span>{price}</span>
      </p>
      <button
        type="button"
        className="button add-to-cart"
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  onChoose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  productDetailsUrl: PropTypes.string.isRequired,
};

export default ProductItem;
