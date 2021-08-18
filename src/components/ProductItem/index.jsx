import PropTypes from 'prop-types';
import './product-item.scss';

const ProductItem = ({
  id,
  label,
  price,
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
      <a href={productDetailsUrl}>
        <img src={imageUrl} alt="Keratin" className="product-image" />
        <h1 className="description">{label}</h1>
      </a>
      <p className="price">{price}</p>
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
  onChoose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  productDetailsUrl: PropTypes.string.isRequired,
}

export default ProductItem;
