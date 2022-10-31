import React from "react";
import {useSelector, useDispatch} from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "../../Product/Search";
import {logout} from "../../../Actions/userAction";

function Navbar() {
  const dispatch=useDispatch();
  const { isAuthenticated } = useSelector(
    (state) => state.user
  );
    
    function logoutUser(){
      dispatch(logout());
    }

  return (
    <div className="navbar">
      <label className="navbar__logo">
        <h2>E-commerce</h2>
      </label>
      <Search/>
      <div className="navbar__right">
      <div className="navbar__products">
          <Link to="/products">Products</Link>
      </div>

        <div className="navbar__signin">
          <Link to="/">
          Contact Us</Link>
        </div>
        <div className="navbar__orders">
          <Link to="/">About Us</Link>
        </div>
        {isAuthenticated && user.role==="admin"? (
          <>
          <div className="navbar__signin">
          <Link to="/dashboard">
          Dashboard</Link>
        </div>
          <div className="navbar__signin">
          <Link to="/profile">
          Profile</Link>
        </div>
        <div className="navbar__signin">
          <Link to="/logout" onClick={logoutUser}>
          Logout</Link>
        </div>
          </>
          ):(
            isAuthenticated? (
              <>
          <div className="navbar__signin">
          <Link to="/myorders">
          Myorders</Link>
        </div>
          <div className="navbar__signin">
          <Link to="/profile">
          Profile</Link>
        </div>
        <div className="navbar__signin">
          <Link to="/logout" onClick={logoutUser}>
          Logout</Link>
        </div>
        </>
          ):(
            <div className="navbar__signin">
          <Link to="/login">
          SignIn/Register</Link>
        </div>
          )
            
        )
        }
          
        
        {/* <div className="navbar__cart">
          <Link to="/">
          <ShoppingCartIcon/>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
