import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { RiShoppingBag2Line } from "react-icons/ri";

import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav container">
        <Link to="/">
          <h2 className="header__nav-logo">DAWN</h2>
        </Link>
        <ul className="header__nav-list">
          <li>
            <Link to="/products/dresses">Dresses</Link>
          </li>
          <li>
            <Link to="/products/shirts">Shirts</Link>
          </li>
          <li>
            <Link to="/products/shoes">Shoes</Link>
          </li>
        </ul>
        <div className="header__nav-icons">
          <AiOutlineSearch />
          <AiOutlineUser />
          <RiShoppingBag2Line />
        </div>
      </nav>
    </header>
  );
};
