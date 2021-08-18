import LanguageChooser from 'components/LanguageChooser';
import ShoppingCartIcon from 'components/ShoppingCartIcon';
import Logo from 'logo.png';
import './top-nav.scss';

const TopNav = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <div className="logo-wrapper">
          <img src={Logo} alt="App Logo" />
        </div>
      </a>
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
        <a href="/" className="navbar-item">
          Shop
        </a>
        <a href="/" className="navbar-item">
          About
        </a>
        <a href="/" className="navbar-item">
          Support
        </a>
        <a href="/" className="navbar-item">
          Blog
        </a>
      </div>
      <div className="navbar-end">
        <a href="/" className="navbar-item">
          Account
        </a>
        <a href="/" className="navbar-item">
          <ShoppingCartIcon itemCount={0} />
        </a>
        <div className="navbar-item">
          <LanguageChooser defaultValue="en" />
        </div>
      </div>
    </div>
  </nav>
);

export default TopNav;
