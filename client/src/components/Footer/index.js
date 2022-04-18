import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__content-top container">
        <div className="footer__links">
          <div className="quick-links">
            <h2>Quick links</h2>
            <ul>
              <Link to="/products/shoes">
                <li>Shoes</li>
              </Link>
              <Link to="/products/shirts">
                <li className="mt">Shirts</li>
              </Link>
              <Link to="/products/bags">
                <li className="mt">Bags</li>
              </Link>
            </ul>
          </div>
          <div className="info">
            <h2>Info</h2>
            <ul>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li className="mt">Contact us</li>
              </Link>
              <Link to="/shipping-policy">
                <li className="mt">Shipping policy</li>
              </Link>
              <Link to="/blog">
                <li className="mt">Blog</li>
              </Link>
            </ul>
          </div>
          <div className="mission">
            <h2>Our mission</h2>
            <p>
              Quality materials, good designs, craftsmanship and sustainability.
            </p>
          </div>
        </div>
        <div className="footer__newsletter">
          <div className="email">
            <h2>Subscribe to our emails</h2>
            <div className="field">
              <input type="text" placeholder="Email" />
              <button>
                <BsArrowRight />
              </button>
            </div>
          </div>
          <ul className="socials">
            <li>
              <AiOutlineTwitter />
            </li>
            <li>
              <AiFillFacebook />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
            <li>
              <FaTiktok />
            </li>
            <li>
              <AiFillYoutube />
            </li>
          </ul>
        </div>
      </section>
      <section className="footer__content-bottom">hi</section>
    </footer>
  );
};
