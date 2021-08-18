import FormDropdown from 'components/FormDropdown';
import ProductItem from 'components/ProductItem';
import { useState } from 'react';
import './products.scss';

const categories = [
  {
    label: 'All Products',
    value: 'all-products',
    description: 'A 360° look at Lumin',
  },
  {
    label: 'New Products',
    value: 'new-products',
    description: 'Brand new upgrades for your routine',
  },
  { label: 'Sets', value: 'sets', description: 'Find your perfect routine' },
  {
    label: 'Skin Care',
    value: 'skin-care',
    description: 'Unlock your full face potential',
  },
  {
    label: 'Hair & Body Care',
    value: 'hair-and-body-care',
    description: 'Lather up with the good stuff',
  },
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

  const showCartMenu = (id) => {
    alert(`Showing Cart Menu for product - ${id}`);
  };

  return (
    <>
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
      <div className="product-list">
        <div className="columns is-multiline">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
            <div className="column is-4 has-text-centered">
              <ProductItem
                label="Keratin Strengthening Conditioner"
                price="$13.75"
                imageUrl="https://cdn.shopify.com/s/files/1/2960/5204/products/0_4_1024x1024.png?v=1602841693"
                onChoose={showCartMenu}
                productDetailsUrl="/"
                id={number}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
