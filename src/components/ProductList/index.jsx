/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import ProductItem from 'components/ProductItem';

const ProductList = ({ items, onChooseItem, currency }) => (
  <div className="product-list">
    <div className="wrapper">
      <div className="columns is-mobile is-multiline">
        {items?.map(({ id, price, title, image_url }) => (
          <div
            key={`prod-${id}`}
            className="column is-one-third-tablet is-half-mobile has-text-centered"
          >
            <ProductItem
              id={id}
              imageUrl={image_url}
              label={title}
              onChoose={onChooseItem}
              price={price}
              productDetailsUrl="/"
              currency={currency}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image_url: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      currency: PropTypes.string,
    })
  ).isRequired,
  onChooseItem: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
};

export default ProductList;
