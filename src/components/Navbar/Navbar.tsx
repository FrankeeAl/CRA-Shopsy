import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

export interface NavbarProps {}

const Navbar: React.SFC<NavbarProps> = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  const toggleSearchHandler = () => {
    setToggleSearch(!toggleSearch);
  };
  return (
    <div>
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark">
        <Link to="/" className="navbar-brand text-white">
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
              <Link to="/items" className="nav-link text-white">
                <i className="fas fa-list mr-1"></i> Items
                <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cart" className="nav-link  text-white">
                <i className="fas fa-shopping-cart mr-1"></i> View cart
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link  text-white">
                <i className="fas fa-user mr-1"></i> Sign in
              </Link>
            </li>

            <li className="nav-item pointer">
              <div
                className="nav-link  text-white"
                onClick={toggleSearchHandler}
              >
                <i className="fas fa-search mr-1"></i> Search
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {toggleSearch && <Search />}
    </div>
  );
};

export default Navbar;
