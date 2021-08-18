/* eslint-disable camelcase */
import FormDropdown from 'components/FormDropdown';
import ProductItem from 'components/ProductItem';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory, useLocation } from 'react-router-dom';
import { GQL_PRODUCTS } from 'graphql/queries';
import './products.scss';
import categories from './categories';

function useUrlQuery() {
  return new URLSearchParams(useLocation().search);
}

const Products = () => {
  const history = useHistory();
  const query = useUrlQuery();
  const selectedValue = query.get('category') || categories[0].value;
  const selectedCategory = categories.find(
    ({ value }) => value === selectedValue
  );
  const [defaultValue, setDefaultValue] = useState(selectedValue);
  const { loading, error, data } = useQuery(GQL_PRODUCTS);

  const setProductCategory = (productCategory) => {
    setDefaultValue(productCategory);
    history.push(`/?category=${productCategory}`);
  };

  const showCartMenu = (id) => {
    alert(`Showing Cart Menu for product - ${id}`);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  const filteredList =
    selectedValue === 'all-products'
      ? data?.products
      : data?.products.filter(({ title, prefix }) => {
          const regexString = selectedValue.replace('-', '|');
          const regex = new RegExp(regexString);
          return title.match(regex) || prefix?.match(regex);
        });

  return (
    <>
      <div className="product-header">
        <div className="wrapper">
          <div className="columns is-mobile product-filter">
            <div className="column is-8">
              <h1 className="filter-title">{selectedCategory.label}</h1>
              <h5 className="filter-subtitle">
                {selectedCategory.description}
              </h5>
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
      </div>
      <div className="product-list">
        <div className="wrapper">
          <div className="columns is-mobile is-multiline">
            {filteredList.map(({ id, price, title, image_url }) => (
              <div className="column is-one-third-tablet is-half-mobile has-text-centered">
                <ProductItem
                  id={id}
                  imageUrl={image_url}
                  label={title}
                  onChoose={showCartMenu}
                  price={`$${price}`}
                  productDetailsUrl="/"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
