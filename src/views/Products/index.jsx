import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartPreviewModal from 'components/CartPreviewModal';
import ProductList from 'components/ProductList';
import ProductListHeader from 'components/ProductListHeader';
import { addToCart } from 'store/actions/cart';
import { GQL_PRODUCTS } from 'graphql/queries';
import categories from './categories';
import './products.scss';

const useUrlQuery = () => new URLSearchParams(useLocation().search);

const Products = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const query = useUrlQuery();
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isViewingCart, setIsViewingCart] = useState(false);
  const selectedCategoryValue = query.get('category') || categories[0].value;
  const selectedCategory = categories.find(
    ({ value }) => value === selectedCategoryValue
  );
  const [defaultCategory, setDefaultCategory] = useState(selectedCategoryValue);
  const { loading, error, data } = useQuery(GQL_PRODUCTS);
  const setProductCategory = (productCategory) => {
    setDefaultCategory(productCategory);
    history.push(`/?category=${productCategory}`);
  };
  const addProductToCart = (product) => dispatch(addToCart(product));
  const showCartMenu = (productId) => {
    const selectedProduct = data?.products.find(({ id }) => id === productId);
    addProductToCart(selectedProduct);
    setIsViewingCart(true);
  };

  if (loading) {
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
      <CartPreviewModal
        show={isViewingCart}
        onClose={() => setIsViewingCart(false)}
      />
      <ProductListHeader
        category={selectedCategory}
        categories={categories}
        onChooseCategory={setProductCategory}
        defaultCategory={defaultCategory}
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
