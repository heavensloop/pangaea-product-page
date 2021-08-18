import FormDropdown from 'components/FormDropdown';
import { useState } from 'react';
import './products.scss';

const categories = [
  { label: 'All Products', value: 'all-products', description: 'A 360° look at Lumin' },
  { label: 'New Products', value: 'new-products', description: 'Brand new upgrades for your routine' },
  { label: 'Sets', value: 'sets', description: 'Find your perfect routine' },
  { label: 'Skin Care', value: 'skin-care', description: 'Unlock your full face potential' },
  { label: 'Hair & Body Care', value: 'hair-and-body-care', description: 'Lather up with the good stuff' },
  { label: 'Accessories', value: 'accessories', description: 'Accessories' },
];

const Products = () => {
  const selectedValue =
    window.location.search?.replace('?category=', '') || categories[0].value;
  const selectedCategory = categories.find(
    ({ value }) => value === selectedValue
  );
  const [defaultValue, setDefaultValue] = useState(selectedValue);
  const setProductCategory = (productCategory) => {
    setDefaultValue(productCategory);
    window.location = `/?category=${productCategory}`;
  };

  return (
    <div className="product-header">
      <div className="columns product-filter">
        <div className="column is-8">
          <h1 className="filter-title">{selectedCategory.label}</h1>
          <h5 className="filter-subtitle">{selectedCategory.description}</h5>
        </div>
        <div className="column is-4">
          <FormDropdown
            options={categories}
            defaultValue={defaultValue}
            onChange={setProductCategory}
            className="product-dropdown"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
