import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <label className="navbar__logo">
        <h2>E-commerce</h2>
      </label>

      <div className="navbar__search">
        <input type="text" placeholder="Search for products...." />
        <SearchIcon className="navbar__searchIcon" style={{color:"black"}}/>
      </div>
      <div className="navbar__right">
      <div className="navbar__orders">
          <Link to="/">My Orders</Link>
        </div>
        <div className="navbar__signin">
          <Link to="/">
          Contact Us</Link>
        </div>
        <div className="navbar__orders">
          <Link to="/">About Us</Link>
        </div>
        <div className="navbar__signin">
          <Link to="/">
          SignIn/Register</Link>
        </div>
        <div className="navbar__cart">
          <Link to="/">
          <ShoppingCartIcon/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
