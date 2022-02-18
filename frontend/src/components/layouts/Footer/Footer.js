import React from "react";
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <h2>E-commerce</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="footer__social">
          <div className="footer__socialIcon" color="3B5999">
            <Facebook />
          </div>
          <div className="footer__socialIcon" color="E4405F">
            <Instagram />
          </div>
          <div className="footer__socialIcon" color="55ACEE">
            <Twitter />
          </div>
          <div className="footer__socialIcon" color="E60023">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="footer__center">
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="footer__right">
        <h2>Contact</h2>
        <div className="footer__contactItem">
          <Room style={{marginRight:"10px"}}/> Buildings Alyssa, Begonia, Banglore
        </div>
        <div className="footer__contactItem">
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </div>
        <div className="footer__contactItem">
          <MailOutline style={{marginRight:"10px"}} /> contact@ecommerce.com
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  );
};

export default Footer;