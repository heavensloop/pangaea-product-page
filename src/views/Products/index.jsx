import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProductList from 'components/ProductList';
import ProductListHeader from 'components/ProductListHeader';
import { addToCart } from 'store/actions/cart';
import { GQL_PRODUCTS } from 'graphql/queries';
import categories from './categories';
import './products.scss';

function useUrlQuery() {
  return new URLSearchParams(useLocation().search);
}

const Products = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const shoppingCart = useSelector(({ cart }) => cart);
  const query = useUrlQuery();
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const selectedCategoryValue = query.get('category') || categories[0].value;
  const selectedCategory = categories.find(
    ({ value }) => value === selectedCategoryValue
  );
  const [defaultCategory, setDefaultCategory] = useState(selectedCategoryValue);
  const { isLoading, error, data } = useQuery(GQL_PRODUCTS);

  const setProductCategory = (productCategory) => {
    setDefaultCategory(productCategory);
    history.push(`/?category=${productCategory}`);
  };

  const addProductToCart = (product) => dispatch(addToCart(product));
  const showCartMenu = (productId) => {
    const selectedProduct = data?.products.find(({ id }) => id === productId);
    addProductToCart(selectedProduct);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  const filteredList =
    defaultCategory === 'all-products'
      ? data?.products
      : data?.products.filter(({ title, prefix }) => {
          const regexString = selectedCategoryValue.replace('-', '|');
          const regex = new RegExp(regexString);
          return title.match(regex) || prefix?.match(regex);
        });

  return (
    <>
      <ProductListHeader
        category={selectedCategory}
        categories={categories}
        onChooseCategory={setProductCategory}
      />
      <ProductList
        items={filteredList}
        onChooseItem={showCartMenu}
        currency={selectedCurrency}
      />
    </>
  );
};

export default Products;
