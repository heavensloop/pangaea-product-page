import PropTypes from 'prop-types';
import FormDropdown from 'components/FormDropdown';

const ProductListHeader = ({
  category,
  categories,
  defaultValue,
  onChooseCategory,
}) => (
  <div className="product-header">
    <div className="wrapper">
      <div className="columns is-mobile product-filter">
        <div className="column is-8">
          <h1 className="filter-title">{category.label}</h1>
          <h5 className="filter-subtitle">{category.description}</h5>
        </div>
        <div className="column is-4">
          <FormDropdown
            options={categories}
            defaultValue={defaultValue}
            onChange={onChooseCategory}
            className="product-dropdown"
          />
        </div>
      </div>
    </div>
  </div>
);

ProductListHeader.propTypes = {
  category: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf({
    label: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  defaultValue: PropTypes.string.isRequired,
  onChooseCategory: PropTypes.string.isRequired,
}

export default ProductListHeader;
