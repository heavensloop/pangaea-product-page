import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartPreviewModal from 'components/CartPreviewModal';
import ProductList from 'components/ProductList';
import ProductListHeader from 'components/ProductListHeader';
import { addToCart, hideCart, showCart } from 'store/actions/cart';
import { GQL_PRODUCTS } from 'graphql/queries';
import categories from './categories';
import './products.scss';

const useUrlQuery = () => new URLSearchParams(useLocation().search);

const Products = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const query = useUrlQuery();
  const [currency, setCurrency] = useState('USD');
  const { isShowingCart } = useSelector(({ cart }) => ({
    isShowingCart: cart.isShowingCart,
  }));
  const selectedCategoryValue = query.get('category') || categories[0].value;
  const selectedCategory = categories.find(
    ({ value }) => value === selectedCategoryValue
  );
  const [defaultCategory, setDefaultCategory] = useState(selectedCategoryValue);
  const [attempts, setAttempts] = useState(0);
  const { error, data } = useQuery(GQL_PRODUCTS, {
    variables: { currency, attempts },
  });
  const productList = data?.products ?? [];
  const setProductCategory = (productCategory) => {
    setDefaultCategory(productCategory);
    history.push(`/?category=${productCategory}`);
  };
  const addProductToCart = (product) => dispatch(addToCart(product));
  const showCartMenu = (productId) => {
    const selectedProduct = productList.find(({ id }) => id === productId);
    addProductToCart(selectedProduct);
    dispatch(showCart());
  };
  const hideShoppingCart = () => dispatch(hideCart());

  const filteredList =
    defaultCategory === 'all-products'
      ? productList
      : productList.filter(({ title, prefix }) => {
          const regexString = selectedCategoryValue.replace('-', '|');
          const regex = new RegExp(regexString);
          return title.match(regex) || prefix?.match(regex);
        });

  useEffect(() => {
    if (error && attempts < 3) {
      setAttempts(attempts + 1);
    }
  }, [error, attempts]);

  return (
    <>
      <CartPreviewModal
        show={isShowingCart}
        onClose={hideShoppingCart}
        currency={currency}
        onChangeCurrency={setCurrency}
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
        currency={currency}
      />
    </>
  );
};

export default Products;
