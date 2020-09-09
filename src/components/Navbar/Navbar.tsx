import React from "react";
import { Link } from "react-router-dom";

export interface NavbarProps {}
const Navbar: React.SFC<NavbarProps> = () => {
  return (
    <div>
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark info-color">
        <Link to="/" className="navbar-brand">
          Shopsy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-4"
          aria-controls="navbarSupportedContent-4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/items" className="nav-link">
                <i className="fas fa-shopping-cart mr-1"></i> Items
                <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <i className="fas fa-shopping-cart mr-1"></i> View cart
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <i className="fas fa-user mr1"></i> Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
