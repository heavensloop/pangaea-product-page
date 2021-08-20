import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LanguageChooser from 'components/LanguageChooser';
import ShoppingCartIcon from 'components/ShoppingCartIcon';
import Logo from 'logo.png';
import './top-nav.scss';
import { showCart } from 'store/actions/cart';

const TopNav = () => {
  const dispatch = useDispatch();
  const showShoppingCart = () => dispatch(showCart());
  const shoppingCart = useSelector(({ cart }) => cart);
  const cartItemCount = shoppingCart?.items.reduce((carry, item) => carry + item.quantity, 0);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <div className="logo-wrapper">
            <img src={Logo} alt="App Logo" />
          </div>
        </Link>
        <button
          type="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="app-nav"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div id="app-nav" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Shop
          </Link>
          <Link to="/" className="navbar-item">
            About
          </Link>
          <Link to="/" className="navbar-item">
            Support
          </Link>
          <Link to="/" className="navbar-item">
            Blog
          </Link>
        </div>
        <div className="navbar-end">
          <Link to="/" className="navbar-item">
            Account
          </Link>
          <button type="button" className="navbar-item shopping-cart-button" onClick={showShoppingCart}>
            <ShoppingCartIcon itemCount={cartItemCount} />
          </button>
          <div className="navbar-item">
            <LanguageChooser defaultValue="en" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
