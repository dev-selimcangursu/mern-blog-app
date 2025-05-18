import React from "react";
import NavLinks from "./NavLinks";
import "./HeaderBottom.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";

function HeaderBottom() {
  return (
    <div className="header__bottom">
      <FaSearch id="mobile_search__icon"/>
      <div className="header__bottom__logo">
        <img
          src="https://www.bizevdeyokuz.com/wp-content/uploads/bey-logo-v5-retina.png"
          alt=""
        />
      </div>
      <NavLinks/>
      <RxHamburgerMenu id="mobile__sidebar__button" />
    </div>
  );
}

export default HeaderBottom;
