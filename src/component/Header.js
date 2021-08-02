import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import Logo from "../image/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
function Header() {
  const [{ cart, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="amazon logo" className="logo" />
      </Link>
      <div className="searchBox">
        <input type="text" className="searchInput" />
        <SearchIcon className="searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_navMenu">
            <span className="hello">Hello</span>
            <h6>{user ? "Sign Out" : "Sign In"}</h6>
          </div>
        </Link>
        <div className="header_navMenu">
          <span className="return">Return</span>
          <h6>Order</h6>
        </div>
        <div className="header_navMenu">
          <span className="your">Your</span>
          <h6>Prime</h6>
        </div>
      </div>
      <Link to="/checkout">
        <div className="cartIcon">
          <ShoppingCartIcon />
          <span className="total_item_inCart">{cart.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
