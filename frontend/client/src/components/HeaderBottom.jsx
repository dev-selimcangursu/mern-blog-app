import React from "react";
import NavLinks from "./NavLinks";
import './HeaderBottom.css'
function HeaderBottom() {
  return (
    <div className="header__bottom">
      <div className="header__bottom__logo">
        <img src="https://www.bizevdeyokuz.com/wp-content/uploads/bey-logo-v5-retina.png" alt="" />
      </div>
      <NavLinks/>
    </div>
  );
}

export default HeaderBottom;
