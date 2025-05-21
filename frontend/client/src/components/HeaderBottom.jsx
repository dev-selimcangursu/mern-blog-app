import React, { useState } from "react";
import NavLinks from "./NavLinks";
import "./HeaderBottom.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";

function HeaderBottom() {
  const [mobileSidebar, setMobileSidebar] = useState(false);

  function changeMobileSidebarStatus() {
    setMobileSidebar(!mobileSidebar);
    document.body.style.overflow = !mobileSidebar ? "hidden" : "auto";
  }

  function closeSidebar() {
    setMobileSidebar(false);
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <Sidebar status={mobileSidebar} closeSidebar={closeSidebar} />
      <div className="header__bottom">
        <FaSearch id="mobile_search__icon" />
        <div className="header__bottom__logo">
          <a href="/">
             <img
             style={{height:'auto',width:'100%'}}
            src="../../public/logo.png"
            alt="logo"
          />
          </a>
        </div>
        <NavLinks />
        <RxHamburgerMenu
          onClick={changeMobileSidebarStatus}
          id="mobile__sidebar__button"
        />
      </div>
    </>
  );
}

export default HeaderBottom;
