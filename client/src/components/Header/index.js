import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { RiShoppingBag2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import "./Header.scss";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  const cart = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems } = cart;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  return (
    <header className="header">
      <nav className="header__nav container">
        {isOpen && <MobileNav />}
        {isOpen ? (
          <GrClose
            className="header__nav-hamburger"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => setIsOpen(true)}
            className="header__nav-hamburger"
          />
        )}

        <Link to="/">
          <h2 className="header__nav-logo">CUE</h2>
        </Link>

        <ul className="header__nav-list">
          <li>
            <Link to="/products/shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/products/bags">Bags</Link>
          </li>
          <li>
            <Link to="/products/lookbook">Lookbook</Link>
          </li>
        </ul>
        <div className="header__nav-icons">
          <AiOutlineSearch />

          <Link to="/profile">
            <AiOutlineUser className="user-icon" />
          </Link>
          <Link to="/cart">
            <RiShoppingBag2Line />

            {cartItems.length > 0 && (
              <span>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};
