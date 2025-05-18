import React from "react";
import './NavLinks.css'

function NavLinks() {
  return (
    <div className="header__bottom__menus">
      <ul>
        <li>
          <a href="">Türkiye</a>
        </li>
        <li>
          <a href="">Dünya</a>
        </li>
        <li>
          <a href="">Seyehat Rehberi</a>
        </li>
        <li>
          <a href="">LifeStyle</a>
        </li>
        <li>
          <a href="">Aktif Yaşam</a>
        </li>
        <li>
          <a href="">Mağaza</a>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
