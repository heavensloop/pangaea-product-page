import { Link } from 'react-router-dom';
import LanguageChooser from 'components/LanguageChooser';
import ShoppingCartIcon from 'components/ShoppingCartIcon';
import Logo from 'logo.png';
import './top-nav.scss';

const TopNav = () => (
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
        <Link to="/" className="navbar-item">
          <ShoppingCartIcon itemCount={0} />
        </Link>
        <div className="navbar-item">
          <LanguageChooser defaultValue="en" />
        </div>
      </div>
    </div>
  </nav>
);

export default TopNav;
