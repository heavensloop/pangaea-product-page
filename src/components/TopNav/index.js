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
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a href="/" className="navbar-item">
          Home
        </a>
        <a href="/" className="navbar-item">
          Documentation
        </a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a href="/" className="navbar-link">
            More
          </a>
          <div className="navbar-dropdown">
            <a href="/" className="navbar-item">
              About
            </a>
            <a href="/" className="navbar-item">
              Jobs
            </a>
            <a href="/" className="navbar-item">
              Contact
            </a>
            <hr className="navbar-divider" />
            <a href="/" className="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a href="/" className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a href="/" className="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default TopNav;
