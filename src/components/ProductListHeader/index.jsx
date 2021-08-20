import PropTypes from 'prop-types';
import FormDropdown from 'components/FormDropdown';

const ProductListHeader = ({
  category,
  categories,
  defaultCategory,
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
            defaultValue={defaultCategory}
            onChange={onChooseCategory}
            className="product-dropdown"
          />
        </div>
      </div>
    </div>
  </div>
);

ProductListHeader.propTypes = {
  category: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })).isRequired,
  defaultCategory: PropTypes.string.isRequired,
  onChooseCategory: PropTypes.func.isRequired,
}

export default ProductListHeader;
