import React from "react";
import "./MobileNav.scss";

import { Link, useLocation } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { SocialIcons } from "../../SocialIcons";
export const MobileNav = () => {
  const location = useLocation();

  return (
    <nav className="mobile-nav">
      <ul className="mobile-nav__list">
        <Link
          className={location.pathname.split("/")[2] === "all" ? "active" : ""}
          to="/products/all"
        >
          <li>All</li>
          <BsArrowRight />
        </Link>
        <Link
          className={location.pathname.split("/")[2] === "bags" ? "active" : ""}
          to="/products/bags"
        >
          <li>Bags</li>
          <BsArrowRight />
        </Link>
        <Link
          className={
            location.pathname.split("/")[2] === "shoes" ? "active" : ""
          }
          to="/products/shoes"
        >
          <li>Shoes</li>
          <BsArrowRight />
        </Link>
      </ul>
      <div className="mobile-nav__bottom">
        <Link to="/profile">
          <AiOutlineUser className="user-icon" />
          <span>Account</span>
        </Link>
        <SocialIcons classname="socials" />
      </div>
    </nav>
  );
};
